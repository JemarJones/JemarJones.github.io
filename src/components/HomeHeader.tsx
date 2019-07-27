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
      // Get the list of skills from each project
      let skills = projects.map((p: Project): Skill[] => p.skills).flat();

      // Create a map of skill -> number of occurances,
      // to be used for sorting skills by frequency
      interface SkillFrequencyMap {
        [skillName: string]: number;
      }
      const skillFreqMap: SkillFrequencyMap = skills.reduce(
        (skillFreqMap: SkillFrequencyMap, skill: Skill): SkillFrequencyMap => {
          skillFreqMap[skill.name] = (skillFreqMap[skill.name] || 0) + 1;
          return skillFreqMap;
        },
        {}
      );

      // Dedupe the list of skills
      skills = uniqBy(skills, (skill: Skill): string => skill.name);
      // Sort by frequency of skill occurance
      skills.sort(
        (a: Skill, b: Skill): number => {
          return skillFreqMap[b.name] - skillFreqMap[a.name];
        }
      );
      // and finally, add the generic skill to the beginning
      skills.unshift(GENERIC_SKILL);

      return skills;
    },
    [projects]
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
    [onSelectedSkillChange]
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
