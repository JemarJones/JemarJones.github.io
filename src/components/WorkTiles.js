import React from 'react';
import PropTypes from 'prop-types';
import { wrapGrid } from 'animate-css-grid';

class WorkTiles extends React.Component {
  constructor(props) {
    super(props);

    this.tileGrid = React.createRef();
  }

  componentDidMount() {
    wrapGrid(this.tileGrid.current);
  }

  handleTileSelect = (item) => {
    console.error('Implement work tile select');
  }

  handleKeyDown = (item, e) => {
    if (e.keyCode === 13) {
      this.handleTileSelect(item);
    }
  }

  render() {
    const { workList } = this.props;
    return (
      <div
        className="work-tiles"
        ref={this.tileGrid}>
        {workList.map(item => (
          <div
            className="work-tiles__item"
            key={item.name}
            tabIndex="0"
            onKeyDown={this.handleKeyDown.bind(this, item)}
            onClick={this.handleTileSelect}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

WorkTiles.propTypes = {
  workList: PropTypes.array,
};

export default WorkTiles;
