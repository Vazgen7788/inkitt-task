import * as types from '../constants/ActionTypes';
import FuzzySearch from 'fuzzy-search';

const usersAutocomplete = (autocomplete = [], action) => {
  switch (action.type) {
    case types.GET_USERS_AUTOCOMPLETE:
      if (action.query.length) {
        const users = action.users;
        const searcher = new FuzzySearch(users, ['firstName', 'lastName', 'username'], {
          caseSensitive: false,
          sort: true
        });
        const result = searcher.search(action.query);

        return result.slice(0, 4).map((user) => {
          return `${user.firstName} ${user.lastName} ${user.username}`;
        });
      }
      return [];
    default:
      return autocomplete;
  }
};

export default usersAutocomplete;
