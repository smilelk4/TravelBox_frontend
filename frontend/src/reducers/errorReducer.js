export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case SIGNUP_FAIL:
      return action.errors;
    default:
      return state;
  }
}

export default errorReducer;