import { LOAD_WISHES, LOAD_WISH } from '../reducers/wishReducer';
import { WISHES_FETCH_FAIL, CREATE_WISH_FAIL, EDIT_WISH_FAIL, DELETE_WISH_FAIL } from '../reducers/errorReducer';
import { baseUrl } from '../config';

export const fetchdWishes = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${id}/wishes`);

    if (res.ok) {
      let { wishes } = await res.json();
      return dispatch({
        type: LOAD_WISHES,
        wishes
      });
    }
    
    dispatch({ type: WISHES_FETCH_FAIL });
  }
};

export const fetchWish = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/wishes/${id}`);

    if (res.ok) {
      const { wish } = await res.json();
      return dispatch({
        type: LOAD_WISH,
        wish
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
      },
      body: data
    });

    if (res.ok) {
      const data = await res.json();
      window.location.href=`/my-collections/${data.collectionId}`;
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

export const editWish = (data, token, wishId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/wishes/${wishId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: data
    });

    if (res.ok) {
      debugger;
      const data = await res.json();
      window.location.href=`/my-collections/${data.collectionId}`;
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: EDIT_WISH_FAIL,
      errors: errorData.errors
    });

    console.error('Editing wish unsuccessful.');
  };
}

export const deleteWish = (token, wishId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/wishes/${wishId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    if (res.ok) {
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: DELETE_WISH_FAIL,
      errors: errorData.errors
    });

    console.error('Deleting wish unsuccessful.');
  };
}

export const toggleStar = (token, wishId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/wishes/${wishId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // body: JSON.stringify(data)
    });

    if (res.ok) {
      const wish = await res.json();
      // window.location.href=`/my-wishes/${wishId}`;
      // window.location.reload();
      dispatch({
        type: LOAD_WISH,
        wish
      });
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: EDIT_WISH_FAIL,
      errors: errorData.errors
    });

    console.error('Editing wish unsuccessful.');
  };
}