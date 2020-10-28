import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'

const Collection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);

  // console.log(collection.id)
  // const { collectionName, description, createdAt, updatedAt } = collection;
  // const { collectionName, description, createdAt, updatedAt } = collection;
  useEffect(() => {
    (async () => {
      if (!collection) {
      await dispatch(fetchCollection(collectionId));
    }

    console.log(collection, '!!!')
  })()
      // console.log(collection.collectionName)
      // console.log(collection)
  }, []);

  return ( 
    <div>COllection</div>

  );
}
 
export default Collection;