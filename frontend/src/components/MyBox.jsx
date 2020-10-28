import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollections } from '../actions/collectionActions';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInfo.user.id);
  const collections = useSelector(state => state.collections);

  useEffect(() => {
    dispatch(fetchCollections(userId));
  }, []);

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        {collections.map(collection => <Card type='horizontal-1' {...collection} />)}
        {/* <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' />
        <Card type='horizontal-1' /> */}
      </div>
    </div>
  );
}
 
export default MyBox;