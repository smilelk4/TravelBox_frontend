import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailContainer from './DetailContainer';
import CreateWishForm from './CreateWishForm';
import InputField from './InputField';
import { LOAD_COLLECTION } from '../reducers/collectionReducer';
import { fetchCollection } from '../actions/collectionActions'

const CreateWish = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollection(props.match.params.id));
  });

  return ( 
    <div>
      <DetailContainer {...props}>
        <CreateWishForm title='Create a New Wish' />
      </DetailContainer>
    </div>
  );
}
 
export default CreateWish;