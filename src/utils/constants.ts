import { dedent } from './';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import webtunesBanner from '../assets/webtunes_banner.png';
import survivalOfTheFittestBanner from '../assets/survival_fittest_banner.png';
import jqueryFlipBanner from '../assets/jquery_flip_banner.png';
import flashLearnBanner from '../assets/flash_learn_banner.png';
import fontMeBanner from '../assets/font_me_banner.png';
import macCoinBanner from '../assets/maccoin_banner.png';

export interface ExternalReference {
  name: string;
  link: string;
}

export interface Skill extends ExternalReference {}

export interface Collaborator extends ExternalReference {}

export interface WorkItem {
  name: string;
  image: string;
  collaborators?: Collaborator[];
  skills: Skill[];
  description: string;
  longDescription: string;
  link: string;
}

export const GENERIC_SKILL: Skill = {
  name: 'some things',
  link: '#',
};

export const WORK_ITEMS: WorkItem[] = [
  {
    name: 'WebTunes',
    image: webtunesBanner,
    collaborators: [
      {
        name: 'Niko Savas',
        link: 'https://savas.ca/',
      },
      {
        name: 'Sam Nalwa',
        link: 'http://nalwa.ca',
      },
    ],
    skills: [
      {
        name: 'Node.js',
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        link: 'http://expressjs.com/',
      },
      {
        name: 'SQL',
        link: 'http://www.mysql.com/',
      },
      {
        name: 'Jade',
        link: 'http://jade-lang.com/',
      },
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'jQuery',
        link: 'https://jquery.com/',
      },
      {
        name: 'HTML5',
        link: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/',
      },
    ],
    description: 'An online service that lets you share your musical tastes.',
    longDescription: dedent(
      `An online service that lets you share your musical tastes. WebTunes
       allows you to import your iTunes library to create an easily shareable online
       landing page for your music. Once you've chosen a username and uploaded
       the metadata associated with your library, WebTunes will create a personalized
       page where your music can easily be listened to via Spotify and Last.fm.`
    ),
    link: 'http://webtunes.jkjones.me',
  },
  {
    name: 'MacCoin',
    image: macCoinBanner,
    skills: [
      {
        name: 'React',
        link: 'https://reactjs.org/',
      },
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Node.js',
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        link: 'http://expressjs.com/',
      },
      {
        name: 'Socket.io',
        link: 'http://socket.io/',
      },
      {
        name: 'HTML',
        link: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/',
      },
      {
        name: 'Firebase',
        link: 'https://firebase.google.com/',
      },
    ],
    collaborators: [
      {
        name: 'Niko Savas',
        link: 'https://savas.ca/',
      },
      {
        name: 'Vicky Bilbily',
        link: 'https://bickybilly.github.io/',
      },
      {
        name: 'Yash Kadaru',
        link: 'http://yashkadaru.com/',
      },
    ],
    description: 'A viral web application for a fake cryptocurrency.',
    longDescription: dedent(
      `A viral web application for a fake cryptocurrency. Built, amidst
      cryptocurrency craze of 2018, over the course of 24 hours as a
      send-off prank from McMaster's Software Engineering class of 2018,
      MacCoin was a web application that playfully simulated the crypto
      experience for students across McMaster's campus. MacCoin offered
      users the ability to mine and transfer coins amongst themselves.
      A live leaderboard was included to showcase which faculty factions
      had amassed the most MacCoin. While only truly living for a period
      of a few days, MacCoin boasted 2,712 unique wallets, 840 transactions,
      and 4,737,081,027 mined coins.`
    ),
    link:
      'https://medium.com/@savas/maccoin-a-fake-cryptocurrency-postmortem-eb5e9f2fc3d9',
  },
  {
    name: 'Survival of the Fittest',
    image: survivalOfTheFittestBanner,
    collaborators: [
      {
        name: 'Vicky Bilbily',
        link: 'https://bickybilly.github.io/',
      },
    ],
    skills: [
      {
        name: 'Node.js',
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        link: 'http://expressjs.com/',
      },
      {
        name: 'Socket.io',
        link: 'http://socket.io/',
      },
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'jQuery',
        link: 'https://jquery.com/',
      },
      {
        name: 'Canvas',
        link: 'https://jquery.com/',
      },
      {
        name: 'HTML5',
        link: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/',
      },
    ],
    description:
      "A multiplayer take on the heavily studied cellular automaton, Conway's Game of Life.",
    longDescription: dedent(
      `A multiplayer take on the heavily studied cellular automaton, <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="__blank">Conway's Game of Life</a>.
       In the original games concept a series of tiles in a 2x2 grid
       are initially set to one of 2 states (dead or alive). With
       these initial conditions set and the simulation triggered,
       each squares fate is determined based on a set of rules which
       simulate over and under population. In this twist on the classic
       concept, 2 players choose which squares to bring to life for
       their team on each side of the grid. Once both players are ready,
       the simulation begins and the winner is the team with the last
       living cells left standing.`
    ),
    link: 'http://survival.jkjones.me',
  },
  {
    name: 'jQuery Flip',
    image: jqueryFlipBanner,
    collaborators: [
      {
        name: 'Nattawat Nonsung',
        link: 'https://github.com/nnattawat',
      },
      {
        name: 'Stijn de Witt',
        link: 'http://StijnDeWitt.com',
      },
    ],
    skills: [
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'jQuery',
        link: 'https://jquery.com/',
      },
    ],
    description:
      'A lightweight jQuery plugin to make 3D card flipping animations easy.',
    longDescription: dedent(
      `A lightweight jQuery plugin to make 3D card flipping animations easy.
       As one of a few maintainers on this project, I participated in the
       open source process to improve the API of this plugin, as well
       as contributing various other features and maintenance over time.`
    ),
    link: 'http://nnattawat.github.io/flip/',
  },
  {
    name: 'FontMe',
    image: fontMeBanner,
    skills: [
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'jQuery',
        link: 'https://jquery.com/',
      },
      {
        name: 'HTML',
        link: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/',
      },
    ],
    description:
      'An extension that helps you discover what Font is being used on a given HTML element.',
    longDescription: dedent(
      `An extension that helps you discover what Font is being used on a given HTML element.
       FontMe makes it incredibly easy to discover fonts used on any webpage. Just right
       click on a piece of text, select 'FontMe', and FontMe will let you know what font
       is being used. Over the years FontMe has amassed over 1000 users.`
    ),
    link:
      'https://chrome.google.com/webstore/detail/fontme/jmflbifhkmjblfhmkpfdflfhphbinfjl',
  },
  {
    name: 'Flash Learn',
    image: flashLearnBanner,
    collaborators: [
      {
        name: 'Vicky Bilbily',
        link: 'https://bickybilly.github.io/',
      },
    ],
    skills: [
      {
        name: 'AngularJS',
        link: 'https://angularjs.org/',
      },
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'jQuery',
        link: 'https://jquery.com/',
      },
      {
        name: 'HTML',
        link: 'https://www.w3.org/html/',
      },
      {
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/',
      },
    ],
    description: 'A crowdsourced flashcard platform.',
    longDescription: dedent(
      `Flash Learn is a crowdsourced flashcard platform. With Flash Learn
       users can study virtual flashcards on categories of their choosing by
       flipping through cards and their answers one at a time. Flash Learn keeps
       users engaged with playful animations (powered by jQuery Flip), and an easy
       to use interface.`
    ),
    link: 'http://flashlearn.jkjones.me',
  },
];

// Data for social media contact info

export interface SocialMediaItem {
  name: string;
  description: string;
  link: string;
  icon: IconProp;
}

export const SOCIAL_INFO: SocialMediaItem[] = [
  {
    name: 'github',
    description: 'Github Profile',
    link: 'https://github.com/JemarJones',
    icon: ['fab', 'github'],
  },
  {
    name: 'linkedin',
    description: 'LinkedIn Profile',
    link: 'https://ca.linkedin.com/in/JemarJones',
    icon: ['fab', 'linkedin-in'],
  },
  {
    name: 'stackoverflow',
    description: 'StackOverflow Profile',
    link: 'https://stackoverflow.com/users/4236924/jemar-jones',
    icon: ['fab', 'stack-overflow'],
  },
  {
    name: 'instagram',
    description: 'Instagram Profile',
    link: 'https://www.instagram.com/therealjkjones/',
    icon: ['fab', 'instagram'],
  },
  {
    name: 'spotify',
    description: 'Spotify Profile',
    link: 'https://open.spotify.com/user/12181332459',
    icon: ['fab', 'spotify'],
  },
  {
    name: 'mail',
    description: 'Contact via email',
    link: 'mailto:JemarKJones@gmail.com',
    icon: 'envelope-open',
  },
  {
    name: 'phone',
    description: 'Contact via phone',
    link: 'tel:+4163014732',
    icon: 'phone',
  },
];
