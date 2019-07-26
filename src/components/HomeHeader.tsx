import React from 'react';
import memoize from 'memoize-one';

import Select, { DefaultOptionType } from './Select';

import { SKILL_UNSELECTED } from '../utils/constants';
import { Project } from '../data/projects';
import { ValueType } from 'react-select/lib/types';

interface iProps {
  projects: Project[];
  onSkillChange: (skill: DefaultOptionType | null | undefined) => void;
  selectedSkill?: DefaultOptionType | null | undefined;
}

class HomeHeader extends React.PureComponent<iProps> {
  getOptions = memoize((projects: Project[]) => {
    // TODO: #16 - Maybe sort this by most occurrences in projects?
    return (
      projects
        // Get the list of skills from each project
        .map(p => p.skills)
        // Combine and dedupe the lists
        .reduce(
          (acc, curr) => {
            return [...new Set([...acc, ...curr.map(skill => skill.name)])];
          },
          [SKILL_UNSELECTED],
        )
        // Format each item for react-select
        .map(name => ({ value: name, label: name }))
    );
  });

  handleSkillChange = (value: ValueType<DefaultOptionType>): void => {
    const skill = value || null;
    // TODO: Fix this type.. it thinks it can be an array but we're not using
    // a multiselect...
    this.props.onSkillChange(skill as DefaultOptionType | null | undefined);
  };

  render() {
    const { projects, selectedSkill } = this.props;
    const options: DefaultOptionType[] = this.getOptions(projects);

    return (
      <header className="home__header">
        <div className="container">
          <span className="home__header__name">Jemar knows</span>
          <div className="home__header__search__control-container">
            <Select
              options={options}
              value={selectedSkill || options[0]}
              onChange={this.handleSkillChange}
              placeholder={SKILL_UNSELECTED}
            />
            <span>.</span>
          </div>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
