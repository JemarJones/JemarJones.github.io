import React from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles from '../components/WorkTiles';
import Footer from '../components/Footer';

import projects, { Project } from '../data/projects';
import { SKILL_UNSELECTED } from '../utils/constants';
import { DefaultOptionType } from '../components/Select';

interface iProps {}

interface iState {
  selectedSkill?: DefaultOptionType | null;
  filteredProjects: Project[];
}

class Home extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);

    this.state = {
      selectedSkill: undefined,
      filteredProjects: projects,
    };
  }
  handleSkillChange = (selectedSkill: DefaultOptionType | null | undefined) => {
    this.setState({
      selectedSkill,
      // TODO: optimize? Might be a problem if i get many more projects..
      filteredProjects: selectedSkill
        ? projects.filter(
            project =>
              selectedSkill.value === SKILL_UNSELECTED ||
              project.skills.some(skill => skill.name === selectedSkill.value),
          )
        : projects,
    });
  };

  render() {
    const { selectedSkill, filteredProjects } = this.state;

    return (
      <div className="home">
        <HomeHeader
          projects={projects}
          onSkillChange={this.handleSkillChange}
          selectedSkill={selectedSkill}
        />
        <section className="home__main container">
          <WorkTiles workList={filteredProjects} />
        </section>
        <Footer className="home__footer" />
      </div>
    );
  }
}

export default Home;
