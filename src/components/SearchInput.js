import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';
import SearchInputDropdown from './SearchInputDropdown';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = { showRecentSearches: false };
    this.inputRef = React.createRef();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus() {
    this.setState(prevState => {
      return Object.assign(prevState, {
        showRecentSearches: true
      });
    });
  }

  handleBlur() {
    this.setState(prevState => {
      return Object.assign(prevState, {
        showRecentSearches: false
      });
    });
  }

  handleChange() {
    const inputValue = this.inputRef.current.value;
    this.props.getAutocomplete(inputValue);
  }

  render() {
    const { autocomplete } = this.props;
    const inputEl = this.inputRef.current;

    return (
      <Container>
        <Row>
          <Col xs="12" className="pt-4 pb-4">
            <FormGroup className="mb-0 search-input-container">
              <Input
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                innerRef={this.inputRef}
                type="text"
                name="query"
                placeholder="Search"
              />

              {
                inputEl && inputEl.value.length === 0 &&
                <ListGroup className="autocomplete-container">
                  <ListGroupItem className="recent-searches-note">Recent Searches</ListGroupItem>
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>
              }

              {autocomplete.length > 0 && <SearchInputDropdown items={autocomplete} />}

            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchInput;
