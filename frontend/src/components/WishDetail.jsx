import React, { useEffect } from 'react';
import PageTitle from './PageTitle';

const WishDetail = (props) => {
  const { id, collectionId, country, regionCity, interestLevel, targetDate, targetSaving, starred, accomplished, createdAt, updatedAt } = props;

  return ( 
    <div>
      <div className="wish-detail">
        <div className="wish-detail__container">
          <div className="wish-detail__contents">
            <p>Country: {country}</p>
            <p>Region/City: {regionCity}</p>
            <p>Interest Level: {interestLevel}</p>
            <p>Goal Date: {targetDate}</p>
            <p>Goal Saving: {targetSaving}</p>
          </div>
          <p className="wish-detail__info">
            <span>wish id: { id }</span>
            <span>created at: { createdAt }</span>
            <span>last updated: { updatedAt }</span>
          </p>
        </div>
     </div>
    </div>
  );
}
 
export default WishDetail;