import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup className="search-group">
      <InputGroup.Text className="search-icon">🔍</InputGroup.Text>
      <Form.Control
        className="search-input"
        type="text"
        placeholder="Buscar producto por nombre o descripción"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Buscar productos"
      />
      {searchTerm && (
        <button
          type="button"
          className="search-clear"
          onClick={() => setSearchTerm('')}
          aria-label="Limpiar búsqueda"
        >
          ×
        </button>
      )}
    </InputGroup>
  );
};

export default SearchBar;