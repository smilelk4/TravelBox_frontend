import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import { DELETE_COLLECTIONS } from '../reducers/collectionReducer'
import useRestoreUser from '../customHooks/useRestoreUser';

const Collection = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);
  const [isUserLoaded, setisUserLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setisUserLoaded(true);
    })()
  }, [])

  if (isUserLoaded) {
    return ( 
      <>
        <div>{collection.id}</div>
        <div>{collection.collectionName}</div>
        <div>{collection.description}</div>
        <div>{collection.createdAt}</div>
        <div>{collection.updatedAt}</div>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default Collection;