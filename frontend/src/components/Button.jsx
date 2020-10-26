import React from 'react';

const Button = ({ dest, bgcolor='white' }) => {
  let buttonDisplay;
  if (dest === "signup") buttonDisplay = "Sign Up";
  if (dest === "login") buttonDisplay = "Log In";
  
  if (bgcolor === 'white') bgcolor = '$color-bg-light1';

  return ( 
    <input className={`button ${bgcolor}`} 
    id={dest} 
    value={ buttonDisplay.toUpperCase() } />
  );
}
 
export default Button;