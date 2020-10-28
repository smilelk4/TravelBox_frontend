import { LOAD_COLLECTIONS } from '../reducers/collectionReducer';
import { COLLECTIONS_FETCH_FAIL } from '../reducers/errorReducer';

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
}