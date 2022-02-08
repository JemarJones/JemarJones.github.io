import React from 'react';

import Link from '../components/Link';
import { WorkItem, Skill, Collaborator } from '../utils/constants';

import webtunesBanner from '../assets/webtunes_banner.svg';
import survivalOfTheFittestBanner from '../assets/survival_of_the_fittest_banner.svg';
import jqueryFlipBanner from '../assets/jquery_flip_banner.png';
import flashLearnBanner from '../assets/flash_learn_banner.svg';
import fontMeBanner from '../assets/font_me_banner.svg';
import macCoinBanner from '../assets/maccoin_banner.svg';
import jkjonesDotMeBanner from '../assets/jkjones_dot_me_banner.png';
import akiraBanner from '../assets/akira_banner.svg';
import konradBanner from '../assets/konrad_banner.svg';
import liveLabsBanner from '../assets/live_labs_banner.png';
import yaacBanner from '../assets/yaac.png';
import motyBanner from '../assets/moty_banner.png';

const _SKILLS = {
  generic: {
    name: 'some things',
  },
  node: {
    name: 'Node.js',
    link: 'https://nodejs.org/',
  },
  express: {
    name: 'Express.js',
    link: 'https://expressjs.com/',
  },
  sql: {
    name: 'SQL',
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  jade: {
    name: 'Jade (aka Pug)',
    link: 'http://jade-lang.com/',
  },
  javascript: {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  jquery: {
    name: 'jQuery',
    link: 'https://jquery.com/',
  },
  html: {
    name: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    name: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  react: {
    name: 'React',
    link: 'https://reactjs.org/',
  },
  socket: {
    name: 'Socket.io',
    link: 'https://socket.io/',
  },
  firebase: {
    name: 'Firebase',
    link: 'https://firebase.google.com/',
  },
  canvas: {
    name: 'Canvas',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
  },
  angular: {
    name: 'AngularJS',
    link: 'https://angularjs.org/',
  },
  typescript: {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  scss: {
    name: 'SCSS',
    link: 'https://sass-lang.com/',
  },
  responsiveDesign: {
    name: 'Responsive Design',
    link: 'https://en.wikipedia.org/wiki/Responsive_web_design',
  },
  redux: {
    name: 'Redux',
    link: 'https://redux.js.org/',
  },
  ruby: {
    name: 'Ruby',
    link: 'https://www.ruby-lang.org/en/',
  },
  grape: {
    name: 'Grape',
    link: 'https://github.com/ruby-grape/grape',
  },
  fastify: {
    name: 'Fastify',
    link: 'https://www.fastify.io/',
  },
  nestjs: {
    name: 'NestJS',
    link: 'https://nestjs.com/',
  },
  typeorm: {
    name: 'TypeORM',
    link: 'https://typeorm.io/',
  },
  jest: {
    name: 'Jest',
    link: 'https://jestjs.io/',
  },
  rspec: {
    name: 'RSpec',
    link: 'https://rspec.info/',
  },
  webpack: {
    name: 'Webpack',
    link: 'https://webpack.js.org/',
  },
  csharp: {
    name: 'C#',
    link: 'http://csharp.net/',
  },
  android: {
    name: 'Android Development',
    link: 'https://developer.android.com/docs',
  },
  gradle: {
    name: 'Gradle',
    link: 'https://gradle.org/',
  },
  springMvc: {
    name: 'Spring MVC',
    link: 'https://github.com/spring-projects/spring-framework',
  },
  python: {
    name: 'Python',
    link: 'https://www.python.org/',
  },
  nlp: {
    name: 'NLP (Natural Language Processing)',
    link: 'https://en.wikipedia.org/wiki/Natural_language_processing',
  },
  i18n: {
    name: 'Internationalization',
    link: 'https://en.wikipedia.org/wiki/Internationalization_and_localization',
  },
  a11y: {
    name: 'Accessibility',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
  },
};
export const SKILLS: { [key in keyof typeof _SKILLS]: Skill } = _SKILLS;

const _COLLABORATORS = {
  niko: {
    name: 'Niko Savas',
    link: 'https://savas.ca/',
  },
  vicky: {
    name: 'Vicky Bilbily',
    link: 'https://bickybilly.github.io/',
  },
  yash: {
    name: 'Yash Kadaru',
    link: 'http://yashkadaru.com/',
  },
  sammy: {
    name: 'Sam Nalwa',
    link: 'http://nalwa.ca',
  },
  nattawat: {
    name: 'Nattawat Nonsung',
    link: 'https://github.com/nnattawat',
  },
  stijn: {
    name: 'Stijn de Witt',
    link: 'https://StijnDeWitt.com',
  },
  akiraTeam: {
    name: 'The Akira Team',
  },
  konradTeam: {
    name: 'The Konrad Group Team',
  },
  liveLabsTeam: {
    name: 'The CIBC Live Labs Team',
  },
};
export const COLLABORATORS: {
  [key in keyof typeof _COLLABORATORS]: Collaborator;
} = _COLLABORATORS;

export const WORK_ITEMS: WorkItem[] = [
  {
    name: 'Akira',
    link: 'https://akirahealth.ca/',
    isProfessional: true,
    image: akiraBanner,
    collaborators: [COLLABORATORS.akiraTeam],
    dateInfo: 'November 2018 - present',
    skills: [
      SKILLS.typescript,
      SKILLS.javascript,
      SKILLS.react,
      SKILLS.redux,
      SKILLS.ruby,
      SKILLS.rspec,
      SKILLS.grape,
      SKILLS.html,
      SKILLS.css,
      SKILLS.scss,
      SKILLS.responsiveDesign,
      SKILLS.fastify,
      SKILLS.node,
      SKILLS.jest,
      SKILLS.i18n,
      SKILLS.a11y,
    ],
    description:
      'A leading virtual care platform helping to reimagine healthcare in Canada.',
    longDescription: (
      <>
        A leading virtual care platform helping to reimagine healthcare in
        Canada. Akira offer's Canadians on-demand access to friendly and
        knowledgeable primary care providers anytime they need it, wherever they
        are. Using the Akira mobile app, members can connect directly to primary
        care providers to get and renew prescriptions, obtain specialist and lab
        referrals, and have their health questions answered - 24/7, across the
        country, in French and English.
        <br />
        <br />
        At Akira, I've worked on our multi-platform clinician and patient facing
        suite of applications. My various contributions include taking a key
        role in re-implementing and simplifying the patient onboarding system to
        handle patients from varying sources with complex eligibility criteria.
        This work helped to improve patient experience and reduce the load on
        clinicians/customer support during the onboarding of tens of thousands
        of users. Other contributions include creating an email templating
        microservice to handle delivering critical emails with varying
        branding/messaging to patients.
      </>
    ),
  },
  {
    name: 'Konrad Group',
    link: 'https://www.konrad.com/',
    isProfessional: true,
    image: konradBanner,
    collaborators: [COLLABORATORS.konradTeam],
    dateInfo:
      'January 2017 – August 2017 (intern), May 2018 – November 2018 (full-time)',
    skills: [
      SKILLS.javascript,
      SKILLS.react,
      SKILLS.redux,
      SKILLS.csharp,
      SKILLS.html,
      SKILLS.css,
      SKILLS.scss,
      SKILLS.responsiveDesign,
      SKILLS.webpack,
      SKILLS.node,
      SKILLS.express,
      SKILLS.jquery,
      SKILLS.sql,
      SKILLS.jest,
      SKILLS.i18n,
      SKILLS.a11y,
    ],
    description:
      "A consulting agency working to bring digital expertise to client project's.",
    longDescription: (
      <>
        A consulting agency working to bring digital expertise to client
        projects. As a software developer at Konrad Group, I worked on several
        projects in a full-stack development role. Through this experience of
        moving between projects, I was exposed to various technologies that I
        was able to ramp up on swiftly. One project I was involved with was the
        company's internal portal, a suite of web applications responsible for
        managing employee time off, project time tracking, and the company
        directory, amongst other things. On this project, I worked as the
        primary front-end developer, while also making contributions across the
        technology stack.
      </>
    ),
  },
  {
    name: 'CIBC Live Labs',
    // link: 'http://cibc.live', // Why is this a dead link???
    // Could also maybe use `https://medium.com/cibc-live-labs/about` or
    // `https://web.archive.org/web/20170519225446/https://www.cibc.com/ca/livelabs`?
    // For now, i'll link here i guess.
    link: 'https://www.cibc.com/en/about-cibc/careers/innovation-history.html',
    isProfessional: true,
    image: liveLabsBanner,
    collaborators: [COLLABORATORS.liveLabsTeam],
    dateInfo: 'May 2016 – December 2016',
    skills: [
      SKILLS.android,
      SKILLS.gradle,
      SKILLS.firebase,
      SKILLS.springMvc,
      SKILLS.python,
      SKILLS.sql,
      SKILLS.nlp,
    ],
    description: "CIBC's Innovation & Digital Technology Lab.",
    longDescription: (
      <>
        Live Labs is CIBC's Innovation & Digital Technology Lab. At Live Labs,
        we worked to iteratively formulate, design, and prototype ideas for new
        products. In my role, I worked on several projects from ideation to
        functional prototype. Just a couple of which were an Android application
        built from scratch and a multi-platform bot that made use of Natural
        Language Processing.
      </>
    ),
  },
  {
    name: 'MOTY',
    link: 'https://manageroftheyear.me/',
    image: motyBanner,
    skills: [
      SKILLS.typescript,
      SKILLS.javascript,
      SKILLS.node,
      SKILLS.nestjs,
      SKILLS.typeorm,
      SKILLS.sql,
      SKILLS.firebase,
      SKILLS.react,
      SKILLS.webpack,
      SKILLS.html,
      SKILLS.scss,
      SKILLS.css,
      SKILLS.responsiveDesign,
    ],
    description: 'A niche web application for running fantasy leagues.',
    longDescription: (
      <>
        A niche web application for running fantasy leagues. Lets users create
        and join leagues, run a snake draft, make trades, and automatically
        accumulate points based on centrally entered match results. Actively
        used by about 100 users.
      </>
    ),
  },
  {
    name: 'WebTunes',
    link: 'http://webtunes.jkjones.me',
    image: webtunesBanner,
    collaborators: [COLLABORATORS.niko, COLLABORATORS.sammy],
    skills: [
      SKILLS.node,
      SKILLS.express,
      SKILLS.sql,
      SKILLS.jade,
      SKILLS.javascript,
      SKILLS.jquery,
      SKILLS.html,
      SKILLS.css,
    ],
    description: 'An online service that lets you share your musical tastes.',
    longDescription: (
      <>
        An online service that lets you share your musical tastes. WebTunes
        allows you to import your iTunes library to create an easily shareable
        online landing page for your music. Once you've chosen a username and
        uploaded the metadata associated with your library, WebTunes will create
        a personalized page where your music can easily be listened to via
        Spotify and Last.fm.
      </>
    ),
  },
  {
    name: 'MacCoin',
    link:
      'https://medium.com/@savas/maccoin-a-fake-cryptocurrency-postmortem-eb5e9f2fc3d9',
    image: macCoinBanner,
    skills: [
      SKILLS.react,
      SKILLS.javascript,
      SKILLS.node,
      SKILLS.express,
      SKILLS.socket,
      SKILLS.html,
      SKILLS.css,
      SKILLS.firebase,
    ],
    collaborators: [
      COLLABORATORS.niko,
      COLLABORATORS.vicky,
      COLLABORATORS.yash,
    ],
    description: 'A viral web application for a fake cryptocurrency.',
    longDescription: (
      <>
        A viral web application for a fake cryptocurrency. Built, amidst
        cryptocurrency craze of 2018, over the course of 24 hours as a send-off
        prank from McMaster's Software Engineering class of 2018, MacCoin was a
        web application that playfully simulated the crypto experience for
        students across McMaster's campus. MacCoin offered users the ability to
        mine and transfer coins amongst themselves. A live leaderboard was
        included to showcase which faculty factions had amassed the most
        MacCoin. While only truly living for a period of a few days, MacCoin
        boasted 2,712 unique wallets, 840 transactions, and 4,737,081,027 mined
        coins.
      </>
    ),
  },
  {
    name: 'JKJones.me',
    image: jkjonesDotMeBanner,
    skills: [
      SKILLS.react,
      SKILLS.typescript,
      SKILLS.javascript,
      SKILLS.scss,
      SKILLS.css,
      SKILLS.html,
      SKILLS.responsiveDesign,
      SKILLS.a11y,
    ],
    description: "This portfolio site you're on right now!",
    longDescription: (
      <>
        This portfolio site you're on right now! Purposely overengineered for
        what it is as a showcase of what I can do. Here I had a chance to
        publicly showcase my experience with modern web tech such as react and
        typescript, while also experimenting with the new CSS Grid API, ensuring
        an accessible exerience, and even throwing my hat in the ring with some
        responsive UI/UX design. Take a peak at the link above for a look under
        the hood on GitHub!
      </>
    ),
    link: 'https://github.com/JemarJones/JemarJones.github.io',
  },
  {
    name: 'Survival of the Fittest',
    link: 'http://survival.jkjones.me',
    image: survivalOfTheFittestBanner,
    collaborators: [COLLABORATORS.vicky],
    skills: [
      SKILLS.node,
      SKILLS.express,
      SKILLS.socket,
      SKILLS.javascript,
      SKILLS.jquery,
      SKILLS.canvas,
      SKILLS.html,
      SKILLS.css,
    ],
    description:
      "A multiplayer take on the heavily studied cellular automaton, Conway's Game of Life.",
    longDescription: (
      <>
        A multiplayer take on the heavily studied cellular automaton,{' '}
        <Link to="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </Link>
        . In the original games concept a series of tiles in a 2x2 grid are
        initially set to one of 2 states (dead or alive). With these initial
        conditions set and the simulation triggered, each squares fate is
        determined based on a set of rules which simulate over and under
        population. In this twist on the classic concept, 2 players choose which
        squares to bring to life for their team on each side of the grid. Once
        both players are ready, the simulation begins and the winner is the team
        with the last living cells left standing.
      </>
    ),
  },
  {
    name: 'YAAC',
    link: 'http://yaac.jkjones.me/',
    image: yaacBanner,
    collaborators: [COLLABORATORS.yash, COLLABORATORS.vicky],
    skills: [
      SKILLS.node,
      SKILLS.express,
      SKILLS.socket,
      SKILLS.javascript,
      SKILLS.jquery,
      SKILLS.canvas,
      SKILLS.html,
      SKILLS.css,
    ],
    description: 'A clone of the game Agar.io, written from scratch.',
    longDescription: (
      <>
        A clone of the game <Link to="https://agar.io/">Agar.io</Link>, written
        from scratch. Affectionally called YAAC (Yet Another Agar Clone), this
        project is exactly as it says on the tin! When the craze around this
        game was at an all-time high, we loved it enough to want to build own
        copy. Making use of a Quadtree implementation built from the ground up
        for efficient collision detection. Starting as a small blob, players
        gain size by moving around to consume food and other smaller players.
      </>
    ),
  },
  {
    name: 'jQuery Flip',
    link: 'https://nnattawat.github.io/flip/',
    image: jqueryFlipBanner,
    collaborators: [COLLABORATORS.nattawat, COLLABORATORS.stijn],
    skills: [SKILLS.javascript, SKILLS.jquery, SKILLS.css],
    description:
      'A lightweight jQuery plugin to make 3D card flipping animations easy.',
    longDescription: (
      <>
        A lightweight jQuery plugin to make 3D card flipping animations easy. As
        one of a few maintainers on this project, I participated in the open
        source process to improve the API of this plugin, as well as
        contributing various other features and maintenance over time.
      </>
    ),
  },
  {
    name: 'FontMe',
    link:
      'https://chrome.google.com/webstore/detail/fontme/jmflbifhkmjblfhmkpfdflfhphbinfjl',
    image: fontMeBanner,
    skills: [SKILLS.javascript, SKILLS.jquery, SKILLS.html, SKILLS.css],
    description:
      'An extension that helps you discover what Font is being used on a given HTML element.',
    longDescription: (
      <>
        An extension that helps you discover what Font is being used on a given
        HTML element. FontMe makes it incredibly easy to discover fonts used on
        any webpage. Just right click on a piece of text, select 'FontMe', and
        FontMe will let you know what font is being used. Over the years FontMe
        has amassed over 1000 users.
      </>
    ),
  },
  {
    name: 'Flash Learn',
    image: flashLearnBanner,
    collaborators: [COLLABORATORS.vicky],
    skills: [
      SKILLS.angular,
      SKILLS.javascript,
      SKILLS.jquery,
      SKILLS.html,
      SKILLS.css,
    ],
    description: 'A crowdsourced flashcard platform.',
    longDescription: (
      <>
        Flash Learn is a crowdsourced flashcard platform. With Flash Learn users
        can study virtual flashcards on categories of their choosing by flipping
        through cards and their answers one at a time. Flash Learn keeps users
        engaged with playful animations (powered by jQuery Flip), and an easy to
        use interface.
      </>
    ),
    link: 'http://flashlearn.jkjones.me',
  },
];
