import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCollection } from '../actions/collectionActions';
import InputField from './InputField';
import Button from './Button';
import Alert from '@material-ui/lab/Alert';

const CreateCollectionForm = ({ title }) => {
  const [ collectionName , setCollectionName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);
  const errorLog = useSelector(state => state.errors);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', userId);
    data.append('collectionName', collectionName);
    data.append('description', description);
    data.append('file', image);
    dispatch(createCollection(data, token));
  }
  
  return (
    <>
      <h3 className="form__header">{title}</h3>
      <div className="form__error-container">
        {errorLog.map(err => (
          <Alert severity="error">{err}</Alert> 
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <InputField 
          type='text' 
          label='Collection Name (Required)'
          required='required'
          size='lg-1'
          currentState={collectionName}
          updateState={setCollectionName} /> 
        <InputField 
          type='text' 
          label='Description'
          size='lg-1'
          currentState={description}
          updateState={setDescription} /> 
        <input
        type="file"
        placeholder="Upload an image"
        onChange={e => setImage(e.target.files[0])} 
        />
        <Button type='createCollection' bgcolor='blue' reg='true'/>
      </form>
    </>
  );
}
 
export default CreateCollectionForm;