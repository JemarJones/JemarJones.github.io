import { SocialMediaItem } from '../utils/constants';

export const SOCIAL_INFO: SocialMediaItem[] = [
  {
    name: 'Resume',
    description: 'Resume',
    link: './resume.pdf',
    icon: 'file-alt',
  },
  {
    name: 'Github',
    description: 'Github Profile',
    link: 'https://github.com/JemarJones',
    icon: ['fab', 'github'],
  },
  {
    name: 'Linkedin',
    description: 'LinkedIn Profile',
    link: 'https://ca.linkedin.com/in/JemarJones',
    icon: ['fab', 'linkedin-in'],
  },
  {
    name: 'Stack Overflow',
    description: 'Stack Overflow Profile',
    link: 'https://stackoverflow.com/users/4236924/jemar-jones',
    icon: ['fab', 'stack-overflow'],
  },
  {
    name: 'Instagram',
    description: 'Instagram Profile',
    link: 'https://www.instagram.com/therealjkjones/',
    icon: ['fab', 'instagram'],
  },
  {
    name: 'Spotify',
    description: 'Spotify Profile',
    link: 'https://open.spotify.com/user/12181332459',
    icon: ['fab', 'spotify'],
  },
  {
    name: 'Email',
    description: 'Contact via email',
    link: 'mailto:JemarKJones@gmail.com',
    icon: 'envelope-open',
  },
  {
    name: 'Phone',
    description: 'Contact via phone',
    link: 'tel:+4163014732',
    icon: 'phone',
  },
];
