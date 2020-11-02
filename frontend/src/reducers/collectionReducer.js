export const LOAD_COLLECTION = 'LOAD_COLLECTION';
export const LOAD_COLLECTIONS = 'LOAD_COLLECTIONS';
export const DELETE_COLLECTIONS = 'DELETE_COLLECTIONS';

const collectionReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_COLLECTION:
      return [action.collection];
    case LOAD_COLLECTIONS:
      return [...action.collections.reverse()];
    case DELETE_COLLECTIONS:
      return [];
    default:
      return state;
  }
}

export default collectionReducer;