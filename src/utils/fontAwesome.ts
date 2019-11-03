import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelopeOpen,
  faPhone,
  faLink,
  faTimes,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faSpotify,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export const setupFontAwesome = (): void => {
  library.add(faFileAlt);
  library.add(faGithub);
  library.add(faLinkedinIn);
  library.add(faInstagram);
  library.add(faSpotify);
  library.add(faEnvelopeOpen);
  library.add(faPhone);
  library.add(faStackOverflow);
  library.add(faLink);
  library.add(faTimes);
};

export const resetFontAwesome = library.reset;
