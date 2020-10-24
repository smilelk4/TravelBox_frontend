import React from 'react';
import PageTitle from './PageTitle';
import Card from './Card';

const DiagonalContainer = () => {
  return ( 
    <div className="diagonal-container">
      <div className='diagonal-container__content'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
 
export default DiagonalContainer;