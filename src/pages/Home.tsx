import React, { useState, useMemo, ReactElement } from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles, { SelectedWorkItemMapping } from '../components/WorkTiles';
import Footer from '../components/Footer';

import { WORK_ITEMS, WorkItem, Skill, GENERIC_SKILL } from '../utils/constants';

interface iProps {}

const Home: React.FC<iProps> = (): ReactElement | null => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();

  const selectedWorkItemMapping = useMemo(
    (): SelectedWorkItemMapping => {
      return WORK_ITEMS.reduce(
        (
          mapping: SelectedWorkItemMapping,
          workItem: WorkItem
        ): SelectedWorkItemMapping => {
          const selected =
            // When nothing is selected, we show everything
            !selectedSkill ||
            // When generic skill is selected, we show everything
            selectedSkill.name === GENERIC_SKILL.name ||
            // Otherwise, select matching work items
            workItem.skills.some(
              (skill: Skill): boolean => skill.name === selectedSkill.name
            );
          mapping[workItem.name] = selected;
          return mapping;
        },
        {}
      );
    },
    [selectedSkill]
  );

  return (
    <div className="home">
      <HomeHeader
        workItems={WORK_ITEMS}
        onSelectedSkillChange={setSelectedSkill}
        selectedSkill={selectedSkill}
      />
      <section className="home__main container">
        <WorkTiles
          workItems={WORK_ITEMS}
          selectedWorkItemMapping={selectedWorkItemMapping}
        />
      </section>
      <Footer className="home__footer" />
    </div>
  );
};

export default Home;
