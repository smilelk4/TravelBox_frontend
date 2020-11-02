import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWish, editWish } from '../actions/wishActions';
import InputField from './InputField';
import Button from './Button';
import ErrorContainer from './ErrorContainer';
import dateDisplay from '../utils/date-converter';

const EditWishForm = (props) => {
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
  const [ image, setImage ] = useState('');
  
  useEffect(() => {
    dispatch(fetchWish(props.match.params.id));
  }, [props.match.params.id, dispatch]);
  
  useEffect(() => {
    if (wish) {
      setWishTitle(wish.title);
      setCollectionId(wish.collectionId);
      setDescription(wish.description)
      setCountry(wish.country);
      setRegionCity(wish.regionCity);
      setGoalSaving(wish.goalSaving);
      setInterestLevel(wish.interestLevel);
      setGoalDate(dateDisplay(wish.goalDate));
    }
  }, [wish]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', userId);
    data.append('collectionId', collectionId);
    data.append('title', wishTitle);
    data.append('description', description);
    data.append('country', country);
    data.append('regionCity', regionCity);
    data.append('goalSaving', goalSaving);
    data.append('interestLevel', interestLevel);
    data.append('goalDate', goalDate);
    data.append('file', image);
    dispatch(editWish(data, token, wish.id));

    //   const formData = { 
    //   userId,
    //   collectionId,
    //   title: wishTitle, 
    //   description,
    //   country,
    //   regionCity,
    //   goalSaving,
    //   interestLevel,
    //   goalDate,
    //   starred: false,
    //   accomplished: false
    //  };
    // dispatch(editWish(formData, token, wish.id));
  }
  
  if (wish) {
    return (
      <>
        <h3 className="form__header">{props.title}</h3>
        <div className="form__error-container">
          {errorLog.map(err => (
            <ErrorContainer key={err}>{err}</ErrorContainer> 
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
          <input
          type="file"
          placeholder="Upload an image"
          onChange={e => setImage(e.target.files[0])} 
          />
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