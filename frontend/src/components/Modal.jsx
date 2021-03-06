import React from 'react';
import Form from './Form';

const Modal = ({ blockElem, modalStatus, toDisplay, toggleDisplay }) => {
  const title = toDisplay === 'signup' ? 'Sign Up' : 'Log In';

  const handleClick = e => {
    e.target.innerText === 'Sign Up' ? 
    toggleDisplay('signup') :
    toggleDisplay('login');
  }

  return ( 
    <div className={`modal ${blockElem}--${modalStatus}`}>
      <p onClick={handleClick} className="modal__toggle"><span>Sign Up</span><span>Log In</span></p>
      <Form title={title} />
    </div> 
  );
}
 
export default Modal;