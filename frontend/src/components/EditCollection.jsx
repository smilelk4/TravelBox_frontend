import React from 'react';
import DetailContainer from './DetailContainer';
import EditCollectionForm from './EditCollectionForm';

const EditCollection = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <EditCollectionForm title='Edit Your Collection' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default EditCollection;