import React from 'react';

const Button = ({ name }) => {

  const handleClick = () => {
  };

  return ( 
    <button className="button" onClick={handleClick}>{ name.toUpperCase() }</button>
  );
}
 
export default Button;