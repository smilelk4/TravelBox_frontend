import React from 'react';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';

const CollectionDisplay = ({ id, collectionName, description, createdAt, updatedAt }) => {
  
  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="collection-detail">
      <div className="collection-detail__container">
        <PageTitle title={collectionName}/>
      <div className="collection-detail__contents">
        <img src="http://www.clarksonmotors.co.uk/wp-content/uploads/2015/04/placeholder-600x400.png"></img>
        <p> { description } </p>
        <p>{ id }</p>
        <p>{ createdAt }</p>
        <p>{ updatedAt }</p>
      </div>
        </div>
     </div>
    </>
  );
}
 
export default CollectionDisplay;