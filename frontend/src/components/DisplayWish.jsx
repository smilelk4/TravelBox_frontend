import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import DetailContainer from './DetailContainer';
import CollectionDetail from './CollectionDetail';
import WishDetail from './WishDetail';
import DiagonalContainer from './DiagonalContainer';

const DisplayWish = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  // const collection = useSelector(state => state.collections[0]);
  const wishes = useSelector(state => state.wishes);
  // console.log(wishes)
  // const [currentWishSelected, setCurrentWishSelected] = useState(null);

  // console.log(a)
  
  useEffect(() => {
    if (!wishes.length) {
      (async () => {
        await dispatch(fetchCollection(1));
        console.log('!!!', wishes)      
        // setIsUserLoaded(true);
      })()
    }
  }, [wishes, dispatch])
  
  return (
    <>
      <DetailContainer>
        <WishDetail id={props.match.params.id} wishes={wishes}/>
      </DetailContainer>
    </>
  );
  
}
 
export default DisplayWish;