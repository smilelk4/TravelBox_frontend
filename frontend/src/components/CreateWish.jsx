import React from 'react';
import DetailContainer from './DetailContainer';
import CreateWishForm from './CreateWishForm';
import InputField from './InputField';

const CreateWish = () => {
  return ( 
    <div>
      <DetailContainer>
        <CreateWishForm title='Create a New Wish' />
      </DetailContainer>
    </div>
  );
}
 
export default CreateWish;