import React, { useRef, useEffect } from 'react';

const Card = ({ type }) => {
  const cardDiv = useRef();

  useEffect(() => {
    if (type === 'horizontal-1') {
      cardDiv.current.classList.add(type);
    }
  })

  return ( 
    <div ref={cardDiv} className='card'>
      <h3>Hiii</h3>
    </div>
  );
}
 
export default Card;