import React from 'react';
import DetailContainer from './DetailContainer';
import CreateCollectionForm from './CreateCollectionForm';
import InputField from './InputField';

const CreateCollection = (props) => {
  return ( 
    <div>
      <DetailContainer {...props}>
        <CreateCollectionForm title='Create a New Collection' />
      </DetailContainer>
    </div>
  );
}
 
export default CreateCollection;