import React from 'react';

const DiagonalContainer = ({ title, type = "horizontal-1"}) => {
  return ( 
    <div className={`diagonal-container ${type}`}>
    </div>
  );
}
 
export default DiagonalContainer;