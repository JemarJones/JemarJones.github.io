export interface JemarSkill {
  name: string;
  link: string;
}

export interface Project {
  name: string;
  image: string;
  collaborators: {
    name: string;
    link: string;
  }[];
  skills: JemarSkill[];
  desc: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'WebTunes',
    image: './assets/webtunes_logo.png',
    collaborators: [
      {
        name: 'Nikolai Savas',
        link: 'http://savas.ca/',
      },
      {
        name: 'Samraj Nalwa',
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
    desc: 'An online service that lets you share your musical tastes.',
    link: 'http://webtunes.jkjones.me',
  },
  {
    name: 'Survival of the Fittest',
    image: './assets/survival.png',
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
    desc:
      "An interesting multiplayer take on the heavily studied cellular automaton, Conway's Game of Life.",
    link: 'http://survival.jkjones.me',
  },
  {
    name: 'jQuery Flip',
    image: './assets/jquery-flip.png',
    collaborators: [
      {
        name: 'Nattawat Nonsung (Author)',
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
    desc: 'A lightweight jQuery plugin to make 3D card flipping animation',
    link: 'http://nnattawat.github.io/flip/',
  },
  {
    name: 'Flash Learn',
    image: './assets/fl_animated.gif',
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
    desc: 'A crowdsourced flashcard platform.',
    link: 'http://flashlearn.jkjones.me',
  },
  {
    name: 'FontMe',
    image: './assets/fmPromoMarq.png',
    collaborators: [],
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
    desc:
      'An extension that helps you discover what Font is being used on a given HTML element.',
    link:
      'https://chrome.google.com/webstore/detail/fontme/jmflbifhkmjblfhmkpfdflfhphbinfjl',
  },
];

export default projects;
