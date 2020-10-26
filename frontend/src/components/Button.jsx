import React from 'react';

const Button = ({ dest }) => {
  let buttonDisplay;
  if (dest === "signup") buttonDisplay = "Sign Up";
  if (dest === "login") buttonDisplay = "Log In";

  return ( 
    <div className="button" id={dest}>
      { buttonDisplay.toUpperCase() }
    </div>
  );
}
 
export default Button;