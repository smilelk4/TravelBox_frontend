import React from 'react';
import Form from './Form';

const Modal = ({ blockElem, modalStatus, toDisplay, toggleDisplay }) => {
  const title = toDisplay === 'signup' ? 'Sign Up' : 'Log In';

  const handleClick = e => {
    e.target.innerText === 'Sign Up' ? 
    toggleDisplay('signup') :
    toggleDisplay('login');
  }

  const inputField = (type, label) => {
    return (
      <label>
        {label}:
        <br />
        <input type={type}/>
      </label>
    );
  };

  return ( 
    <div className={`modal ${blockElem}--${modalStatus}`}>
      <p onClick={handleClick} className="modal__toggle"><span>Sign Up</span><span>Log In</span></p>
      <h3 className="modal__header">{title}</h3>
      <Form>
        {inputField('email', 'Email')}
        {inputField('password', 'Password')}
      </Form>
    </div> 
  );
}
 
export default Modal;