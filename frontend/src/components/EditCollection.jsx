import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import EditCollectionForm from './EditCollectionForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const EditCollection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <EditCollectionForm title='Edit Your Collection' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default EditCollection;