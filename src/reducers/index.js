import { combineReducers } from 'redux';
import users from './users';
import usersAutocomplete from './usersAutocomplete';
import recentUserSearches from './recentUserSearches';

export default combineReducers({
  users,
  usersAutocomplete,
  recentUserSearches
});
