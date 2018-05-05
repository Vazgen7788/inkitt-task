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

    dispatch({
      type: types.RESET_USERS_AUTOCOMPLETE_ACTIVE_ITEMS
    });

    if (users.length) {
      dispatch({
        type: types.KEEP_USER_SEARCH,
        search: query
      });
    }
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

export const showRecentUserSearches = usersAutocomplete => ({
  type: types.SET_USERS_AUTOCOMPLETE,
  usersAutocomplete
});
