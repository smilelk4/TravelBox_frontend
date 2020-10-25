import React from 'react';

const Modal = ({ blockElem, modalStatus }) => {
  return ( 
    <>
      <div className={`${blockElem}--${modalStatus}`}>
        
      </div>
    </>
  );
}
 
export default Modal;