import React from 'react';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const MyBox = () => {
  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div className="mybox__card-container">
          <Card type='horizontal-1' />
          <Card type='horizontal-1' />
          <Card type='horizontal-1' />
      </div>
    </div>
  );
}
 
export default MyBox;