import React from 'react';
import { Container, Col, Table } from 'reactstrap';

const TablePlaceholder = ({ rowsCount = 20 }) => {
  const rows = [];
  while (rowsCount--) {
    rows.push(
      <tr key={rowsCount}>
        <th className="animated-background" />
        <td className="animated-background" />
        <td className="animated-background" />
        <td className="animated-background" />
      </tr>
    );
  }
  return rows;
};

const UsersTable = ({ users, isFetching }) => (
  <Container fluid>
    <Col xs="12">
      <Table className="bg-white" hover bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {isFetching && <TablePlaceholder />}
          {!isFetching &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Col>
  </Container>
);

export default UsersTable;
