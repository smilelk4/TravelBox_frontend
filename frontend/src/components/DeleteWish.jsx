import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import DeleteWishForm from './DeleteWishForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const DeleteWish = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <DeleteWishForm title='Are You Sure?' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default DeleteWish;