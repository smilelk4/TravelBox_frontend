import React, { useEffect, useState } from 'react';
import Card from './Card';
// import AddIcon from '../icons/AddIcon';
import { useSelector } from 'react-redux';

const CollectionDetail = ({ id, collectionName, description, createdAt, updatedAt }) => {
  const wishes = useSelector(state => state.wishes);
  const images = useSelector(state => state.collections[0].CollectionImages);
  // const state = useSelector(state => state);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (images) setIsImageLoaded(true);
  }, [])

  return ( 
    <>
      {isImageLoaded ? (
        images.map(img => <img src={img.image} />)
      ) : 'NO'}
      <p> { description } </p>
      {wishes.map(wish => <Card wish={wish} id={id} />)}
      <p className="collection-detail__info">
        <span>collection id: { id }</span>
        <span>created at: { createdAt }</span>
        <span>last updated: { updatedAt }</span>
      </p>
    </>
  );
}
 
export default CollectionDetail;