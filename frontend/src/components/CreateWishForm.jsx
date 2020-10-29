import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const CreateWishForm = ({ title }) => {
  const [ wishTitle, setWishTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ regionCity , setRegionCity ] = useState('');
  const [ goalSaving, setGoalSaving ] = useState(0);
  const [ interestLevel, setInterestLevel ] = useState(0);
  const [ goalDate, setGoalDate ] = useState('');

  return (
    <>
      <h3 className="form__header">{title}</h3>
      <div className="form__error-container">
        {/* {errorLog.map(err => (
          <Alert severity="error">{err}</Alert> 
        ))} */}
      </div>
      <form className="form" onSubmit={() => console.log('hi')}>
        <InputField 
          type='text' 
          label='Title'
          size='lg-1'
          updateState={setWishTitle} />
        <InputField 
          type='text' 
          label='Description'
          size='lg-1'
          updateState={setDescription} />
        <InputField 
          type='text' 
          label='Country'
          size='lg-1'
          updateState={setCountry} />
        <InputField 
          type='text' 
          label='Region/City'
          size='lg-1'
          updateState={setRegionCity} />
        <InputField 
          type='number' 
          label='Goal Saving'
          size='lg-1'
          updateState={setGoalSaving} />
        <InputField 
          type='number' 
          label='Interest Level'
          size='lg-1'
          updateState={setInterestLevel} />
        <InputField 
          type='date' 
          label='Goal Date'
          size='lg-1'
          updateState={setGoalDate} />
        <Button type='createWish' bgcolor='blue' reg='true' />
      </form>
    </>
  );
}
 
export default CreateWishForm;