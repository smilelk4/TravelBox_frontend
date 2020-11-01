import React from 'react';
import DetailContainer from './DetailContainer';
import CreateWishForm from './CreateWishForm';

const CreateWish = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <CreateWishForm title='Create a New Wish' collectionId={props.match.params.id} />
      </DetailContainer>
    </div>
  );
}
 
export default CreateWish;