import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import DetailContainer from './DetailContainer';
import CollectionDetail from './CollectionDetail';

const DisplayCollection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);
  const wishes = useSelector(state => state.wishes);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setIsUserLoaded(true);
    })()
  }, [props.match.params.id])


  if (collection) {    
    return (
      <>
        <DetailContainer {...props} title={collection.collectionName}>
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