import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
  return (
    <div className="lanes col-sm-12">
      {lanes.map((lane) =>
        <Lane className="lane" key={lane.id} lane={lane} />
      )}
    </div>
  );
}