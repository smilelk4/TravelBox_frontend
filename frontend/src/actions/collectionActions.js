import { LOAD_COLLECTION } from '../reducers/collectionReducer';
import { LOAD_COLLECTIONS } from '../reducers/collectionReducer';
import { LOAD_WISHES } from '../reducers/wishReducer';
import { COLLECTIONS_FETCH_FAIL } from '../reducers/errorReducer';

export const fetchCollection = id => {
  return async dispatch => {
    const res = await fetch(`http://localhost:8000/api/collections/${id}`);

    if (res.ok) {
      let { collection } = await res.json();
      console.log('!!!!', collection)
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
        type: LOAD_COLLECTION,
        collections
      });
    }
    dispatch({ type: COLLECTIONS_FETCH_FAIL });
  }
};