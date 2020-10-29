import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import DetailContainer from './DetailContainer';
import CollectionDetail from './CollectionDetail';
import WishDetail from './WishDetail';
import DiagonalContainer from './DiagonalContainer';

const Collection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);
  const wishes = useSelector(state => state.wishes);
  const [isUserLoaded, setisUserLoaded] = useState(false);
  // const [selectedWish, setSelectedWish] = useState(null); 
  
  // const wishSelected = wishes.filter(wish => wish.id === props.match.params.id);
  // // const wishSelected = wishes.find(wish => wish.id === props.match.params.id);
  // console.log(wishSelected)
  
  // console.log(props.match.params.id, 'PARAM')
  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setisUserLoaded(true);
    })()
  }, [])

  useEffect(() => {
    wishes.forEach(wish => console.log(wish.id))
    console.log(props.match.params.id, "PROPS")
    const wishSelected = wishes.find(wish => wish.id === 3);
    console.log(wishSelected)
  }, [props.match.params.id])
  
  {/* <CollectionDetail {...collection}/> */}
  if (isUserLoaded) {
    // const wishSelected = wishes.filter(wish => wish.id === props.match.params.id);
    
    return (
      <>
        <DiagonalContainer type="vertical-1" />
        <DiagonalContainer type="vertical-2" />
          {props.match.path === '/my-collections/:id' ? (
            <DetailContainer title={collection.collectionName}>
              <CollectionDetail {...collection}/>
            </DetailContainer>
          ) : (
            <DetailContainer>
              <WishDetail { ...collection }/>
            </DetailContainer>
          )}
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default Collection;