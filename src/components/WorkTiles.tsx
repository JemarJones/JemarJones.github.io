import React, { useCallback, ReactElement } from 'react';
import { wrapGrid } from 'animate-css-grid';
import { Project } from '../utils/constants';

interface iProps {
  workList: Project[];
}

const WorkTiles: React.FC<iProps> = ({ workList }): ReactElement | null => {
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
      {workList.map(
        (item: Project): JSX.Element => (
          <WorkTile
            key={item.name}
            item={item}
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
}

const WorkTile: React.FC<iWorkTileProps> = ({
  item,
  onTileSelect,
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
      className="work-tiles__item"
      key={item.name}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
};

export default WorkTiles;
