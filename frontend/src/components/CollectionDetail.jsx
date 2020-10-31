import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import dateDisplay from '../utils/date-converter';

const CollectionDetail = ({ id, collectionName, description, createdAt, updatedAt }) => {
  const wishes = useSelector(state => state.wishes);
  const images = useSelector(state => state.collections[0].Images);
  const [isImageLoaded, setIsImageLoaded] = useState(false); 

  useEffect(() => {
    if (images) setIsImageLoaded(true);
  }, []);

  return ( 
    <> 
      <div className="detail-container__image-container">
        {isImageLoaded && images.map(img => <img src={img.image} />)}
      </div>
      <p> { description } </p>
      {wishes.map(wish => <Card wish={wish} id={id} />)}
      <p className="collection-detail__info">
        <span>collection id: { id }</span> 
        <span>created at: { dateDisplay(createdAt) }</span>
        <span>last updated: { dateDisplay(updatedAt) }</span>
      </p>
    </>
  );
}
 
export default CollectionDetail;