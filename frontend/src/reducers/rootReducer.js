import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  isLoggedIn: loginReducer,
  userInfo: userReducer,
  errors: errorReducer
}); 

export default rootReducer;