import React from 'react';
import DetailContainer from './DetailContainer';
import DeleteWishForm from './DeleteWishForm';

const DeleteWish = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <DeleteWishForm title='Are You Sure?' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default DeleteWish;