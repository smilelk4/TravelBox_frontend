import React, { useRef, useEffect } from 'react';

const Card = ({ type, id, userId, collectionName, description, createdAt, updatedAt }) => {
  const cardDiv = useRef();

  useEffect(() => {
    if (type === 'horizontal-1') {
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


  return ( 
    <div ref={cardDiv} className='card'>
      <h3>{collectionName}</h3>
      <p>{description}</p>
    </div>
  );
}
 
export default Card;