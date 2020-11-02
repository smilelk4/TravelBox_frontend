import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageSection from './PageSection';
import dateDisplay from '../utils/date-converter';
import DisplayDate from '../utils/date-converter';
import { toggleStar } from '../actions/wishActions'

const WishDetail = (props) => {
  const { id, description, collectionId, country, regionCity, interestLevel, goalDate, goalSaving, starred, accomplished, createdAt, updatedAt, ToDos: toDos } = props;
  const images = useSelector(state => state.wishes[0].Images);
  const [isImageLoaded, setIsImageLoaded] = useState(false); 
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (images) setIsImageLoaded(true);
  }, [images]);

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleStar(token, id));
  }
  
  return ( 
    <>
      <div className="wish-detail">
        <div className="wish-detail__container">
           {starred ? <span　onClick={handleClick} className='wish-detail__star'>★</span> : <span　onClick={handleClick} className='wish-detail__star'>☆</span>}
          <div className="detail-container__image-container">
            {isImageLoaded ? (
              images.map(img => <img src={img.image} alt={img.image} key={img.image}/> )):( <div>Loading...</div>)}
          </div>
          <div className="wish-detail__contents">
            <PageSection label='Description:' value={description}/>
            <PageSection label='Country:' value={country}/>
            <PageSection label='Region/City:' value={regionCity}/>
            <PageSection label='Interest Level:' value={interestLevel}/>
            <PageSection label='Goal Date:' value={ DisplayDate(goalDate) }/>
            <PageSection label='Goal Saving:' value={`$${goalSaving}`}/>
            <PageSection label='Starred:' value={starred ? 'Yes' : 'No'}/>
            <PageSection label='Accomplished:' value={accomplished ? 'Yes' : 'No'}/>

            {toDos && (
              <ul>
              {toDos.map(toDo => <li key={toDo.id}>{toDo.description}</li>)}
              </ul>
            )}
          </div>
          <p className="wish-detail__info">
            <span>wish id: { id }</span> |
            <span>collection id: { collectionId }</span> |
        <span>created at: { dateDisplay(createdAt) }</span> |
        <span>last updated: { dateDisplay(updatedAt) }</span>
          </p>
        </div>
     </div>
    </>
  );
}
 
export default WishDetail;