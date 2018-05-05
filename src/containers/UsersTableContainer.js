import React from 'react';
import { connect } from 'react-redux';
import UsersTable from '../components/UsersTable';

const UsersTableContainer = props => <UsersTable {...props} />;

const mapStateToProps = ({ users: { list, isFetching } }) => {
  return {
    users: list,
    isFetching
  };
};

export default connect(mapStateToProps, {})(UsersTableContainer);
