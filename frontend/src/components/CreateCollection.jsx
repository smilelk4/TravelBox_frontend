import React from 'react';
import DetailContainer from './DetailContainer';
import CreateCollectionForm from './CreateCollectionForm';
import InputField from './InputField';

const CreateCollection = () => {
  return ( 
    <div>
      <DetailContainer>
        <CreateCollectionForm title='Create a New Collection' />
      </DetailContainer>
    </div>
  );
}
 
export default CreateCollection;