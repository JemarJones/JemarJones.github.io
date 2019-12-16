import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaItem } from '../utils/constants';
import { SOCIAL_INFO } from '../data/socialInfo';

interface iProps {
  className?: string;
}

const Footer: React.FC<iProps> = ({ className }): ReactElement | null => {
  return (
    <footer role="contentinfo" className={classNames('footer', className)}>
      <div className="container">
        <ul
          className="footer__social-links"
          aria-label="My social media information"
        >
          {SOCIAL_INFO.map(
            (item: SocialMediaItem): JSX.Element => (
              <li key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.description}
                >
                  <FontAwesomeIcon icon={item.icon} title={item.description} />
                  <span className="footer__social-links__text">
                    {item.name}
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
