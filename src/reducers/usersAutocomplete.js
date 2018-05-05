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
          return {
            text: `${user.firstName} ${user.lastName} ${user.username}`,
            active: false
          };
        });
      }
      return [];
    case types.MARK_USERS_NEXT_AUTOCOMPLETE:
    case types.MARK_USERS_PREV_AUTOCOMPLETE:
      const activeItem = action.usersAutocomplete.find(item => item.active === true);
      const items = action.usersAutocomplete;

      if (activeItem) {
        let activeIndex = items.indexOf(activeItem);
        types.MARK_USERS_NEXT_AUTOCOMPLETE === action.type ? activeIndex++ : activeIndex--;
        activeItem.active = false;

        if (items[activeIndex]) {
          items[activeIndex].active = true;
        }
      } else {
        if (types.MARK_USERS_NEXT_AUTOCOMPLETE === action.type) {
          items[0].active = true;
        } else {
          items[items.length - 1].active = true;
        }
      }

      return [...action.usersAutocomplete];
    default:
      return autocomplete;
  }
};

export default usersAutocomplete;
