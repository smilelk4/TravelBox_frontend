import React from 'react';
import DetailContainer from './DetailContainer';
import DeleteCollectionForm from './DeleteCollectionForm';
import InputField from './InputField';

const DeleteCollection = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <DeleteCollectionForm title='Are You Sure?' {...props} />
      </DetailContainer>
    </div>

  );
}
 
export default DeleteCollection;