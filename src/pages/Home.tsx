import React, { useMemo, ReactElement, useCallback } from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles, { SelectedWorkItemMapping } from '../components/WorkTiles';
import Footer from '../components/Footer';
import useQueryParamState from '../hooks/useQueryParamState';

import { WorkItem, Skill } from '../utils/constants';
import { WORK_ITEMS, SKILLS } from '../data/workItems';

interface iProps {}

const Home: React.FC<iProps> = (): ReactElement | null => {
  const [selectedSkill, setSelectedSkill] = useQueryParamState<Skill>(
    'jemarKnows',
    SKILLS.generic,
    useCallback((s: Skill): string => s.name, []),
    useCallback(
      (name: string): Skill =>
        Object.values(SKILLS).find(
          (s): boolean => s.name.toLowerCase() === name.toLowerCase()
        ) ?? SKILLS.generic,
      []
    )
  );

  const selectedWorkItemMapping = useMemo((): SelectedWorkItemMapping => {
    return WORK_ITEMS.reduce(
      (
        mapping: SelectedWorkItemMapping,
        workItem: WorkItem
      ): SelectedWorkItemMapping => {
        const selected =
          // When nothing is selected, we show everything
          !selectedSkill ||
          // When generic skill is selected, we show everything
          selectedSkill.name === SKILLS.generic.name ||
          // Otherwise, select matching work items
          workItem.skills.some(
            (skill: Skill): boolean => skill.name === selectedSkill.name
          );
        mapping[workItem.name] = selected;
        return mapping;
      },
      {}
    );
  }, [selectedSkill]);

  return (
    <div className="home">
      <HomeHeader
        workItems={WORK_ITEMS}
        onSelectedSkillChange={setSelectedSkill}
        selectedSkill={selectedSkill}
      />
      <main role="main" className="home__main container">
        <WorkTiles
          workItems={WORK_ITEMS}
          selectedWorkItemMapping={selectedWorkItemMapping}
        />
      </main>
      <Footer className="home__footer" />
    </div>
  );
};

export default Home;
