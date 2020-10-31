import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editCollection, fetchCollection } from '../actions/collectionActions';
import InputField from './InputField';
import Button from './Button';
import Alert from '@material-ui/lab/Alert';

const EditWishForm = (props, { title }) => {
  const [ collectionName , setCollectionName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState('');
  const collectionId = props.match.params.id;
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collections[0]);
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);
  const errorLog = useSelector(state => state.errors);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
    })();
  }, [props.match.params.id]);

  useEffect(() => {
    if (collection) {
      setCollectionName(collection.collectionName);
      setDescription(collection.description)
    }
  }, [collection]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', userId);
    // data.append('collectionId', collection.id);
    data.append('collectionName', collectionName);
    data.append('description', description);
    data.append('file', image);
    dispatch(editCollection(data, token, collection.id));
  }
  
  if (collection) {
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
            label='Collection Name'
            currentState={collectionName}
            size='lg-1'
            updateState={setCollectionName} /> 
          <InputField 
            type='text' 
            label='Description'
            currentState={description}
            size='lg-1'
            updateState={setDescription} /> 
          <input
          type="file"
          placeholder="Upload an image"
          onChange={e => setImage(e.target.files[0])} 
          />
          <Button type='editCollection' bgcolor='blue' reg='true'/>
        </form>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )

}
 
export default EditWishForm;