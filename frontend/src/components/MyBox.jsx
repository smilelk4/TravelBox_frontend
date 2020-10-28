import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollections } from '../actions/collectionActions';
import { fetchWishes } from '../actions/wishActions';
import DiagonalContainer from './DiagonalContainer';
import PageTitle from './PageTitle';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  // const userId = useSelector(state => state.userInfo.user.id);
  const collections = useSelector(state => state.collections);
  const wishes = useSelector(state => state.wishes);
  
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCollections(userInfo.user.id));
      dispatch(fetchWishes(userInfo.user.id));
    }
  }, [userInfo]);

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        {collections.map(collection => <Card type='horizontal-1' {...collection} />)}
      </div>
      <div className="mybox__starred-container">
      <PageTitle title="Starred Wishes" size="medium" />
        {wishes.map(wish => <div>{wish.description}</div>)}
      </div>
    </div>
  );
}
 
export default MyBox;