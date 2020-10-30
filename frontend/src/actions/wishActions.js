import { LOAD_WISHES } from '../reducers/wishReducer';
import { WISHES_FETCH_FAIL, CREATE_WISH_FAIL } from '../reducers/errorReducer';
import { baseUrl } from '../config';

export const fetchdWishes = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${id}/wishes`);

    if (res.ok) {
      const { wishes } = await res.json();
      return dispatch({
        type: LOAD_WISHES,
        wishes
      });
    }
    
    dispatch({ type: WISHES_FETCH_FAIL });
  }
};


export const fetchStarredWishes = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${id}/starred-wishes`);

    if (res.ok) {
      const { wishes } = await res.json();
      return dispatch({
        type: LOAD_WISHES,
        wishes
      });
    }
    
    dispatch({ type: WISHES_FETCH_FAIL });
  }
};

export const createWish = (data, token) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/wishes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      // const collectionData = await res.json();
      window.location.href='/my-box';
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: CREATE_WISH_FAIL,
      errors: errorData.errors
    });

    console.error('Create collection unsuccessful.');
  };
}