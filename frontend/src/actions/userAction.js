// import { baseUrl } from '../../config';
import { GENERATE_USER_INFO } from '../reducers/userReducer';
import { LOG_IN } from '../reducers/loginReducer';
import { SIGNUP_FAIL, LOGIN_FAIL, CLEAR_ERRORS } from '../reducers/errorReducer';
import { ADD_TOKEN_INFO } from '../reducers/tokenReducer';
import { baseUrl } from '../config';

export const createUser = data => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users`, {
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

      dispatch({ type: GENERATE_USER_INFO, user: {...user}});
      dispatch({ type: ADD_TOKEN_INFO, token });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOG_IN });
      window.location.href='/my-box'
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: SIGNUP_FAIL,
      errors: errorData.errors
    });

    console.error('Create user unsuccessful.');
  }
};

export const validateUser = data => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/auth`, {
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
  
      dispatch({ type: GENERATE_USER_INFO, user: {...user}});
      dispatch({ type: ADD_TOKEN_INFO, token });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOG_IN });
      window.location.href='/my-box';
      return;
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

export const restoreUserStore = token => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      const userData = await res.json();
      
      dispatch({ type: GENERATE_USER_INFO, user: userData });
      dispatch({ type: ADD_TOKEN_INFO, token });
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: LOG_IN });
      return;
    }
  };
};