import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { createUser } from '../actions/userAction';
import InputField from './InputField';
import Button from './Button';

const Form = ({ title }) => {
  const [ username, setUsername ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const errorLog = useSelector(state => state.errors);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(isLoggedIn) {
  //     return console.log('logged in')
  //   }
  //   console.log(errorLog);
  // })

  const handleSubmit = e => {
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

  if (title === 'Log In') {
    return (
      <>
        <h3 className="form__header">{title}</h3>
        <div className="form__error-container">
          {errorLog.map(err => <p>{err}</p>)}
        </div>
        <form className="form">
          <InputField 
            type='email' 
            label='Email' 
            updateState={setEmail} />
          <InputField 
            type='password' 
            label='Password' 
            updateState={setPassword} />
          <Button type='login' bgcolor='blue' linkTo='/' />
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
            <Alert severity="error">{err}</Alert> 
          ))}
        </div>
        <form className="form" onSubmit={handleSubmit}>
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
          <Button type='login' bgcolor='blue' linkTo='/' />
        </form>
      </>
    );
  }

}
 
export default Form;