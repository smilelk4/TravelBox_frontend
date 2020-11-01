import React from 'react';

const Header = () => {
  return ( 
    <header className='header'>
      <div className='header__left'>
        <div className='header__image-container'>
          <div className='header__image'></div>
          <div className='header__image'></div>
        </div>
      </div>
      <div className='header__right'>
        <h1>Travel Box</h1>
        <h2>The place to start planning for your next travel destination.</h2>
      </div>
    </header>
  );
}
 
export default Header;