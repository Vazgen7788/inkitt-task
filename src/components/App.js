import React from 'react'
import '../styles/app.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Row, Col, FormGroup, Input, Table } from 'reactstrap';

const App = () => (
  <div>

  	<Navbar color="dark" light expand="md">
      <NavbarBrand className="text-white">Vazgen</NavbarBrand>
    </Navbar>

    <Container>
      <Row>
        <Col xs="12" className="pt-4 pb-4">
          <FormGroup className="mb-0">
            <Input type="email" name="email" placeholder="Search" />
          </FormGroup>
        </Col>
      </Row>
    </Container>

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
  </div>
)

export default App;
