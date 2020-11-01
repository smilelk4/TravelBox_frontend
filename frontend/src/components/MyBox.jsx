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
  }, [userInfo, dispatch]);

  return ( 
    <div className="mybox">
      <DiagonalContainer title='MyCollections' />
      <NavLink to='/my-collections/create'>
        <LightAddIcon  type='mb'/>
      </NavLink>
      <PageTitle title="MyCollection" option="my-box"/>
      <div ref={containerDiv} className="mybox__card-container">
        {!collections.length && <p className='no-contents'>You don't have any collections yet.
          Create your first collection <NavLink to='/my-collections/create'>HERE</NavLink>.</p>}
        {collections.map(collection => <Card key={collection.id} type='horizontal-1' collection={collection} />)}
      </div>
      <div className="mybox__starred-container">
        <PageTitle title="Starred Wishes" size="medium"/>
          {!wishes.length && <p className='no-contents'>You don't have any wishes yet.</p>}
          {wishes.map(wish => <Card key={wish.id} type='rectangle-1' wish={wish}/>)}
      </div>
    </div>
  );
}
 
export default MyBox;