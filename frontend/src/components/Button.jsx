import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ type, bgcolor='white', linkTo='' }) => {
  let buttonDisplay;
  if (type === "signup") buttonDisplay = "Sign Up";
  if (type === "login") buttonDisplay = "Log In";
  if (type === "logout") buttonDisplay = "Log Out";
  if (type === "demo") buttonDisplay = "Demo";

  if (linkTo) {
    return (
      <NavLink to={linkTo}>
        <input className={`button ${bgcolor}`} 
        id={type} 
        value={ buttonDisplay.toUpperCase() }
        // type="submit"
      />
      </NavLink>
    );
  }
  
  return ( 
    <input className={`button ${bgcolor}`} 
      id={type} 
      value={ buttonDisplay.toUpperCase() }
    />
  );
}
 
export default Button;