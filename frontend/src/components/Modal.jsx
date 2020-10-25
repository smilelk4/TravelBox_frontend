import React from 'react';

const NavbarModal = ({ modalStatus }) => {
  return ( 
    <>
      <div className={`navbar__signup-login-modal--${modalStatus}`}></div>
      <div className={`navbar__overlay--${modalStatus}`}></div>
    </>
  );
}
 
export default NavbarModal;