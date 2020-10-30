import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCollection } from '../actions/collectionActions';
import InputField from './InputField';
import Button from './Button';

const CreateCollectionForm = ({ title }) => {
  const [ collectionName , setCollectionName ] = useState('');
  const [ description, setDescription ] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { userId, collectionName, description };

    dispatch(createCollection(formData, token));
  }


  return (
    <>
      <h3 className="form__header">{title}</h3>
      <div className="form__error-container">
        {/* {errorLog.map(err => (
          <Alert severity="error">{err}</Alert> 
        ))} */}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <InputField 
          type='text' 
          label='Collection Name'
          size='lg-1'
          updateState={setCollectionName} /> 
        <InputField 
          type='text' 
          label='Description'
          size='lg-1'
          updateState={setDescription} /> 
        <Button type='createCollection' bgcolor='blue' reg='true'/>
      </form>
    </>
  );
}
 
export default CreateCollectionForm;