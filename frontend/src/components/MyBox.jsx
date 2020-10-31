import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCollections } from '../actions/collectionActions';
import { fetchStarredWishes } from '../actions/wishActions';
import DiagonalContainer from './DiagonalContainer';
import PageTitle from './PageTitle';
import Card from './Card';
import { LightAddIcon } from '../icons/AddIcon';

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
      <DiagonalContainer title='MyCollections' />
      <NavLink to='/my-collections/create'>
        <LightAddIcon  type='mb'/>
      </NavLink>
      <PageTitle title="MyCollection"/>
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