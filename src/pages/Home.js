import React from 'react';

import WorkTiles from '../components/WorkTiles';

const Home = () => (
  <div className="home">
    <header className="home__header">
      <div className="container">Jemar is a ____.</div>
    </header>
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
    <footer className="home__footer">
      <div className="container">
        my footermy footermy footermy footermy footermy footermy footermy footer
      </div>
    </footer>
  </div>
);

export default Home;
