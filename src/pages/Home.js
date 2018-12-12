import React from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles from '../components/WorkTiles';
import Footer from '../components/Footer';

import projects from '../data/projects';
import { SKILL_UNSELECTED } from '../utils/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkill: undefined,
      filteredProjects: projects,
    };
  }
  handleSkillChange = selectedSkill => {
    this.setState({
      selectedSkill,
      // TODO: Optimise? Might be a problem if i get many more projects..
      filteredProjects: projects.filter(
        project =>
          selectedSkill.value === SKILL_UNSELECTED ||
          project.skills.some(skill => skill.name === selectedSkill.value),
      ),
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
