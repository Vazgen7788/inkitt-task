import React from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import {
  getUsersAutocomplete,
  markUsersNextAutocomplete,
  markUsersPrevAutocomplete,
  searchUsers,
  showRecentUserSearches
} from '../actions';

const UsersSearchInputContainer = props => <SearchInput {...props} />;

const mapStateToProps = state => {
  return {
    autocomplete: state.usersAutocomplete,
    recentSearches: state.recentUserSearches
  };
};

export default connect(mapStateToProps, {
  getAutocomplete: getUsersAutocomplete,
  markNext: markUsersNextAutocomplete,
  markPrev: markUsersPrevAutocomplete,
  search: searchUsers,
  showRecent: showRecentUserSearches
})(UsersSearchInputContainer);
