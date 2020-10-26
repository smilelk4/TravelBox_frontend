import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const Form = props => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return ( 
    <form className="form">
      <InputField 
        type='email' 
        label='Email' 
        id='email'
        updateState={setEmail} />
      <InputField 
        type='password' 
        label='Password' 
        id='password'
        updateState={setPassword} />
    </form>
  );
}
 
export default Form;