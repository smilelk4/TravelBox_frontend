// import { baseUrl } from '../../config';

export const createUser = data => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:8000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });   
    console.log('hiii', res);
  }
};