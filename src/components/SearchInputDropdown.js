import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SearchInputDropdown = ({ items, recent, search }) => {
  if (items.length) {
    return (
      <ListGroup className="autocomplete-container">
        {recent && (
          <ListGroupItem className="recent-searches-note">
            Recent Searches
          </ListGroupItem>
        )}
        {items.map((item, index) => {
          return (
            <ListGroupItem
              tag="a"
              href="#"
              action
              onClick={() => search(item.text)}
              active={item.active}
              key={index}
            >
              {item.text}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  } else {
    return null;
  }
};

export default SearchInputDropdown;
