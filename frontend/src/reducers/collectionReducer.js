export const LOAD_COLLECTIONS = 'LOAD_COLLECTIONS';

const collectionReducer = (state = [], action) => {
  console.log('HIHIIII')
  switch(action.type) {
    case LOAD_COLLECTIONS:
      return [...action.collections];
    default:
      return state;
  }
}

export default collectionReducer;