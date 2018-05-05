import React from 'react';
import { Container, Col, Table } from 'reactstrap';

const UsersTable = ({ users }) => (
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
          {users.map((user, index) => {
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
