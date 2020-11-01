import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorContainer from './ErrorContainer';
import { createUser, validateUser } from '../actions/userAction';
import InputField from './InputField';
import Button from './Button';

const Form = ({ title }) => {
  const [ username, setUsername ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const errorLog = useSelector(state => state.errors);
  const dispatch = useDispatch();

  const handleSignup = e => {
    e.preventDefault();
    const formData = {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      'profileImage': 'profimggg'
    };

    dispatch(createUser(formData));
  }

  const handleLogin = e => {
    e.preventDefault();
    const formData = {
      email,
      password
    };

    dispatch(validateUser(formData));
  }

  if (title === 'Log In') {
    return (
      <>
        <h3 className="form__header">{title}</h3>
        <div className="form__error-container">
          {errorLog.map(err => (
            <ErrorContainer>{err}</ErrorContainer> 
          ))}
        </div>
        <form className="form" onSubmit={handleLogin}>
          <InputField 
            type='email' 
            label='Email'
            currentState={email}
            updateState={setEmail} />
          <InputField 
            type='new-password' 
            label='Password'
            currentState={password}
            updateState={setPassword} />
          <Button type='login' bgcolor='blue' reg='true' />
        </form>
      </>
    );
  }

  if (title === 'Sign Up') {
    return (
      <>
        <h3 className="form__header">{title}</h3>
        <div className="form__error-container">
          {errorLog.map(err => (
            <ErrorContainer>{err}</ErrorContainer> 
          ))}
        </div>
        <form className="form" onSubmit={handleSignup}>
          <InputField 
            type='text' 
            label='Username' 
            currentState={username}
            updateState={setUsername} />
          <InputField 
            type='text' 
            label='First Name' 
            currentState={firstName}
            updateState={setFirstName} />
          <InputField 
            type='text' 
            label='Last Name' 
            currentState={lastName}
            updateState={setLastName} />
          <InputField 
            type='email' 
            label='Email' 
            currentState={email}
            updateState={setEmail} />
          <InputField 
            type='new-password' 
            label='Password' 
            currentState={password}
            updateState={setPassword} />
          <InputField 
            type='new-password' 
            label='Confirm Password' 
            currentState={confirmPassword}
            updateState={setConfirmPassword} />
          <Button type='signup' bgcolor='blue' reg='true' />
        </form>
      </>
    );
  }

}
 
export default Form;