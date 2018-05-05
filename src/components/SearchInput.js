import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';

const SearchInput = () => (
  <Container>
    <Row>
      <Col xs="12" className="pt-4 pb-4">
        <FormGroup className="mb-0">
          <Input type="text" name="query" placeholder="Search" />
        </FormGroup>
      </Col>
    </Row>
  </Container>
);

export default SearchInput;
