import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
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
        <h1 className='navbar__title'>Travel Box</h1>
      </navbar>
      <div className='navbar__right'>
        <Button name="Sign Up">
          <NavLink to='/signup'>Sign Up</NavLink>
        </Button>
        <Button name="Log In">
          <NavLink to='/login'>Log In</NavLink>
        </Button>
        <div className='navbar__hamburger'>X</div>
      </div>
    </nav>
  );
}
 
export default Navbar;