export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const COLLECTIONS_FETCH_FAIL = 'COLLECTIONS_FETCH_FAIL';
export const WISHES_FETCH_FAIL = 'WISHES_FETCH_FAIL';
export const CREATE_COLLECTION_FAIL = 'CREATE_COLLECTION_FAIL';
export const EDIT_COLLECTION_FAIL = 'EDIT_COLLECTION_FAIL';
export const DELETE_COLLECTION_FAIL = 'DELETE_COLLECTION_FAIL';
export const CREATE_WISH_FAIL = 'CREATE_WISH_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case SIGNUP_FAIL:
      return action.errors;
    case LOGIN_FAIL:
      return ['Invalid login.'];
    case COLLECTIONS_FETCH_FAIL:
      return ['Could not load your collections.'];
    case WISHES_FETCH_FAIL:
      return ['Could not load your wishes.'];
    case CREATE_COLLECTION_FAIL:
      return action.errors;
    case EDIT_COLLECTION_FAIL:
      return action.errors;
    case DELETE_COLLECTION_FAIL:
      return action.errors;
    case CREATE_WISH_FAIL:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer;