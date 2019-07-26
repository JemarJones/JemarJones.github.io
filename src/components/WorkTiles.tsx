import React from 'react';
import { wrapGrid } from 'animate-css-grid';
import { Project } from '../utils/constants';

interface iProps {
  workList: Project[];
}

class WorkTiles extends React.PureComponent<iProps> {
  tileGrid: React.RefObject<HTMLDivElement>;

  constructor(props: iProps) {
    super(props);

    this.tileGrid = React.createRef();
  }

  componentDidMount() {
    if (this.tileGrid.current) {
      wrapGrid(this.tileGrid.current);
    } else {
      console.log('HELP: tileGrid not initialized in time!!');
    }
  }

  handleTileSelect = (item: Project) => {
    console.log('Implement work tile select', item);
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, item: Project) => {
    if (e.keyCode === 13) {
      this.handleTileSelect(item);
    }
  };

  render() {
    const { workList } = this.props;
    return (
      <div className="work-tiles" ref={this.tileGrid}>
        {workList.map(item => (
          <div
            className="work-tiles__item"
            key={item.name}
            tabIndex={0}
            onKeyDown={e => this.handleKeyDown(e, item)}
            onClick={() => this.handleTileSelect(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default WorkTiles;
