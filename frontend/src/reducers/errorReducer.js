export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const COLLECTIONS_FETCH_FAIL = 'COLLECTIONS_FETCH_FAIL';
export const WISHES_FETCH_FAIL = 'WISHES_FETCH_FAIL';
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
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer;