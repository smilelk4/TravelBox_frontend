import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import CreateCollectionForm from './CreateCollectionForm';
import { CLEAR_ERRORS } from '../reducers/errorReducer';

const CreateCollection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return ( 
    <div>
      <DetailContainer {...props}>
        <CreateCollectionForm title='Create a New Collection' />
      </DetailContainer>
    </div>
  );
}
 
export default CreateCollection;