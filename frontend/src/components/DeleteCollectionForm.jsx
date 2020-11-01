import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCollection, fetchCollection } from '../actions/collectionActions';
import Button from './Button';
import PageSection from './PageSection';
import Alert from '@material-ui/lab/Alert';

const DeleteCollectionForm = (props) => {
  const [ collectionName , setCollectionName ] = useState('');
  const [ description, setDescription ] = useState('');
  const collectionId = props.match.params.id;
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collections[0]);
  const token = useSelector(state => state.token);
  const errorLog = useSelector(state => state.errors);

  useEffect(() => {
    dispatch(fetchCollection(collectionId));
  }, [props.match.params.id, dispatch, collectionId]);

  useEffect(() => {
    if (collection) {
      setCollectionName(collection.collectionName);
      setDescription(collection.description)
    }
  }, [collection]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(deleteCollection(token, collection.id));
    window.location.href='/my-box';
  }
  
  if (collection) {
    return (
      <>
        <h3 className="form__header">{props.title}</h3>
        <div className="form__error-container">
          {errorLog.map(err => (
            <Alert severity="error">{err}</Alert> 
          ))}
        </div>
        <PageSection 
          label='Collection Name:'
          value={collectionName}
        />
        <PageSection 
          label='Description'
          value={description}
        />
        <form className="form" onSubmit={handleSubmit}>
          <Button type='deleteCollection' bgcolor='pink' reg='true'/>
        </form>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )

}
 
export default DeleteCollectionForm;