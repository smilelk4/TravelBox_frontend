// import { baseUrl } from '../../config';
import { CREATE_USER } from '../reducers/userReducer';
import { SIGNUP_FAIL } from '../reducers/errorReducer';

export const createUser = data => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });   

    if(res.ok) {
      const userData = await res.json();
      const { user } = userData;
      localStorage.setItem('user-info', user);
      return dispatch({
        type: CREATE_USER,
        ...user
      });
    }

    const errorData = await res.json();
    dispatch({
      type: SIGNUP_FAIL,
      errors: errorData.errors
    })

    console.log('Create user unsuccessful.')
  }
};