import React from 'react';
import PropTypes from 'prop-types';

const WorkTiles = ({ workList }) => {
  return (
    <div className="work-tiles">
      {workList.map(item => (
        <div className="work-tiles__item" key={item.name}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

WorkTiles.propTypes = {
  workList: PropTypes.array,
};

export default WorkTiles;
