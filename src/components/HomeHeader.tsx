import React, {
  useCallback,
  useMemo,
  useEffect,
  ReactElement,
  useState,
} from 'react';
import uniqBy from 'lodash.uniqby';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

import Select from './Select';

import { WorkItem, Skill } from '../utils/constants';
import { SKILLS } from '../data/workItems';

interface iProps {
  workItems: WorkItem[];
  onSelectedSkillChange: (skill: Skill) => void;
  selectedSkill: Skill;
}

const HomeHeader: React.FC<iProps> = ({
  workItems,
  selectedSkill,
  onSelectedSkillChange,
}): ReactElement | null => {
  const [headerShrunk, setHeaderShrunk] = useState<boolean>(false);
  useEffect((): (() => void) => {
    const scrollListener = throttle((): void => {
      // Shrink after 60pxs of scrolling
      // determined mostly by experimenting..
      if (window.scrollY > 60) {
        setHeaderShrunk(true);
      } else {
        setHeaderShrunk(false);
      }
    }, 100);

    window.addEventListener('scroll', scrollListener);

    return (): void => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const options: Skill[] = useMemo((): Skill[] => {
    // Get the list of skills from each work item
    let skills: Skill[] = workItems
      .map((p: WorkItem): Skill[] => p.skills)
      .flat();

    // Create a map of skill -> number of occurances,
    // to be used for sorting skills by frequency
    interface SkillFrequencyMap {
      [skillName: string]: number;
    }
    const skillFreqMap: SkillFrequencyMap = skills.reduce(
      (skillFreqMap: SkillFrequencyMap, skill: Skill): SkillFrequencyMap => {
        skillFreqMap[skill.name] = (skillFreqMap[skill.name] ?? 0) + 1;
        return skillFreqMap;
      },
      {}
    );

    // Dedupe the list of skills
    skills = uniqBy(skills, (skill: Skill): string => skill.name);
    // Sort by frequency of skill occurance
    skills.sort((a: Skill, b: Skill): number => {
      return skillFreqMap[b.name] - skillFreqMap[a.name];
    });
    // and finally, add the generic skill to the beginning
    skills.unshift(SKILLS.generic);

    return skills;
  }, [workItems]);

  const getSkillText = useCallback((skill: Skill): string => {
    return skill.name;
  }, []);

  const handleSelectedSkillChange = useCallback(
    (skill: Skill | undefined | null): void => {
      onSelectedSkillChange(skill ?? SKILLS.generic);
    },
    [onSelectedSkillChange]
  );

  return (
    <header
      className={classNames('home__header', {
        shrunk: headerShrunk,
      })}
    >
      <div className="container">
        <span className="home__header__name" id="home__header__name">
          Jemar knows
        </span>
        <div className="home__header__search__control-container">
          <Select
            aria-labelledby="home__header__name"
            options={options}
            value={selectedSkill}
            getOptionLabel={getSkillText}
            getOptionValue={getSkillText}
            onSingleChange={handleSelectedSkillChange}
            placeholder={SKILLS.generic.name}
          />
          <span>.</span>
        </div>
      </div>
      <p className="home__header__intro" aria-hidden={headerShrunk}>
        Hey! I'm a Developer located in Toronto, and I love building impactful
        software.
      </p>
    </header>
  );
};

export default HomeHeader;
