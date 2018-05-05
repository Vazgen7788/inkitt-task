import React from 'react';
import { Container, Col, Table } from 'reactstrap';

const UsersTable = () => (
  <Container fluid >
    <Col xs="12">
      <Table hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Container>
);

export default UsersTable;
