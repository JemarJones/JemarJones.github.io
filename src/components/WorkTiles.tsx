import React, { useCallback, ReactElement } from 'react';
import { wrapGrid } from 'animate-css-grid';
import { Project } from '../utils/constants';
import classNames from 'classnames';

export interface SelectedProjectMapping {
  [projectName: string]: boolean;
}

interface iProps {
  projects: Project[];
  selectedProjectMapping: SelectedProjectMapping;
}

const WorkTiles: React.FC<iProps> = ({
  projects,
  selectedProjectMapping,
}): ReactElement | null => {
  const wrapGripRef = useCallback((node: HTMLDivElement | null): void => {
    if (node) {
      // FIXME #15: This doesn't seem to be working??
      wrapGrid(node);
    }
  }, []);

  const handleTileSelect = useCallback((item: Project): void => {
    console.warn('TODO: Implement work tile select', item);
  }, []);

  return (
    <div className="work-tiles" ref={wrapGripRef}>
      {projects.map(
        (item: Project): JSX.Element => (
          <WorkTile
            key={item.name}
            item={item}
            show={selectedProjectMapping[item.name]}
            onTileSelect={handleTileSelect}
          />
        )
      )}
    </div>
  );
};

interface iWorkTileProps {
  item: Project;
  onTileSelect: (item: Project) => void;
  show: boolean;
}

const WorkTile: React.FC<iWorkTileProps> = ({
  item,
  onTileSelect,
  show,
}): ReactElement | null => {
  const handleClick = useCallback((): void => onTileSelect(item), [
    item,
    onTileSelect,
  ]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.keyCode === 13) {
        onTileSelect(item);
      }
    },
    [item, onTileSelect]
  );

  return (
    <div
      className={classNames('work-tiles__item', {
        'work-tiles__item--hidden': !show,
      })}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
};

export default WorkTiles;
