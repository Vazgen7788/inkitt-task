import * as types from '../constants/ActionTypes';
import * as usersApi from '../api/users';

export const fetchUsers = () => dispatch => {
  usersApi.fetchUsers().then((users) => {
    dispatch({
      type: types.FETCH_USERS,
      users
    });
  });
};

export const getUsersAutocomplete = query => (dispatch, getState) => {
  const { users } = getState();

  dispatch({
    type: types.GET_USERS_AUTOCOMPLETE,
    query,
    users
  });
};

