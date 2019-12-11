import React, { ReactElement, useRef, useLayoutEffect } from 'react';
import throttle from 'lodash.throttle';

import Link from './Link';

import { ExternalReference } from '../utils/constants';

interface iExternalReferenceListProps {
  heading: string;
  externalReferences: ExternalReference[];
}

const ExternalReferenceList: React.FC<iExternalReferenceListProps> = ({
  heading,
  externalReferences,
}): ReactElement | null => {
  const ulRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const calculateAndSetULWidth = throttle((): void => {
      // https://stackoverflow.com/a/37413580/4236924
      // Basically, containers with flex-wrap are not able
      // to determine their children rows lengths and therefore
      // don't shrink to wrap them. So we're determining the longest
      // rows length and shrinking the container to that width, to
      // avoid awkward extra whitespace.
      if (ulRef.current) {
        // Unset any previously set width so that
        // our calculations are based on the natural
        // wrapping of the items.
        ulRef.current.style.width = 'auto';
        const items: HTMLCollection = ulRef.current.children;

        let prevItem: DOMRect | undefined;
        const rowLengths: number[] = Array.from(items).reduce(
          (rowLengths: number[], item): number[] => {
            const itemRect: DOMRect = item.getBoundingClientRect();
            if (prevItem && prevItem.top < itemRect.top) {
              // This items top is larger, that means its in a new row.
              // Start the new row length with this items length.
              rowLengths.push(itemRect.width);
            } else {
              // This items top is the same as the previous,
              // that means its in the same row. Add to the
              // current rows length.
              rowLengths.splice(
                -1,
                1,
                rowLengths.slice(-1)[0] + itemRect.width
              );
            }
            prevItem = itemRect;

            return rowLengths;
          },
          [0]
        );
        const width: number = rowLengths.reduce((a, b) => Math.max(a, b));
        ulRef.current.style.width = `${width}px`;
      }
    }, 100);

    calculateAndSetULWidth();
    window.addEventListener('resize', calculateAndSetULWidth);
    return (): void => {
      window.removeEventListener('resize', calculateAndSetULWidth);
    };
  });

  return (
    <div className="external-reference-list">
      <h2>{heading}:</h2>
      <ul ref={ulRef}>
        {externalReferences.map(
          (externalReference: ExternalReference, i: number): JSX.Element => (
            <React.Fragment key={externalReference.name}>
              {/* For last element in multi element lists, add an 'and'. */}
              {i === externalReferences.length - 1 && i !== 0 ? (
                <span className="external-reference-list__and">and</span>
              ) : null}
              <li>
                {externalReference.link !== undefined ? (
                  <Link to={externalReference.link}>
                    {externalReference.name}
                  </Link>
                ) : (
                  externalReference.name
                )}
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
