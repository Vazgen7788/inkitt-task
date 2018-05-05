import React from 'react';
import { connect } from 'react-redux';
import SearchInput from  '../components/SearchInput';
import { getUsersAutocomplete } from '../actions';

const UsersSearchInputContainer = props => <SearchInput {...props} />;

const mapStateToProps = state => {
  return {
    autocomplete: state.usersAutocomplete
  }
};

export default connect(mapStateToProps, {
  getAutocomplete: getUsersAutocomplete
})(UsersSearchInputContainer);
