import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollections } from '../actions/collectionActions';
import { fetchStarredWishes } from '../actions/wishActions';
import DiagonalContainer from './DiagonalContainer';
import PageTitle from './PageTitle';
import Card from './Card';

const MyBox = () => {
  const containerDiv = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const collections = useSelector(state => state.collections);
  const wishes = useSelector(state => state.wishes);
  
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCollections(userInfo.id));
      dispatch(fetchStarredWishes(userInfo.id));
    }
  }, [userInfo]);

  return ( 
    <div className="mybox">
      <DiagonalContainer />
      <div ref={containerDiv} className="mybox__card-container">
        {collections.map(collection => <Card type='horizontal-1' collection={collection} />)}
      </div>
      <div className="mybox__starred-container">
      <PageTitle title="Starred Wishes" size="medium" />
        {wishes.map(wish => <Card type='rectangle-1' wish={wish}/>)}
      </div>
    </div>
  );
}
 
export default MyBox;