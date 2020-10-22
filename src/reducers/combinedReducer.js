import { combineReducers } from 'redux';
import addReducer from './addReducer';

const combinedReducer = combinedReducers({
  add: addReducer;
}); 

export default combinedReducer;