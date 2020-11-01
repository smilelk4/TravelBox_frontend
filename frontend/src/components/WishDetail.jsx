import React, { useEffect } from 'react';
import PageSection from './PageSection';

const WishDetail = (props) => {
  const { id, description, collectionId, country, regionCity, interestLevel, goalDate, goalSaving, starred, accomplished, createdAt, updatedAt, ToDos: toDos } = props;
  return ( 
    <div>
      <div className="wish-detail">
        <div className="wish-detail__container">
          <div className="wish-detail__contents">
            <PageSection label='Description:' value={description}/>
            <PageSection label='Country:' value={country}/>
            <PageSection label='Region/City:' value={regionCity}/>
            <PageSection label='Interest Level:' value={interestLevel}/>
            <PageSection label='Goal Date:' value={goalDate}/>
            <PageSection label='Goal Saving:' value={goalSaving}/>
            <PageSection label='Starred:' value={starred}/>
            <PageSection label='Accomplished:' value={accomplished}/>

            {toDos && (
              <ul>
              {toDos.map(toDo => <li key={toDo.id}>{toDo.description}</li>)}
              </ul>
            )}
          </div>
          <p className="wish-detail__info">
            <span>wish id: { id }</span>
            <span>collection id: { collectionId }</span>
            <span>created at: { createdAt }</span>
            <span>last updated: { updatedAt }</span>
          </p>
        </div>
     </div>
    </div>
  );
}
 
export default WishDetail;