import React, { useCallback, ReactElement, useState, useRef } from 'react';
import { wrapGrid } from 'animate-css-grid';

import WorkTile from './WorkTile';

import useOnClickOutside from '../hooks/useOnClickOutside';
import useQueryParamState from '../hooks/useQueryParamState';
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
    <div className="work-tiles" ref={wrapGripRef} aria-live="assertive">
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
              hiddenBehindSelectedItem={!!expandedItem && !isSelected}
            />
          );
        }
      )}
    </div>
  );
};

export default WorkTiles;
