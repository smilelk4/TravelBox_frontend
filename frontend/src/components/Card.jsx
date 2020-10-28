import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Card = ({ type }) => {
  const cardDiv = useRef();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

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
      <h3>Hiii</h3>
    </div>
  );
}
 
export default Card;