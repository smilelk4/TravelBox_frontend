import React, { useEffect } from 'react';


const WishDetail = (props) => {
  const { id, description, collectionId, country, regionCity, interestLevel, targetDate, targetSaving, starred, accomplished, createdAt, updatedAt, ToDos: toDos } = props;
  return ( 
    <div>
      <div className="wish-detail">
        <div className="wish-detail__container">
          <div className="wish-detail__contents">

            <p className="wish-detail__label">Description:</p>
            <p>{description}</p>
            <p className="wish-detail__label">Country:</p>
            <p>{country}</p>
            <p className="wish-detail__label">Region/City:</p>
            <p>{regionCity}</p>
            <p className="wish-detail__label">Interest Level:</p>
            <p>{interestLevel}</p>
            <p className="wish-detail__label">Goal Date:</p>
            <p>{targetDate}</p>
            <p className="wish-detail__label">Goal Saving:</p>
            <p>{targetSaving}</p>
            {toDos && (
              <ul>
              {toDos.map(toDo => <li key={toDo.id}>{toDo.description}</li>)}
              </ul>
            )}
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