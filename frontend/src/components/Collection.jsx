import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import CollectionDetail from './CollectionDetail';

const Collection = props => {
  const dispatch = useDispatch();
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
        <CollectionDetail {...collection}/>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default Collection;