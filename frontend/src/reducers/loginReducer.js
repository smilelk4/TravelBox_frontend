export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default loginReducer;