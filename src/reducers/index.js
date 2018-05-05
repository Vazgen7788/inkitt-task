import { combineReducers } from 'redux';
import users from './users';
import usersAutocomplete from './usersAutocomplete';

export default combineReducers({
  users,
  usersAutocomplete
});
