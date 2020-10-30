import { LOAD_COLLECTION } from '../reducers/collectionReducer';
import { LOAD_COLLECTIONS } from '../reducers/collectionReducer';
import { LOAD_WISHES } from '../reducers/wishReducer';
import { COLLECTIONS_FETCH_FAIL, CREATE_COLLECTION_FAIL } from '../reducers/errorReducer';

export const fetchCollection = id => {
  return async dispatch => {
    const res = await fetch(`http://localhost:8000/api/collections/${id}`);

    if (res.ok) {
      let { collection } = await res.json();
      dispatch({
        type: LOAD_WISHES,
        wishes: collection.MyWishes
      });

      delete collection.MyWishes
      return dispatch({
        type: LOAD_COLLECTION,
        collection
      });
    }
    dispatch({ type: COLLECTIONS_FETCH_FAIL });
  }
};

export const fetchCollections = id => {
  return async dispatch => {
    const res = await fetch(`http://localhost:8000/api/users/${id}/collections`);

    if (res.ok) {
      const { collections } = await res.json();
      return dispatch({
        type: LOAD_COLLECTIONS,
        collections
      });
    }
    dispatch({ type: COLLECTIONS_FETCH_FAIL });
  }
};

export const createCollection = (data, token) => {
  return async dispatch => {
    const res = await fetch('http://localhost:8000/api/collections', {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const collectionData = await res.json();
      window.location.href='/my-box';
      return;
    }

    const errorData = await res.json();
    dispatch({
      type: CREATE_COLLECTION_FAIL,
      errors: errorData.errors
    });

    console.error('Create collection unsuccessful.');

  };
}