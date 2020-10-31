import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWish, editWish } from '../actions/wishActions';
import InputField from './InputField';
import Button from './Button';
import Alert from '@material-ui/lab/Alert';

const EditWishForm = (props, { title }) => {
  const [ wishTitle, setWishTitle ] = useState('');
  const [ collectionId, setCollectionId ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ regionCity , setRegionCity ] = useState('');
  const [ goalSaving, setGoalSaving ] = useState(0);
  const [ interestLevel, setInterestLevel ] = useState(0);
  const [ goalDate, setGoalDate ] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const userId = useSelector(state => state.userInfo.id);
  const errorLog = useSelector(state => state.errors);
  const wish = useSelector(state => state.wishes[0]);
  
  useEffect(() => {
    dispatch(fetchWish(props.match.params.id));
  }, [props.match.params.id]);
  
  useEffect(() => {
    if (wish) {
      const convertedDate = new Date(wish.goalDate)
      const year = convertedDate.getFullYear();
      const month = convertedDate.getMonth();
      const date = convertedDate.getDate();

      setWishTitle(wish.title);
      setCollectionId(wish.collectionId);
      setDescription(wish.description)
      setCountry(wish.country);
      setRegionCity(wish.regionCity);
      setGoalSaving(wish.goalSaving);
      setInterestLevel(wish.interestLevel);
      setGoalDate(`${year}-${month + 1}-${date}`);

    }
  }, [wish]);

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
      goalDate,
      starred: false,
      accomplished: false
     };
    dispatch(editWish(formData, token, wish.id));
  }
  
  if (wish) {
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
          type='text' 
          label='Title'
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
          <Button type='editWish' bgcolor='blue' reg='true'/>
        </form>
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default EditWishForm;