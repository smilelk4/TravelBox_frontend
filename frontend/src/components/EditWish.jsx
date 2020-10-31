import React from 'react';
import DetailContainer from './DetailContainer';
import EditWishForm from './EditWishForm';

const EditWish = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <EditWishForm title='Edit Your Wish' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default EditWish;