import React, { useState, useMemo, ReactElement, useCallback } from 'react';
import { wrapGrid } from 'animate-css-grid';

import HomeHeader from '../components/HomeHeader';
import WorkTiles, { SelectedProjectMapping } from '../components/WorkTiles';
import Footer from '../components/Footer';

import { PROJECTS, Project, Skill, GENERIC_SKILL } from '../utils/constants';

interface iProps {}

const Home: React.FC<iProps> = (): ReactElement | null => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();

  const selectedProjectMapping = useMemo(
    (): SelectedProjectMapping => {
      return PROJECTS.reduce(
        (
          mapping: SelectedProjectMapping,
          project: Project
        ): SelectedProjectMapping => {
          const selected =
            // When nothing is selected, we show everything
            !selectedSkill ||
            // When generic skill is selected, we show everything
            selectedSkill.name === GENERIC_SKILL.name ||
            // Otherwise, select matching projects
            project.skills.some(
              (skill: Skill): boolean => skill.name === selectedSkill.name
            );
          mapping[project.name] = selected;
          return mapping;
        },
        {}
      );
    },
    [selectedSkill]
  );

  const wrapGripRef = useCallback((node: HTMLDivElement | null): void => {
    if (node) {
      wrapGrid(node, {
        easing: 'linear',
      });
    }
  }, []);

  return (
    <div className="home" ref={wrapGripRef}>
      <HomeHeader
        projects={PROJECTS}
        onSelectedSkillChange={setSelectedSkill}
        selectedSkill={selectedSkill}
      />
      <section className="home__main container">
        <WorkTiles
          projects={PROJECTS}
          selectedProjectMapping={selectedProjectMapping}
        />
      </section>
      <Footer className="home__footer" />
    </div>
  );
};

export default Home;
