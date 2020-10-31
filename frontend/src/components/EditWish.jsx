import React from 'react';
import DetailContainer from './DetailContainer';
import EditWishForm from './EditWishForm';
import InputField from './InputField';

const EditWish = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <EditWishForm title='Edit Your Collection' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default EditWish;