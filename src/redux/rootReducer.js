import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { likesReducer } from './likesReducer';
import { inputReducer } from './inputReducer';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
  appReducer,
  likesReducer,
  inputReducer,
  commentsReducer,
});
