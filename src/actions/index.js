import nprogress from 'nprogress';
import * as types from '../constants/ActionTypes';
import * as usersApi from '../api/users';

nprogress.configure({ easing: 'ease', speed: 500 });

export const fetchUsers = () => dispatch => {
  dispatch({ type: types.REQUEST_USERS });

  usersApi.fetchUsers().then(users => {
    dispatch({ type: types.RECEIVE_USERS });
    dispatch({
      type: types.FETCH_USERS,
      users
    });
  });
};

export const getUsersAutocomplete = query => dispatch => {
  nprogress.start();
  usersApi.searchUsers(query).then(users => {
    nprogress.done();
    dispatch({
      type: types.GET_USERS_AUTOCOMPLETE,
      users: users.slice(0, 5)
    });
  });
};

export const searchUsers = query => dispatch => {
  nprogress.start();
  usersApi.searchUsers(query).then(users => {
    nprogress.done();

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
