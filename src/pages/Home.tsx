import React, { useState, useMemo, ReactElement } from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles from '../components/WorkTiles';
import Footer from '../components/Footer';

import { PROJECTS, Project, Skill, GENERIC_SKILL } from '../utils/constants';

interface iProps {}

const Home: React.FC<iProps> = (): ReactElement | null => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();
  const filteredProjects = useMemo(
    (): Project[] => {
      return selectedSkill
        ? PROJECTS.filter(
            (project): boolean =>
              selectedSkill.name === GENERIC_SKILL.name ||
              project.skills.some(
                (skill: Skill): boolean => skill.name === selectedSkill.name
              )
          )
        : PROJECTS;
    },
    [selectedSkill]
  );

  return (
    <div className="home">
      <HomeHeader
        projects={PROJECTS}
        onSelectedSkillChange={setSelectedSkill}
        selectedSkill={selectedSkill}
      />
      <section className="home__main container">
        <WorkTiles workList={filteredProjects} />
      </section>
      <Footer className="home__footer" />
    </div>
  );
};

export default Home;
