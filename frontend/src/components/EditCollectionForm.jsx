import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCollection, fetchCollection } from '../actions/collectionActions';
import InputField from './InputField';
import Button from './Button';
import Alert from '@material-ui/lab/Alert';

const EditCollectionForm = (props, { title }) => {
  const [ collectionName , setCollectionName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState('');
  const collectionId = props.match.params.id;
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collections[0]);
  // const [isCollectionLoaded, setIsCollectionLoaded] = useState(false);
  const [loadedCollection, setLoadedCollection] = useState('');
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);
  const errorLog = useSelector(state => state.errors);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setIsUserLoaded(true);
      // setCollectionName('yes');
      // setDescription('yess')
      // setCollectionName(collection);

      // setCollectionName(fetchedCollection.collectionName);
      // setIsCollectionLoaded
      // console.log(fetchedCollection, '11!')
      // setIsUserLoaded(true);
    })()
  }, [props.match.params.id])

  useEffect(() => {
    if (collection) {
      setCollectionName(collection.collectionName);
      setDescription(collection.description)
    }
  }, [collection])

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', userId);
    data.append('collectionName', collectionName);
    data.append('description', description);
    data.append('file', image);
    dispatch(createCollection(data, token));

    // const formData = { userId, collectionName, description };
    // dispatch(createCollection(formData, token));
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
          <Button type='createCollection' bgcolor='blue' reg='true'/>
        </form>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )

}
 
export default EditCollectionForm;