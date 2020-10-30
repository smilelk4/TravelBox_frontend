import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import DetailContainer from './DetailContainer';
import CollectionDetail from './CollectionDetail';
import WishDetail from './WishDetail';
import DiagonalContainer from './DiagonalContainer';

const DisplayWish = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const wishes = useSelector(state => state.wishes);
  
  useEffect(() => {
    if (!wishes.length) {
      (async () => {
        await dispatch(fetchCollection(collectionId));
      })()
    }
  }, [wishes, dispatch])
  
  if (wishes.length) {
    const wish = wishes.find(wish => wish.id === parseInt(props.match.params.id));
    
    return (
      <>
        <DetailContainer title={wish.title}>
          <WishDetail {...wish}/>
        </DetailContainer>
      </>
    );
  }
  return <div>...Loading</div>
  
}
 
export default DisplayWish;