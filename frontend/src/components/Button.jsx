import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ type, bgcolor='white', linkTo='', reg, className}) => {
  let buttonDisplay;
  if (type === "signup") buttonDisplay = "Sign Up";
  if (type === "login") buttonDisplay = "Log In";
  if (type === "logout") buttonDisplay = "Log Out";
  if (type === "demo") buttonDisplay = "Demo";
  if (type === "createWish") buttonDisplay = "Create a New Wish";
  if (type === "editWish") buttonDisplay = "Edit Wish";
  if (type === "deleteWish") buttonDisplay = "Delete Wish";
  if (type === "createCollection") buttonDisplay = "Create a New Collection";
  if (type === "editCollection") buttonDisplay = "Edit Collection";
  if (type === "deleteCollection") buttonDisplay = "Delete Collection";

  if (linkTo) {
    return (
      <NavLink to={linkTo}>
        <input className={`button ${bgcolor}`} 
        id={type} 
        value={ buttonDisplay.toUpperCase() }
        type="submit"
      />
      </NavLink>
    );
  }

  if (reg) {
    return (
      <input className={`button ${bgcolor}`} 
        id={type} 
        value={ buttonDisplay.toUpperCase() }
        type="submit"
      />
    );
  }
  
  return ( 
    <input className={`button ${bgcolor} ${className}`} 
      id={type}
      value={ buttonDisplay.toUpperCase() }
    />
  );
}
 
export default Button;