import React, { useState, useEffect, createContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import { LightSiteLogo } from '../icons/SiteLogo';
import { validateUser } from '../actions/userAction';
import { LOG_OUT } from '../reducers/loginReducer';
import { DELETE_USER_INFO } from '../reducers/userReducer';
import { DELETE_TOKEN_INFO } from '../reducers/tokenReducer';
import { DELETE_COLLECTIONS } from '../reducers/collectionReducer';
import { DELETE_WISHES } from '../reducers/wishReducer';

export const DemoContext = createContext({});

const Navbar = () => {
  const [ modalStatus, setModalStatus ] = useState('hidden');
  const [ navbarStatus, setNavbarStatus ] = useState('initial');
  const [ modalToDisplay, setModalToDisplay ] = useState(null);
  const [ profilePic, setProfilePic ] = useState('');
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const loadedProfileImage  = useSelector(state => state.userInfo.imageUrl);
  const dispatch = useDispatch();
  const menu = useRef('');;

  useEffect(() => {
    if (isLoggedIn) {
      setModalStatus('hidden');
      setProfilePic(loadedProfileImage);
    }
  });

  const handleSignupOrLogin = e => {
    modalStatus === 'hidden' ? setModalStatus('active') : setModalStatus('hidden');
    if (e.target.id === 'signup') { 
      setModalToDisplay('signup');
    } else if (e.target.id === 'login' ) {
      setModalToDisplay('login');
    } else if (e.target.id === 'demo') {
      setModalToDisplay('login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user-info');
    dispatch({ type: LOG_OUT });
    dispatch({ type: DELETE_USER_INFO });
    dispatch({ type: DELETE_TOKEN_INFO });
    dispatch({ type: DELETE_WISHES });
    dispatch({ type: DELETE_COLLECTIONS });
  }

  const handleDemoLogin = () => {
    dispatch(validateUser({
      "email": "demo@demo.com",
      "password": "Password123!"
    }));
  }

  const toggleMenu = () => {
    menu.current.classList.toggle('active');
  }

  window.addEventListener('scroll', e => {
    window.pageYOffset > 55 ? setNavbarStatus('scrolled') : setNavbarStatus('initial');
  });

  return ( 
    <nav className={`navbar navbar--${navbarStatus}`}>
      <nav className='navbar__left'>
        <NavLink to='/'>
          <h1 className='navbar__title'>Travel Box</h1>
          <LightSiteLogo />
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
            <NavLink to='/my-box'>MyBox</NavLink>
            <div className='navbar__hamburger' onClick={toggleMenu} >
              <img src={profilePic} />
            </div>
            <div ref={menu} className='navbar__menu'>
              <NavLink to='/my-collections/create'>Create a New Collection</NavLink>
              <div onClick={handleLogout}>
                <Button type="logout" linkTo='/' />
              </div>
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
            <div onClick={handleDemoLogin}>
              <Button type="demo" bgcolor="green" linkTo='/my-box' />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
 
export default Navbar;