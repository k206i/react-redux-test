import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authentificationReducer from './authentification';

const rootReducer = combineReducers({
  comments: commentsReducer,
  authenticated: authentificationReducer,
});

export default rootReducer;
