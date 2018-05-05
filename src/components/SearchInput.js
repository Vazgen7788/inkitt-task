import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';
import SearchInputDropdown from './SearchInputDropdown';
import * as keyboardCodes from '../constants/KeyboardNavKeyCodes';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = { showRecentSearches: false };
    this.inputRef = React.createRef();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
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

  handleKeyUp({ keyCode }) {
    const { UP, DOWN, ENTER } = keyboardCodes;

    switch(keyCode) {
      case UP:
        this.props.markPrev(this.props.autocomplete);
        break;
      case DOWN:
        this.props.markNext(this.props.autocomplete);
        break;
      case ENTER:
        console.log('enter');
        break;
      default:
    }
  }

  render() {
    const { autocomplete } = this.props;
    const inputEl = this.inputRef.current;
    const { showRecentSearches } = this.state;

    return (
      <Container>
        <Row>
          <Col xs="12" className="pt-4 pb-4">
            <FormGroup className="mb-0 search-input-container">
              <Input
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                innerRef={this.inputRef}
                type="text"
                name="query"
                placeholder="Search"
              />

              {
                showRecentSearches && inputEl && inputEl.value.length === 0 &&
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
