import React from 'react';

import HomeHeader from '../components/HomeHeader';
import WorkTiles from '../components/WorkTiles';
import Footer from '../components/Footer';

import projects from '../data/projects';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: undefined,
    };
  }
  handleSkillChange = skill => {
    // TODO: Implement
    console.log(skill);
    this.setState({ skill });
  };

  render() {
    const { skill } = this.state;

    return (
      <div className="home">
        <HomeHeader
          projects={projects}
          onSkillChange={this.handleSkillChange}
          selectedSkill={skill}
        />
        <section className="home__main container">
          <WorkTiles
            workList={[
              { name: 'hi' },
              {
                name:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
              },
              { name: 'hi2' },
              { name: 'bye2' },
              { name: 'hi3' },
              { name: 'bye3' },
            ]}
          />
        </section>
        <Footer className="home__footer" />
      </div>
    );
  }
}

export default Home;
