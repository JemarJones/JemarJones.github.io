import React from 'react';
import PropTypes from 'prop-types';
import { wrapGrid } from 'animate-css-grid';

class WorkTiles extends React.PureComponent {
  static propTypes = {
    workList: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.tileGrid = React.createRef();
  }

  componentDidMount() {
    wrapGrid(this.tileGrid.current);
  }

  handleTileSelect = item => {
    console.log('Implement work tile select', item);
  };

  handleKeyDown = (e, item) => {
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
            tabIndex="0"
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
