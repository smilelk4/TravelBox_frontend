import React, { useState, useRef } from 'react';

const InputField = ({ type, label, id, updateState }) => {
  const inputField = useRef();
  const inputLabel = useRef();

  const [ inputIsSelected, setInputIsSelected ] = useState(false);

  const handleInputChange = cb => {
    return e => cb(e.target.value);
  }

  const onInputFocus = e => {
    inputLabel.current.classList.add('selected');
    inputLabel.current.parentNode.classList.add('select');
  }

  const onInputBlur = e => {
    if(!inputField.current.value) {
      inputLabel.current.classList.remove('selected');
      inputLabel.current.parentNode.classList.remove('select');
    }
  }

  return ( 
    <div>
      <input 
        type={type} 
        className={'form__input'}
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