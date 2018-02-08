import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authentificationReducer from './authentification';
import usersReducer from './users';

const rootReducer = combineReducers({
  comments: commentsReducer,
  authentificated: authentificationReducer,
  users: usersReducer,
});

export default rootReducer;
