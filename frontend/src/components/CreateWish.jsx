import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import CreateWishForm from './CreateWishForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const CreateWish = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <CreateWishForm title='Create a New Wish' collectionId={props.match.params.id} />
      </DetailContainer>
    </div>
  );
}
 
export default CreateWish;