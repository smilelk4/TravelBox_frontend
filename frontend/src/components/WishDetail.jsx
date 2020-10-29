import React from 'react';

const WishDetail = ({ id, collectionId, description, country, regionCity, targetSaving, interest:evel, targetDate, starred, accomplished, createdAt, updatedAt }) => {
  return ( 
    <div>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="wish-detail">
        <div className="wish-detail__container">
          <PageTitle title={description}/>
          <div className="wish-detail__contents">
            <img src="http://www.clarksonmotors.co.uk/wp-content/uploads/2015/04/placeholder-600x400.png"></img>
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