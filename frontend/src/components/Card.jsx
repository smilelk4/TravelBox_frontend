import React, { useRef, useEffect } from 'react';

const Card = ({ type, root }) => {
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
  });


  return ( 
    <div ref={cardDiv} className='card card--animation'>
      <h3>Hiii</h3>
    </div>
  );
}
 
export default Card;