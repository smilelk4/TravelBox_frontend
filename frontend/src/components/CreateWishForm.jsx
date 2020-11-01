import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputField from './InputField';
import Button from './Button';
import ErrorContainer from './ErrorContainer';
import { createWish } from '../actions/wishActions'

const CreateWishForm = ({ title, collectionId }) => {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const date = dateNow.getDate();

  const [ wishTitle, setWishTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ regionCity , setRegionCity ] = useState('');
  const [ goalSaving, setGoalSaving ] = useState(0);
  const [ interestLevel, setInterestLevel ] = useState(0);
  const [ goalDate, setGoalDate ] = useState(`${year}-${month + 1}-${date}`);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);
  const errorLog = useSelector(state => state.errors);
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = { 
      userId,
      collectionId,
      title: wishTitle, 
      description,
      country,
      regionCity,
      goalSaving,
      interestLevel,
      goalDate
     };
    dispatch(createWish(formData, token));
  }

  return (
    <>
      <h3 className="form__header">{title}</h3>
      <div className="form__error-container">
        {errorLog.map(err => (
          <ErrorContainer>{err}</ErrorContainer> 
        ))}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <InputField 
          type='text' 
          label='Title (Required)'
          size='lg-1'
          currentState={wishTitle}
          updateState={setWishTitle} />
        <InputField 
          type='text' 
          label='Description'
          size='lg-1'
          currentState={description}
          updateState={setDescription} />
        <InputField 
          type='text' 
          label='Country'
          size='lg-1'
          currentState={country}
          updateState={setCountry} />
        <InputField 
          type='text' 
          label='Region/City'
          size='lg-1'
          currentState={regionCity}
          updateState={setRegionCity} />
        <InputField 
          type='number' 
          label='Goal Saving'
          size='lg-1'
          currentState={goalSaving}
          updateState={setGoalSaving} /> 
        <InputField 
          type='number' 
          label='Interest Level'
          size='lg-1'
          currentState={interestLevel}
          updateState={setInterestLevel} />
        <InputField 
          type='date' 
          label='Goal Date'
          size='lg-1'
          currentState={goalDate}
          updateState={setGoalDate} />
        <Button type='createWish' bgcolor='blue' reg='true' />
      </form>
    </>
  );
}
 
export default CreateWishForm;