import React from 'react';
import memoize from 'memoize-one';
import uniqBy from 'lodash.uniqby';

import Select from './Select';

import { GENERIC_SKILL, Project, Skill } from '../utils/constants';

interface iProps {
  projects: Project[];
  onSelectedSkillChange: (skill: Skill | null | undefined) => void;
  selectedSkill?: Skill | null | undefined;
}

class HomeHeader extends React.PureComponent<iProps> {
  getOptions = memoize(
    (projects: Project[]): Skill[] => {
      // TODO: #16 - Maybe sort this by most occurrences in projects?
      const skills = projects
        // Get the list of skills from each project
        .map(p => p.skills)
        .flat();
      skills.unshift(GENERIC_SKILL);
      return uniqBy(skills, (skill: Skill) => skill.name);
    },
  );

  getSkillText = (skill: Skill) => {
    return skill.name;
  };

  render() {
    const { projects, selectedSkill, onSelectedSkillChange } = this.props;
    const options: Skill[] = this.getOptions(projects);

    return (
      <header className="home__header">
        <div className="container">
          <span className="home__header__name">Jemar knows</span>
          <div className="home__header__search__control-container">
            <Select
              options={options}
              value={selectedSkill || options[0]}
              getOptionLabel={this.getSkillText}
              getOptionValue={this.getSkillText}
              onSingleChange={onSelectedSkillChange}
              placeholder={GENERIC_SKILL.name}
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
