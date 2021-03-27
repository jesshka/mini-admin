// Libraries
import { combineReducers } from 'redux';
// Reducers
import location from '../reducers/Location/LocationReducer';
import user from '../reducers/User/UserReducer';

export default combineReducers<RootState>({
  location,
  user,
});
