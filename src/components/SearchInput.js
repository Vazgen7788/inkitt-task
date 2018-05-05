import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import SearchInputDropdown from './SearchInputDropdown';
import * as keyboardCodes from '../constants/KeyboardNavKeyCodes';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { showAutocomplete: false };

    this.inputRef = React.createRef();
    this.inputWrapperRef = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.inputWrapperRef.current &&
      !this.inputWrapperRef.current.contains(event.target)
    ) {
      this.setState(prevState => {
        return Object.assign(prevState, {
          showAutocomplete: false
        });
      });
    }
  }

  handleFocus() {
    this.setState(prevState => {
      return Object.assign(prevState, {
        showAutocomplete: true
      });
    });
  }

  handleChange() {
    const inputValue = this.inputRef.current.value;
    this.props.getAutocomplete(inputValue);
  }

  handleKeyUp({ keyCode }) {
    const { UP, DOWN, ENTER } = keyboardCodes;
    const { markPrev, markNext, search, autocomplete } = this.props;

    switch (keyCode) {
      case UP:
        markPrev(autocomplete);
        break;
      case DOWN:
        markNext(autocomplete);
        break;
      case ENTER:
        const activeItem = autocomplete.find(item => item.active);

        if (activeItem) {
          this.inputRef.current.value = activeItem.text;
        }
        search(this.inputRef.current.value);
        document.activeElement.blur();
        break;
      default:
    }
  }

  render() {
    const { autocomplete, search } = this.props;
    const inputEl = this.inputRef.current;
    const { showAutocomplete } = this.state;

    return (
      <Container>
        <Row>
          <Col xs="12" className="pt-4 pb-4">
            <div ref={this.inputWrapperRef}>
              <FormGroup className="mb-0 search-input-container">
                <Input
                  onFocus={this.handleFocus}
                  onKeyUp={this.handleKeyUp}
                  onChange={this.handleChange}
                  innerRef={this.inputRef}
                  type="text"
                  name="query"
                  placeholder="Search"
                />

                {showAutocomplete &&
                  inputEl &&
                  inputEl.value.length === 0 && (
                    <ListGroup className="autocomplete-container">
                      <ListGroupItem className="recent-searches-note">
                        Recent Searches
                      </ListGroupItem>
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                    </ListGroup>
                  )}

                {showAutocomplete &&
                  autocomplete.length > 0 && (
                    <SearchInputDropdown items={autocomplete} search={search} />
                  )}
              </FormGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchInput;
