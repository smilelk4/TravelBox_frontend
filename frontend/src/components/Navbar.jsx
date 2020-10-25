import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import NavbarModal from './Modal';

const Navbar = () => {
  const [ modalStatus, setModalStatus ] = useState('hidden');

  const handleScroll = e => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 55) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('initial');
    } else {      
      navbar.classList.remove('scrolled');
      navbar.classList.add('initial');
    }
  }

  const handleClick = e => {
    modalStatus === 'hidden' ? setModalStatus('active') : setModalStatus('hidden');
  };

  window.addEventListener('scroll', e => {
    handleScroll(e);
  });

  return ( 
    <nav className='navbar initial'>
      <navbar className='navbar__left'>
        <NavLink to='/'>
          <h1 className='navbar__title'>Travel Box</h1>
        </NavLink>
      </navbar>
      <NavbarModal modalStatus={modalStatus} />
      <div className='navbar__right'>
        <div onClick={handleClick}>
          <Button dest="signup" />
        </div>
        <div onClick={handleClick}>
          <Button dest="login" />
        </div>
        <div className='navbar__hamburger'>X</div>
      </div>
    </nav>
  );
}
 
export default Navbar;