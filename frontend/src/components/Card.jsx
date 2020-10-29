import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import { NavLink } from 'react-router-dom';

const Card = ({ type, collection, wish }) => {
  const cardDiv = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (type) {
      cardDiv.current.classList.add(type);
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
      cardDiv.current.classList.add('card--visible');
    } else {
      cardDiv.current.classList.remove('card--visible');
    }
    });
    observer.observe(cardDiv.current);
  
    return () => observer.disconnect();
  });

  if (collection) {
    const { id, userId, collectionName, description, createdAt, updatedAt } = collection;
    return ( 
      <NavLink to={`/my-collections/${id}`}>
      <div ref={cardDiv} className='card'>
        <h3>{collectionName}</h3>
        <p>{description}</p>
      </div>
      </NavLink>
    );
  }

  if (wish) {
    const { id, collectionId, description, country, regionCity, targetSaving, interestLevel, targetDate, createdAt, updatedAt } = wish;
    return ( 
      <NavLink to={`/my-wishes/${id}`}>
        <div ref={cardDiv} className='card'>
          <h4>{description}</h4>
          <p>{country}</p>
          <p>{regionCity}</p>
        </div>
      </NavLink>
    );
  }
}
 
export default Card;