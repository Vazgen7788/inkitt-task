import React from 'react';
import { connect } from 'react-redux';
import UsersTable from  '../components/UsersTable';

const MAX_COUNT_OF_USERS_TO_DISPLAY = 100;
const UsersTableContainer = props => <UsersTable {...props} />;

const mapStateToProps = state => {
  const users = state.users;

  return {
    users: users.slice(0, MAX_COUNT_OF_USERS_TO_DISPLAY)
  }
};

export default connect(mapStateToProps, {})(UsersTableContainer);
