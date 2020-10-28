import React, { useRef } from 'react';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        <Card type='horizontal-1' root={containerDiv} />
        <Card type='horizontal-1' root={containerDiv} />
        <Card type='horizontal-1' root={containerDiv} />
        <Card type='horizontal-1' root={containerDiv} />
        <Card type='horizontal-1' root={containerDiv} />
      </div>
    </div>
  );
}
 
export default MyBox;