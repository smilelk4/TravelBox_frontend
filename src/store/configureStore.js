import { createStore } from 'redux';
import combinedReducer from '../reducers/combinedReducer';

const configureStore = () => {
  return createStore(combinedReducer);
};

export default configureStore;