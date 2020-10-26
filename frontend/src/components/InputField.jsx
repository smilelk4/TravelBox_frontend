import React, { useRef } from 'react';

const InputField = ({ type, label, id, updateState }) => {
  const inputField = useRef(null);
  const inputLabel = useRef(null);

  const handleInputChange = cb => {
    return e => cb(e.target.value);
  }

  const onInputFocus = e => {
    inputLabel.current.classList.add('selected');
  }

  const onInputBlur = e => {
    if(!inputField.current.value) {
      inputLabel.current.classList.remove('selected');
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
      <label id={'form__label'}>
        <span ref={inputLabel}>{label}</span>
      </label>
    </div>
  );
}
 
export default InputField;