import * as types from '../constants/ActionTypes';
import * as usersApi from '../api/users';

export const fetchUsers = () => dispatch => {
  usersApi.fetchUsers.then((users) => {
    dispatch({
      type: types.FETCH_USERS,
      users
    });
  });
};
