import React, { useRef, useContext, useEffect } from 'react';

const InputField = ({ type, label, currentState = '', updateState }) => {
  const inputField = useRef();
  const inputLabel = useRef();

  const addSelectedClass = () => {
    inputLabel.current.classList.add('tag-selected');
    inputLabel.current.parentNode.classList.add('container-selected');
  }

  const removeSelectedClass = () => {
    if(!inputField.current.value) {
      inputLabel.current.classList.remove('tag-selected');
      inputLabel.current.parentNode.classList.remove('container-selected');
    }
  }
  const handleInputChange = cb => {
    return e => cb(e.target.value);
  }

  return ( 
    <div>
      <input 
        type={type} 
        ref={inputField}
        onFocus={addSelectedClass}
        onBlur={removeSelectedClass}
        onChange={handleInputChange(updateState)} />
      <br />
      <label>
        <span ref={inputLabel}>{label}</span>
      </label>
    </div>
  );
}
 
export default InputField;