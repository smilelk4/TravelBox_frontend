import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';

const Navbar = () => {
  const [ modalStatus, setModalStatus ] = useState('hidden');
  const [ navbarStatus, setNavbarStatus ] = useState('initial');
  const [ modalToDisplay, setModalToDisplay ] = useState(null);

  const handleClick = e => {
    modalStatus === 'hidden' ? setModalStatus('active') : setModalStatus('hidden');
    if (e.target.id === 'signup') setModalToDisplay('signup');
    else if (e.target.id === 'login') setModalToDisplay('login');
  };

  window.addEventListener('scroll', e => {
    window.pageYOffset > 55 ? setNavbarStatus('scrolled') : setNavbarStatus('initial');
  });

  return ( 
    <nav className={`navbar navbar--${navbarStatus}`}>
      <nav className='navbar__left'>
        <NavLink to='/'>
          <h1 className='navbar__title'>Travel Box</h1>
        </NavLink>
      </nav>
      <Modal 
        blockElem='navbar__signup-login-modal' 
        modalStatus={modalStatus}
        toDisplay={modalToDisplay}
        toggleDisplay={setModalToDisplay}
        />
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