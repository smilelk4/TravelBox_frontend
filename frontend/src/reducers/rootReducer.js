import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import collectionReducer from './collectionReducer';
import wishReducer from './wishReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  isLoggedIn: loginReducer,
  userInfo: userReducer,
  collections: collectionReducer,
  wishes: wishReducer,
  errors: errorReducer
}); 

export default rootReducer;