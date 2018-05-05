import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import SearchInputDropdown from './SearchInputDropdown';
import * as keyboardCodes from '../constants/KeyboardNavKeyCodes';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: true,
      showAutocomplete: false
    };

    this.inputRef = React.createRef();
    this.inputWrapperRef = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.search = this.search.bind(this);
    this.toggleRecent = this.toggleRecent.bind(this);
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

  toggleAutocomplete(open = true) {
    this.setState(prevState => {
      return Object.assign(prevState, {
        showAutocomplete: open
      });
    });
  }

  open() {
    this.toggleAutocomplete();
  }

  close() {
    this.toggleAutocomplete(false);
  }

  handleClickOutside(event) {
    if (
      this.inputWrapperRef.current &&
      !this.inputWrapperRef.current.contains(event.target)
    ) {
      this.close();
    }
  }

  toggleRecent({ open }) {
    if (open) {
      this.props.showRecent(this.props.recentSearches);
    }

    this.setState(prevState => {
      return Object.assign(prevState, {
        recent: open
      });
    });
  }

  handleChange() {
    const inputValue = this.inputRef.current.value;

    if (inputValue.length > 0) {
      this.toggleRecent({ open: false });
      this.props.getAutocomplete(inputValue);
    } else {
      this.toggleRecent({ open: true });
    }
  }

  handleKeyUp({ keyCode }) {
    const { UP, DOWN, ENTER } = keyboardCodes;
    const { markPrev, markNext, autocomplete } = this.props;

    switch (keyCode) {
      case UP:
        markPrev(autocomplete);
        break;
      case DOWN:
        markNext(autocomplete);
        break;
      case ENTER:
        this.search(this.inputRef.current.value);
        break;
      default:
    }
  }

  search(query) {
    const { search, autocomplete } = this.props;
    const activeItem = autocomplete.find(item => item.active);

    this.inputRef.current.value = activeItem ? activeItem.text : query;
    search(this.inputRef.current.value);
    this.close();
    document.activeElement.blur();
  }

  render() {
    const { autocomplete } = this.props;
    const { showAutocomplete, recent } = this.state;

    return (
      <Container>
        <Row>
          <Col xs="12" className="pt-4 pb-4">
            <div ref={this.inputWrapperRef}>
              <FormGroup className="mb-0 search-input-container">
                <Input
                  onFocus={this.open}
                  onKeyUp={this.handleKeyUp}
                  onChange={this.handleChange}
                  innerRef={this.inputRef}
                  type="text"
                  name="query"
                  placeholder="Search"
                />

                {showAutocomplete && (
                  <SearchInputDropdown
                    recent={recent}
                    items={autocomplete}
                    search={this.search}
                  />
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
