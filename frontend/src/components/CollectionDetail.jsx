import React from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';
import { useSelector } from 'react-redux';

const CollectionDetail = ({ id, collectionName, description, createdAt, updatedAt }) => {
  const wishes = useSelector(state => state.wishes);
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
              {wishes.map(wish => <Card wish={wish} id={id} />)}
          </div>
          <p className="collection-detail__info">
            <span>collection id: { id }</span>
            <span>created at: { createdAt }</span>
            <span>last updated: { updatedAt }</span>
          </p>
        </div>
     </div>
    </>
  );
}
 
export default CollectionDetail;