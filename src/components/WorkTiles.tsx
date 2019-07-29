import React, { useCallback, ReactElement } from 'react';
import { wrapGrid } from 'animate-css-grid';
import { WorkItem } from '../utils/constants';
import classNames from 'classnames';

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
  const wrapGripRef = useCallback((node: HTMLDivElement | null): void => {
    if (node) {
      wrapGrid(node);
    }
  }, []);

  const handleWorkItemSelect = useCallback((workItem: WorkItem): void => {
    console.warn('TODO: Implement work tile select', workItem);
  }, []);

  return (
    <div className="work-tiles" ref={wrapGripRef}>
      {workItems.map(
        (workItem: WorkItem): JSX.Element => (
          <WorkTile
            key={workItem.name}
            workItem={workItem}
            show={selectedWorkItemMapping[workItem.name]}
            onWorkItemSelect={handleWorkItemSelect}
          />
        )
      )}
    </div>
  );
};

interface iWorkTileProps {
  workItem: WorkItem;
  onWorkItemSelect: (workItem: WorkItem) => void;
  show: boolean;
}

const WorkTile: React.FC<iWorkTileProps> = ({
  workItem,
  onWorkItemSelect,
  show,
}): ReactElement | null => {
  const handleClick = useCallback((): void => onWorkItemSelect(workItem), [
    workItem,
    onWorkItemSelect,
  ]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.keyCode === 13) {
        onWorkItemSelect(workItem);
      }
    },
    [workItem, onWorkItemSelect]
  );

  return (
    <article
      className={classNames('work-tiles__item', {
        // For animate-css-grid to work, we have to hide elements rather than remove
        'work-tiles__item--hidden': !show,
      })}
      aria-hidden={!show}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {/* Through experimentation it seems that animate-css-grid
        only works if the item has one child ¯\_(ツ)_/¯ */}
      <div className="work-tiles__item__child">
        <div className="work-tiles__item__child__text-content">
          <h1>{workItem.name}</h1>
          <p>{workItem.description}</p>
        </div>
        <img src={workItem.image} alt={workItem.name} />
      </div>
    </article>
  );
};

export default WorkTiles;
