import { combineReducers } from 'redux';
import todos from './todos';
import visibilytyFilter from './visibilytyFilter';
import fetchFile from './fetchFile';

export default combineReducers({
  todos,
  visibilytyFilter,
  fetchFile
});