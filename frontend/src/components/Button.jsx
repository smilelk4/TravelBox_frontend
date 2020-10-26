import React from 'react';

const Button = ({ type, bgcolor='white' }) => {
  let buttonDisplay;
  if (type === "signup") buttonDisplay = "Sign Up";
  if (type === "login") buttonDisplay = "Log In";
  
  return ( 
    <input className={`button ${bgcolor}`} 
    id={type} 
    value={ buttonDisplay.toUpperCase() } />
  );
}
 
export default Button;