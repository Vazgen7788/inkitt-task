import * as types from '../constants/ActionTypes';

const users = (users = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return [...users, ...action.users];
    case types.SEARCH_USERS:
      return [...action.users];
    default:
      return users;
  }
};

export default users;
