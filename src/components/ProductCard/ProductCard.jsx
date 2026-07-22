import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ producto }) => {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-100 product-card-animated">
      <div className="product-card-image-wrap">
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
        {producto.destacado && <span className="product-featured">Destacado</span>}
      </div>

      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge className="category-badge">{producto.categoria}</Badge>
          <span className="product-stock">Stock {producto.stock}</span>
        </div>

        <Card.Title className="product-card-title">{producto.nombre}</Card.Title>
        <Card.Text className="product-card-description">{producto.descripcion}</Card.Text>

        <div className="mt-auto pt-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="price-tag">S/ {producto.precio.toFixed(2)}</span>
          </div>

          <Button variant="gold" className="w-100 product-card-button" onClick={() => addToCart(producto)}>
            🛒 Añadir al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;