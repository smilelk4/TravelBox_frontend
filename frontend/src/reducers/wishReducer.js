export const LOAD_WISHES = 'LOAD_WISHES';

const wishReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_WISHES:
      return [...action.wishes];
    default:
      return state;
  }
}

export default wishReducer;