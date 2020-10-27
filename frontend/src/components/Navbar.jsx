import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import { LOG_OUT } from '../reducers/loginReducer';
import { DELETE_USER_INFO } from '../reducers/userReducer';

const Navbar = () => {
  const [ modalStatus, setModalStatus ] = useState('hidden');
  const [ navbarStatus, setNavbarStatus ] = useState('initial');
  const [ modalToDisplay, setModalToDisplay ] = useState(null);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) setModalStatus('hidden');
  });

  const handleSignupOrLogin = e => {
    modalStatus === 'hidden' ? setModalStatus('active') : setModalStatus('hidden');
    if (e.target.id === 'signup') setModalToDisplay('signup');
    else if (e.target.id === 'login') setModalToDisplay('login');
  };

  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
    dispatch({ type: DELETE_USER_INFO });
    localStorage.removeItem('user-info');
  }

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
      <div className={`navbar__overlay--${modalStatus}`} onClick={handleSignupOrLogin}></div>
      <div className='navbar__right'>
        {isLoggedIn ? (
          <>
            'MyBox'
            <div onClick={handleLogout}>
              <Button type="logout" />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleSignupOrLogin}>
              <Button type="signup" />
            </div>
            <div onClick={handleSignupOrLogin}>
              <Button type="login" />
            </div>
          </>
        )}
        <div className='navbar__hamburger'>X</div>
      </div>
    </nav>
  );
}
 
export default Navbar;