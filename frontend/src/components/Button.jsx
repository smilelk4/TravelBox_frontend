import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ dest }) => {
  let buttonDisplay;
  if (dest === "signup") buttonDisplay = "Sign Up";
  if (dest === "login") buttonDisplay = "Log In";

  return ( 
    <div className="button">
      { buttonDisplay.toUpperCase() }
      {/* <NavLink to={`/${dest}`}>{ buttonDisplay.toUpperCase() }</NavLink> */}
    </div>
  );
}
 
export default Button;