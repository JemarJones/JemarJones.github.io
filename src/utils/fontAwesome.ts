import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faSpotify,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export const setupFontAwesome = () => {
  library.add(faGithub);
  library.add(faLinkedinIn);
  library.add(faInstagram);
  library.add(faSpotify);
  library.add(faEnvelopeOpen);
  library.add(faPhone);
  library.add(faStackOverflow);
};
