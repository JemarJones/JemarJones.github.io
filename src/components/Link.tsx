import React, { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface iLinkProps {
  to: string;
  internal?: boolean;
  children: ReactNode;
}

const Link: React.FC<iLinkProps> = ({
  to,
  internal = false,
  children,
}): ReactElement | null => {
  return (
    <a
      className="link"
      href={to}
      target={!internal ? '__blank' : undefined}
      rel={!internal ? 'noopener noreferrer' : undefined}
    >
      {children}
      <FontAwesomeIcon className="link__icon" icon="link" />
    </a>
  );
};

export default Link;
