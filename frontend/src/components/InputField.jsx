import React from 'react';

const InputField = ({ type, label, id, updateState }) => {
  return ( 
    <div>
      <input 
        type={type} 
        className={`form__input-${id}`} 
        onChange={e => updateState(e.target.value)} />
      <br />
      <label><span>{label}</span></label>
    </div>
  );
}
 
export default InputField;