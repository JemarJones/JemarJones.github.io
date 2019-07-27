import React, { useCallback, useMemo, ReactElement } from 'react';
import uniqBy from 'lodash.uniqby';

import Select from './Select';

import { GENERIC_SKILL, Project, Skill } from '../utils/constants';

interface iProps {
  projects: Project[];
  onSelectedSkillChange: (skill: Skill | undefined) => void;
  selectedSkill?: Skill;
}

const HomeHeader: React.FC<iProps> = ({
  projects,
  selectedSkill,
  onSelectedSkillChange,
}): ReactElement | null => {
  const options: Skill[] = useMemo(
    (): Skill[] => {
      // TODO: #16 - Maybe sort this by most occurrences in projects?
      const skills = projects
        // Get the list of skills from each project
        .map((p: Project): Skill[] => p.skills)
        .flat();
      skills.unshift(GENERIC_SKILL);
      return uniqBy(skills, (skill: Skill): string => skill.name);
    },
    [projects],
  );

  const getSkillText = useCallback((skill: Skill): string => {
    return skill.name;
  }, []);

  const handleSelectedSkillChange = useCallback(
    (skill: Skill | undefined | null): void => {
      // We've either not selected a skill yet, or we have.
      // No need for null in this case.
      onSelectedSkillChange(skill || undefined);
    },
    [onSelectedSkillChange],
  );

  return (
    <header className="home__header">
      <div className="container">
        <span className="home__header__name">Jemar knows</span>
        <div className="home__header__search__control-container">
          <Select
            options={options}
            value={selectedSkill || options[0]}
            getOptionLabel={getSkillText}
            getOptionValue={getSkillText}
            onSingleChange={handleSelectedSkillChange}
            placeholder={GENERIC_SKILL.name}
          />
          <span>.</span>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
