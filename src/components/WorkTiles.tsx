import React, {
  useCallback,
  ReactElement,
  useState,
  useRef,
  forwardRef,
  useLayoutEffect,
} from 'react';
import { wrapGrid } from 'animate-css-grid';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalReferenceList from './ExternalReferenceList';
import Link from './Link';

import useOnClickOutside from '../hooks/useOnClickOutside';
import useQueryParamState from '../hooks/useQueryParamState';
import { KeyCode } from '../utils';
import { WorkItem } from '../utils/constants';

export interface SelectedWorkItemMapping {
  [workItemName: string]: boolean;
}

interface iProps {
  workItems: WorkItem[];
  selectedWorkItemMapping: SelectedWorkItemMapping;
}

const WorkTiles: React.FC<iProps> = ({
  workItems,
  selectedWorkItemMapping,
}): ReactElement | null => {
  const [expandedItem, setExpandedItem] = useQueryParamState<WorkItem | null>(
    'tile',
    null,
    useCallback((item: WorkItem | null): string => item?.name ?? 'none', []),
    useCallback(
      (name: string): WorkItem | null =>
        Object.values(workItems).find(
          (item): boolean =>
            selectedWorkItemMapping[item.name] &&
            item.name.toLowerCase() === name.toLowerCase()
        ) ?? null,
      [selectedWorkItemMapping, workItems]
    )
  );
  const [isExpandingItem, setIsExpandingItem] = useState<boolean>(false);

  // Used to work with the selected tile for animation purposes and
  // to detect outside clicks.
  const selectedTileRef = useRef<HTMLElement>(null);

  // Handle controlling what the expanded work item is.
  const handleSettingWorkItem = useCallback(
    (item: WorkItem | null): void => {
      setIsExpandingItem(Boolean(item));
      setExpandedItem(item);
    },
    [setExpandedItem]
  );

  const handleOutsideClick = useCallback((): void => {
    handleSettingWorkItem(null);
  }, [handleSettingWorkItem]);
  useOnClickOutside(selectedTileRef, handleOutsideClick);

  // Animation handling
  const onGridAnimationEnd = useCallback(
    (animatedChildren: HTMLElement[]): void => {
      // Here we determine whether the currently selected item has just finished
      // animating. This should mean that it has finished explanding. We can
      // set that value in state for use by the work tile itself for styling purposes.
      if (selectedTileRef.current) {
        const selectedTileFinishedAnimating = animatedChildren.some(
          (el): boolean => el === selectedTileRef.current
        );
        setIsExpandingItem(!selectedTileFinishedAnimating);
      } else {
        setIsExpandingItem(false);
      }
    },
    []
  );
  const wrapGripRef = useCallback(
    (node: HTMLDivElement | null): void => {
      if (node) {
        wrapGrid(node, { onEnd: onGridAnimationEnd });
      }
    },
    [onGridAnimationEnd]
  );

  return (
    <div className="work-tiles" ref={wrapGripRef}>
      {workItems.map(
        (workItem: WorkItem): JSX.Element => {
          const isSelected: boolean = expandedItem === workItem;

          return (
            <WorkTile
              key={workItem.name}
              ref={isSelected ? selectedTileRef : undefined}
              workItem={workItem}
              setWorkItem={handleSettingWorkItem}
              visible={selectedWorkItemMapping[workItem.name]}
              selected={isSelected}
              // If we're explanding the selected item and this is the selected item
              // then this item is expanding.
              expanding={isExpandingItem && isSelected}
            />
          );
        }
      )}
    </div>
  );
};

interface iWorkTileProps {
  workItem: WorkItem;
  setWorkItem: (workItem: WorkItem | null) => void;
  visible: boolean;
  selected: boolean;
  expanding: boolean;
}

const WorkTile: React.ForwardRefExoticComponent<iWorkTileProps &
  React.RefAttributes<HTMLElement>> = forwardRef<HTMLElement, iWorkTileProps>(
  (
    { workItem, setWorkItem, visible, selected, expanding },
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
        aria-hidden={!visible}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleWorkItemChosen}
      >
        {/* Through experimentation it seems that animate-css-grid
        only works if the item has one child ¯\_(ツ)_/¯ */}
        <div className="work-tiles__item__child">
          <div className="work-tiles__item__child__indicator">
            {workItem.isProfessional ? 'Work' : 'Project'}
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
        </div>
      </article>
    );
  }
);

export default WorkTiles;
