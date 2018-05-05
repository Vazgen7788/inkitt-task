import * as types from '../constants/ActionTypes';

const MAX_RECENT_SEARCHES_COUNT = 5;

const recentUserSearches = (searches = [], action) => {
  switch (action.type) {
    case types.KEEP_USER_SEARCH:
      const alreadySearched = searches.find(item => {
        return item.text === action.search;
      });

      if (!alreadySearched && action.search.length) {
        if (searches.length === MAX_RECENT_SEARCHES_COUNT) {
          searches.pop();
        }
        return [{ active: false, text: action.search }, ...searches];
      }
      return searches;
    default:
      return searches;
  }
};

export default recentUserSearches;
