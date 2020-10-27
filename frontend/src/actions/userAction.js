// import { baseUrl } from '../../config';
import { CREATE_USER } from '../reducers/userReducer';
import { LOG_IN } from '../reducers/loginReducer';
import { SIGNUP_FAIL, CLEAR_ERRORS } from '../reducers/errorReducer';

export const createUser = data => {
  return async dispatch => {
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
      const { token, user } = userData;
      localStorage.setItem('user-info', JSON.stringify({
        token,
        user: {
          id: user.id
        }
      }));

      dispatch({ type: LOG_IN });
      dispatch({ type: CLEAR_ERRORS });
      return dispatch({ type: CREATE_USER, ...userData});
    }

    const errorData = await res.json();
    dispatch({
      type: SIGNUP_FAIL,
      errors: errorData.errors
    })

    console.log('Create user unsuccessful.');
  }
};