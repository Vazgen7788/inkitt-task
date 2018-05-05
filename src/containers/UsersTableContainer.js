import React from 'react';
import { connect } from 'react-redux';
import UsersTable from '../components/UsersTable';

const UsersTableContainer = props => <UsersTable {...props} />;

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, {})(UsersTableContainer);
