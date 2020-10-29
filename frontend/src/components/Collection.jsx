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
  // const [currentWishSelected, setCurrentWishSelected] = useState(null);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setisUserLoaded(true);
    })()
  }, [])

  useEffect(() => {
    if (props.match.path === '/my-wishes/:id') {
      // setCurrentWishSelected(props.match.params.id);
      console.log(props.match.params.id)
      
      const a = wishes.find(wish => wish.id === props.match.params.id);
      console.log('WITH PARAMS', a);

      const b = wishes.find(wish => wish.id === 1);
      console.log('WITHOUT PARAMS', b);
    }

  })
  
  if (isUserLoaded) {    
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