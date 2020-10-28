export const LOAD_COLLECTION = 'LOAD_COLLECTION';
export const LOAD_COLLECTIONS = 'LOAD_COLLECTIONS';

const collectionReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_COLLECTION:
      return [action.collection];
    case LOAD_COLLECTIONS:
      return [...action.collections];
    default:
      return state;
  }
}

export default collectionReducer;