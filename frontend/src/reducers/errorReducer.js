export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case SIGNUP_FAIL:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer;