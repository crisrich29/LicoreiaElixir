import React from 'react';
import { Button } from 'react-bootstrap';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? 'gold' : 'outline-gold'}
          size="sm"
          onClick={() => setSelectedCategory(cat)}
          className="rounded-pill px-3 category-pill"
        >
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;