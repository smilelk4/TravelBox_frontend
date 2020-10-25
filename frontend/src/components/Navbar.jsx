import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';

const Navbar = () => {
  const [ modalStatus, setModalStatus ] = useState('hidden');
  const [ navbarStatus, setNavbarStatus ] = useState('initial');

  const handleClick = e => {
    modalStatus === 'hidden' ? setModalStatus('active') : setModalStatus('hidden');
  };

  window.addEventListener('scroll', e => {
    window.pageYOffset > 55 ? setNavbarStatus('scrolled') : setNavbarStatus('initial');
  });

  return ( 
    <nav className={`navbar navbar--${navbarStatus}`}>
      <navbar className='navbar__left'>
        <NavLink to='/'>
          <h1 className='navbar__title'>Travel Box</h1>
        </NavLink>
      </navbar>
      <Modal blockElem='navbar__signup-login-modal' modalStatus={modalStatus} />
      <div className={`navbar__overlay--${modalStatus}`} onClick={handleClick}></div>
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