import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.jsx';

const ProductList = ({ productos }) => {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4 product-list">
      {productos.map((producto, index) => (
        <Col key={producto.id}>
          <div className="product-list-item" style={{ '--index': index }}>
            <ProductCard producto={producto} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;