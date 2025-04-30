import React, {
  useCallback,
  ReactElement,
  forwardRef,
  useLayoutEffect,
} from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalReferenceList from './ExternalReferenceList';
import Link from './Link';
import FocusTrap from './FocusTrap';

import { KeyCode } from '../utils';
import { WorkItem } from '../utils/constants';

interface iWorkTileProps {
  workItem: WorkItem;
  setWorkItem: (workItem: WorkItem | null) => void;
  visible: boolean;
  selected: boolean;
  expanding: boolean;
  hiddenBehindSelectedItem: boolean;
}

const WorkTile: React.ForwardRefExoticComponent<iWorkTileProps &
  React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, iWorkTileProps>(
  (
    {
      workItem,
      setWorkItem,
      visible,
      selected,
      expanding,
      hiddenBehindSelectedItem,
    },
    ref
  ): ReactElement | null => {
    const handleWorkItemChosen = useCallback((): void => {
      if (!selected) {
        setWorkItem(workItem);
      }
    }, [selected, setWorkItem, workItem]);

    const handleClose = useCallback((): void => {
      if (selected) {
        setWorkItem(null);
      }
    }, [selected, setWorkItem]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === KeyCode.ENTER) {
          handleWorkItemChosen();
        } else if (e.key === KeyCode.ESCAPE) {
          handleClose();
        }
      },
      [handleWorkItemChosen, handleClose]
    );

    // Set 'body--with-modal' class on body when selected
    useLayoutEffect((): (() => void) => {
      document.body.className = selected ? 'body--with-modal' : '';
      return (): void => {
        document.body.className = '';
      };
    }, [selected]);

    return (
      <article
        ref={ref}
        className={classNames('work-tiles__item', {
          // For animate-css-grid to work, we have to hide elements rather than remove
          'work-tiles__item--hidden': !visible,
          'work-tiles__item--collapsed': !selected,
          'work-tiles__item--selected': selected,
          'work-tiles__item--expanding': expanding,
        })}
        tabIndex={hiddenBehindSelectedItem ? -1 : 0}
        aria-hidden={hiddenBehindSelectedItem}
        onKeyDown={handleKeyDown}
        onClick={handleWorkItemChosen}
      >
        <FocusTrap active={selected} className="work-tiles__item__child">
          <div className="work-tiles__item__child__indicator">
            {workItem.isProfessional ? 'Industry' : 'Hobby'}
          </div>
          {!selected ? (
            <>
              <div className="work-tiles__item__child__text-content">
                <h1>{workItem.name}</h1>
                <p>{workItem.description}</p>
              </div>
              <img src={workItem.image} alt={workItem.name} />
            </>
          ) : (
            <>
              <button
                className="work-tiles__item__child__close-btn"
                onClick={handleClose}
                title="Close"
              >
                <FontAwesomeIcon icon="times" />
              </button>
              <Link to={workItem.link}>
                <h1>{workItem.name}</h1>
              </Link>
              <div className="work-tiles__item__child__sub-headings">
                {workItem.dateInfo ? <p>{workItem.dateInfo}</p> : null}
                {workItem.skills.length > 0 ? (
                  <ExternalReferenceList
                    heading="Skills"
                    externalReferences={workItem.skills}
                  />
                ) : null}
                {workItem.collaborators && workItem.collaborators.length > 0 ? (
                  <ExternalReferenceList
                    heading="Collaborators"
                    externalReferences={workItem.collaborators}
                  />
                ) : null}
              </div>
              <img src={workItem.image} alt={workItem.name} />
              <p className="work-tiles__item__child__long-description">
                {workItem.longDescription}
              </p>
            </>
          )}
        </FocusTrap>
      </article>
    );
  }
);

export default WorkTile;
