export const LOG_IN = 'LOG_IN';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOG_IN:
      return true;
    default:
      return state;
  }
}

export default loginReducer;