import React, { ReactElement } from 'react';

import Link from './Link';

import { Skill, Collaborator } from '../utils/constants';

type ExternalReference = Skill | Collaborator;

interface iExternalReferenceListProps {
  heading: string;
  externalReferences: ExternalReference[];
}

const ExternalReferenceList: React.FC<iExternalReferenceListProps> = ({
  heading,
  externalReferences,
}): ReactElement | null => {
  return (
    <div className="external-reference-list">
      <h2>{heading}:</h2>
      <ul>
        {externalReferences.map(
          (externalReference: ExternalReference, i: number): JSX.Element => (
            <React.Fragment key={externalReference.name}>
              {/* For last element in multi element lists, add an 'and'. */}
              {i === externalReferences.length - 1 && i !== 0 ? (
                <span className="external-reference-list__and">and</span>
              ) : null}
              <li>
                <Link to={externalReference.link}>
                  {externalReference.name}
                </Link>
                {/* For every element other than the last one, add a ','.
                Add a '. for the last element. */}
                {i !== externalReferences.length - 1 ? ',' : '.'}
              </li>
            </React.Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export default ExternalReferenceList;
