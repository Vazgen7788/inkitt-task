import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const list = (users = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return [...users, ...action.users];
    case types.SEARCH_USERS:
      return [...action.users];
    default:
      return users;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
      return true;
    case types.RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};

export const getUsers = state => state.users.list;
export const getIsFetching = state => state.users.isFetching;

export default combineReducers({
  list,
  isFetching
});
