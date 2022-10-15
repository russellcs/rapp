import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Form.Control
      onInput={(e) => {
        console.log(e.target.value);
        setSearchTerm(e.target.value);
      }}
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
