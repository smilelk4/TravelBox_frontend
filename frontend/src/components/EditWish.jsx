import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import EditWishForm from './EditWishForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const EditWish = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <EditWishForm title='Edit Your Wish' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default EditWish;