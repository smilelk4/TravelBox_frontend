import React, { useRef } from 'react';

const InputField = ({ type, label, updateState }) => {
  const inputField = useRef();
  const inputLabel = useRef();

  const handleInputChange = cb => {
    return e => cb(e.target.value);
  }

  const onInputFocus = () => {
    inputLabel.current.classList.add('tag-selected');
    inputLabel.current.parentNode.classList.add('container-selected');
  }

  const onInputBlur = () => {
    if(!inputField.current.value) {
      inputLabel.current.classList.remove('tag-selected');
      inputLabel.current.parentNode.classList.remove('container-selected');
    }
  }

  return ( 
    <div>
      <input 
        type={type} 
        ref={inputField}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={handleInputChange(updateState)} />
      <br />
      <label>
        <span ref={inputLabel}>{label}</span>
      </label>
    </div>
  );
}
 
export default InputField;