import React from 'react';
import Form from './Form';
import TextField from '@material-ui/core/TextField';

const Modal = ({ blockElem, modalStatus, toDisplay, toggleDisplay }) => {
  const title = toDisplay === 'signup' ? 'Sign Up' : 'Log In';

  const handleClick = e => {
    e.target.innerText === 'Sign Up' ? 
    toggleDisplay('signup') :
    toggleDisplay('login');
  }

  // const inputField = (type, label, id) => {
  //   return (
  //     <div>
  //       <input type={type} className={`form__input-${id}`} />
  //       <br />
  //       <label><span>{label}</span></label>
  //     </div>
  //   );
  // };

  return ( 
    <div className={`modal ${blockElem}--${modalStatus}`}>
      <p onClick={handleClick} className="modal__toggle"><span>Sign Up</span><span>Log In</span></p>
      <h3 className="modal__header">{title}</h3>
      <Form>
        {/* {inputField('email', 'Email', 'email')}
        {inputField('password', 'Password', 'password')} */}
      </Form>
    </div> 
  );
}
 
export default Modal;