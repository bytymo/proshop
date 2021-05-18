import React from 'react';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {/* TODO figure out easier way to print out 5 star rating */}
        <i style={{ color }} className="fas"></i>
      </span>
    </div>
  );
};

export default Rating;
