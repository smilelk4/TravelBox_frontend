import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();

  useEffect(() => {
    console.log('hihi')
  });

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
      </div>
    </div>
  );
}
 
export default MyBox;