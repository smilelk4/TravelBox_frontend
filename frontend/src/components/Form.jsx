import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import Button from './Button';

const Form = ({ title }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <h3 className="form__header">{title}</h3>
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
        <Button type='login' bgcolor='blue' />
      </form>
    </>
  );
}
 
export default Form;