import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SearchInputDropdown = ({ items, recent, search }) => (
  <ListGroup className="autocomplete-container">
    {recent && (
      <ListGroupItem className="recent-searches-note">
        Recent Searches
      </ListGroupItem>
    )}
    {items.map((item, index) => {
      return (
        <ListGroupItem
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

export default SearchInputDropdown;
