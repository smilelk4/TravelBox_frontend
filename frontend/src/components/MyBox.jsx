import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollections } from '../actions/collectionActions';
import { restoreUserStore } from '../actions/userAction';
import DiagonalContainer from './DiagonalContainer';
import PageTitle from './PageTitle';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  // const userId = useSelector(state => state.userInfo.user.id);
  const collections = useSelector(state => state.collections);
  
  useEffect(() => {
    dispatch(fetchCollections(userInfo.user.id));
  }, []);

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        {collections.map(collection => <Card type='horizontal-1' {...collection} />)}
      </div>
      <div className="mybox__starred-container">
      <PageTitle title="Starred Wishes" size="medium" />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
 
export default MyBox;