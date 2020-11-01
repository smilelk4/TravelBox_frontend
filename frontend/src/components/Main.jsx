import React from 'react';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const Main = () => {
  const handleClick = e => {
    document.querySelector('.nav-signup').click();
  }

  return ( 
    <main className='main'>
      <div className='main__contents'>
        {/* <DiagonalContainer /> */}
        <div className='main__main'>
          <div className='main__left'>
            <h3 onClick={handleClick}>Start Planning Now</h3>
          </div>
          <div className='main__right'>
            <div className='main__image'></div>
            <div className='main__image'></div>
            <div className='main__image'></div>
            <div className='main__image'></div>
            <div className='main__image'></div>
          </div>
      
        </div>
      </div>

    </main>
  );
}
 
export default Main;