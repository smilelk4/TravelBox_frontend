// import { baseUrl } from '../../config';
import { GENERATE_USER_INFO } from '../reducers/userReducer';
import { LOG_IN } from '../reducers/loginReducer';
import { SIGNUP_FAIL, LOGIN_FAIL, CLEAR_ERRORS } from '../reducers/errorReducer';

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
      return dispatch({ type: GENERATE_USER_INFO, ...userData});
    }

    const errorData = await res.json();
    dispatch({
      type: SIGNUP_FAIL,
      errors: errorData.errors
    });

    console.log('Create user unsuccessful.');
  }
};

export const validateUser = data => {
  return async dispatch => {
    const res = await fetch('http://localhost:8000/api/users/auth', {
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
      return dispatch({ type: GENERATE_USER_INFO, ...userData});
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

export const restoreUserStore = token => {
  return async dispatch => {
    const res = await fetch('http://localhost:8000/api/users/token', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      const userData = await res.json();
      
      dispatch({ type: LOG_IN });
      dispatch({ type: CLEAR_ERRORS });
      return dispatch({ type: GENERATE_USER_INFO, token, user: userData });
    }
  };
};