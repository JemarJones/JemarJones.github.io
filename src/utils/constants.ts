import { IconProp } from '@fortawesome/fontawesome-svg-core';
import webtunesBanner from '../assets/webtunes_banner.png';
import survivalOfTheFittestBanner from '../assets/survival_fittest_banner.png';
import jqueryFlipBanner from '../assets/jquery_flip_banner.png';
import flashLearnBanner from '../assets/flash_learn_banner.png';
import fontMeBanner from '../assets/font_me_banner.png';

export interface Skill {
  name: string;
  link: string;
}

export interface Collaborator {
  name: string;
  link: string;
}

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
        link: 'http://savas.ca/',
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
    longDescription:
      'bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem ',
    link: 'http://webtunes.jkjones.me',
  },
  {
    name: 'Survival of the Fittest',
    image: survivalOfTheFittestBanner,
    collaborators: [
      {
        name: 'Vicky Bilbily',
        link: 'http://bickybilly.github.io/',
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
      "An interesting multiplayer take on the heavily studied cellular automaton, Conway's Game of Life.",
    longDescription:
      'bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem ',
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
      'A lightweight jQuery plugin to make 3D card flipping animation',
    longDescription:
      'bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem ',
    link: 'http://nnattawat.github.io/flip/',
  },
  {
    name: 'Flash Learn',
    image: flashLearnBanner,
    collaborators: [
      {
        name: 'Vicky Bilbily',
        link: 'http://bickybilly.github.io/',
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
    longDescription:
      'bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem ',
    link: 'http://flashlearn.jkjones.me',
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
    longDescription:
      'bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem bibendum sit amet eu lorem ',
    link:
      'https://chrome.google.com/webstore/detail/fontme/jmflbifhkmjblfhmkpfdflfhphbinfjl',
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

// Add as needed
export enum Key {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
}
