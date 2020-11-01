import React from 'react';

const ErrorContainer = (props) => {
  return ( 
    <div className='error-container'>
        {props.children}
    </div>
  );
}
 
export default ErrorContainer;