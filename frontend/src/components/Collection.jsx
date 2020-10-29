import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import { DELETE_COLLECTIONS } from '../reducers/collectionReducer'

const Collection = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);

  // const fetch = useCallback(
  //   () => dispatch(fetchCollection(collectionId)),
  //   [dispatch]
  // );

  useEffect(() => {

    if (!collection) {
      (async () => {
        await dispatch(fetchCollection(collectionId));
      })()
    }

    return () => dispatch({ type: DELETE_COLLECTIONS });

  }, [])

  // console.log(collection.id)
  // const { collectionName, description, createdAt, updatedAt } = collection;
  // const { collectionName, description, createdAt, updatedAt } = collection;
  // useEffect(() => {
  //   (async () => {
  //     if(!collection) {
  //       await dispatch(fetchCollection(collectionId));
  //     }

  //   console.log(collection, '!!!')
  // })()
      // console.log(collection.collectionName)
      // console.log(collection)
  // }, []);

  return ( 
    <div>COllection</div>

  );
}
 
export default Collection;