export const ADD_TOKEN_INFO = "ADD_TOKEN_INFO";
export const DELETE_TOKEN_INFO = 'DELETE_TOKEN_INFO';

const tokenReducer = (state = '', action) => {
  switch(action.type) {
    case ADD_TOKEN_INFO:
      return action.token
    case DELETE_TOKEN_INFO:
      return '';
    default:
      return state;
  }
}

export default tokenReducer;