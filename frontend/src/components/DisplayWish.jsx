import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWish } from '../actions/wishActions';
import DetailContainer from './DetailContainer';
import WishDetail from './WishDetail';

const DisplayWish = props => {
  const dispatch = useDispatch();
  const wishId = props.match.params.id;

  const wishes = useSelector(state => state.wishes);
  
  useEffect(() => {
    dispatch(fetchWish(wishId));
  }, [props.match.params.id, wishId, dispatch]);
  
  if (wishes.length) {
    const wish = wishes.find(wish => wish.id === parseInt(props.match.params.id));
    
    return (
      <>
        <DetailContainer title={wish.title} {...props}>
          <WishDetail {...wish}/>
        </DetailContainer>
      </>
    );
  }
  return <div>...Loading</div>
  
}
 
export default DisplayWish;