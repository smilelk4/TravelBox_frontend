import React from 'react';
import Card from './Card';

const CollectionDisplay = ({ id, collectionName, description, createdAt, updatedAt }) => {
  
  return ( 
    <div className="collection-detail">
      <div className="collection-detail__contents">
        <h4> {collectionName} Hiii</h4>
        <p> { description } </p>
        <p>{ id }</p>
        <p>{ createdAt }</p>
        <p>{ updatedAt }</p>
      </div>
    </div>
  );
}
 
export default CollectionDisplay;