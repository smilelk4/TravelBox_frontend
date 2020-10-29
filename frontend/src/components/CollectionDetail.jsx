import React from 'react';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';

const CollectionDisplay = ({ id, collectionName, description, createdAt, updatedAt }) => {
  
  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="collection-detail">
      <div className="collection-detail__contents">
        <PageTitle title={collectionName}/>
          <p> { description } </p>
          <p>{ id }</p>
          <p>{ createdAt }</p>
          <p>{ updatedAt }</p>
        </div>
     </div>
    </>
  );
}
 
export default CollectionDisplay;