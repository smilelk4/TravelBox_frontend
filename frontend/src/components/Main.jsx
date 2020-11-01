import React from 'react';
import DiagonalContainer from './DiagonalContainer';
import Card from './Card';

const Main = () => {
  return ( 
    <main className='main'>
      <div className='main__contents'>
        {/* <DiagonalContainer /> */}
        <div className='main__main'>
          <div className='main__left'>
            <h3>Start Planning Now</h3>
          </div>
          <div className='main__right'>
            <div className='main__image'></div>
            <div className='main__image'></div>
            <div className='main__image'></div>
            <div className='main__image'></div>
          </div>
          
          {/* <Card type='rectangle-2'/>
          <Card type='rectangle-2'/>
          <Card type='rectangle-2'/> */}
        </div>

        
        {/* <div className='main__contents-left'>
          Hiiii
        </div>
        <div className='main__contents-right'>
          <div className='main__image-container'>
            <div className='main__image'></div>
          </div>
        </div> */}
      </div>
      {/* <div className='main__section'>
        <DiagonalContainer type='horizontal-2'/>
      </div> */}
    </main>
  );
}
 
export default Main;