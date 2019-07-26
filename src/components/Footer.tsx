import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SOCIAL_INFO } from '../utils/constants';

interface iProps {
  className?: string;
}

const Footer: React.SFC<iProps> = ({ className }) => {
  return (
    <footer className={classNames('footer', className)}>
      <div className="container">
        <ul
          className="footer__social-links"
          aria-label="My social media information"
        >
          {SOCIAL_INFO.map(item => (
            <li key={item.name}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.description}
              >
                <FontAwesomeIcon icon={item.icon} title={item.description} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
