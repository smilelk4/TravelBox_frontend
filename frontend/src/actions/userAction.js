// import { baseUrl } from '../../config';
import { CREATE_USER } from '../reducers/userReducer';

export const createUser = data => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
    console.log('Create user unsuccessful.')
  }
};