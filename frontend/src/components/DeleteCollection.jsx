import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import DeleteCollectionForm from './DeleteCollectionForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const DeleteCollection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <DeleteCollectionForm title='Are You Sure?' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default DeleteCollection;