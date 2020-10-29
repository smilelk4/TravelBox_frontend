import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import DetailContainer from './DetailContainer';
import CollectionDetail from './CollectionDetail';
import WishDetail from './WishDetail';

const DisplayCollection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);
  const wishes = useSelector(state => state.wishes);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  // const [currentWishSelected, setCurrentWishSelected] = useState(null);

  useEffect(() => {
    if(!collection) {
      (async () => {
        await dispatch(fetchCollection(collectionId));
        setIsUserLoaded(true);
      })()
    }
  }, [collection, dispatch])


  if (isUserLoaded) {    
    return (
      <>
        <DetailContainer title={collection.collectionName}>
          <CollectionDetail {...collection}/>
        </DetailContainer>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default DisplayCollection;