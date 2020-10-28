import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'

const Collection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;

  useEffect(() => {
    dispatch(fetchCollection(collectionId));
  });
  
  return ( 
    <div>COllection</div>
  );
}
 
export default Collection;