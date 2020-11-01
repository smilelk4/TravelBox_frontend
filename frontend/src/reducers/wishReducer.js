export const LOAD_WISH = 'LOAD_WISH';
export const LOAD_WISHES = 'LOAD_WISHES';
export const DELETE_WISHES = 'DELETE_WISHES';

const wishReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_WISH:
      return [action.wish];
    case LOAD_WISHES:
      return [...action.wishes];
    case DELETE_WISHES:
      return [];
    default:
      return state;
  }
}

export default wishReducer;