import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import Button from './Button';

const Form = ({ title }) => {
  const [ username, setUsername ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  // const inputField = type => {
  //   <InputField 
  //     type={type} 
  //     label={type[0].toUpperCase() + type.slice(1)}
  //     updateState={setEmail} />
  // };

  if (title === 'Log In') {
    return (
      <>
        <h3 className="form__header">{title}</h3>
        <form className="form">
          <InputField 
            type='email' 
            label='Email' 
            updateState={setEmail} />
          <InputField 
            type='password' 
            label='Password' 
            updateState={setPassword} />
          <Button type='login' bgcolor='blue' />
        </form>
      </>
    );
  }

  if (title === 'Sign Up') {
    return (
      <>
        <h3 className="form__header">{title}</h3>
        <form className="form">
          <InputField 
            type='username' 
            label='Username' 
            updateState={setUsername} />
          <InputField 
            type='firstName' 
            label='First Name' 
            updateState={setFirstName} />
          <InputField 
            type='lastName' 
            label='Last Name' 
            updateState={setLastName} />
          <InputField 
            type='email' 
            label='Email' 
            updateState={setEmail} />
          <InputField 
            type='password' 
            label='Password' 
            updateState={setPassword} />
          <InputField 
            type='password' 
            label='Confirm Password' 
            updateState={setConfirmPassword} />
          <Button type='login' bgcolor='blue' />
        </form>
      </>
    );
  }

}
 
export default Form;