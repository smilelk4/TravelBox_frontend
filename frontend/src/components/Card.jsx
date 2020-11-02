import React, { useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCollection } from '../actions/collectionActions'
import { NavLink } from 'react-router-dom';

const Card = ({ type, collection, wish }) => {
  const cardDiv = useRef();

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

    if (cardDiv) {
      observer.observe(cardDiv.current);
    }
  
    return () => observer.disconnect();
  }, [type]);

  if (collection) {
    const { id, collectionName, description } = collection;
    return ( 
      <NavLink to={`/my-collections/${id}`}>
      <div ref={cardDiv} className='card'>
        <h3>{collectionName}</h3>
        <p className="card__description">{description}</p>
        <p className="card__see-details">See details</p>
      </div>
      </NavLink>
    );
  }

  if (wish) {
    const { id, title, description, country, regionCity } = wish;
    return ( 
      <NavLink to={`/my-wishes/${id}`}>
        <div ref={cardDiv} className='card'>
          <h4>{title}</h4>
          <div className="card__description">
            <p>{description}</p>
            <p><span>Country: </span>{country}</p>
            <p><span>Region/City: </span>{regionCity}</p>
          </div>
        </div>
      </NavLink>
    );
  }
  return ( 
    <div ref={cardDiv} className='card__image'>
      <div className='card__image'></div>
    </div>
  )
}

 
export default Card;