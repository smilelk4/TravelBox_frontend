import React from 'react';
import DetailContainer from './DetailContainer';
import EditCollectionForm from './EditCollectionForm';
import InputField from './InputField';

const EditCollection = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <EditCollectionForm title='Edit Your Collection' />
      </DetailContainer>
    </div>

  );
}
 
export default EditCollection;