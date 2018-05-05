import * as types from '../constants/ActionTypes';
import * as usersApi from '../api/users';

export const fetchUsers = () => dispatch => {
  usersApi.fetchUsers().then(users => {
    dispatch({
      type: types.FETCH_USERS,
      users
    });
  });
};

export const getUsersAutocomplete = query => dispatch => {
  usersApi.searchUsers(query).then(users => {
    dispatch({
      type: types.GET_USERS_AUTOCOMPLETE,
      users: users.slice(0, 5)
    });
  });
};

export const searchUsers = query => dispatch => {
  usersApi.searchUsers(query).then(users => {
    dispatch({
      type: types.SEARCH_USERS,
      users: users
    });
  });
};

export const markUsersNextAutocomplete = usersAutocomplete => ({
  type: types.MARK_USERS_NEXT_AUTOCOMPLETE,
  usersAutocomplete
});

export const markUsersPrevAutocomplete = usersAutocomplete => ({
  type: types.MARK_USERS_PREV_AUTOCOMPLETE,
  usersAutocomplete
});
