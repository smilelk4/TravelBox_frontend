import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
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
      <div className="navbar__signup-login-modal--hidden"></div>
      <div className="navbar__overlay--hidden"></div>
      <div className='navbar__right'>
        <Button dest="signup" />
        <Button dest="login" />
        <div className='navbar__hamburger'>X</div>
      </div>
    </nav>
  );
}
 
export default Navbar;