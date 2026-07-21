// src/components/CartItem/CartItem.jsx
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <Row className="align-items-center g-2">
        <Col xs={3}>
          <img src={item.imagen} alt={item.nombre} className="cart-item-img w-100" />
        </Col>
        <Col xs={6}>
          <h6 className="mb-1 cart-item-title">{item.nombre}</h6>
          <div className="cart-item-meta">Cantidad: {item.cantidad}</div>
          <div className="cart-item-price">S/ {(item.precio * item.cantidad).toFixed(2)}</div>
        </Col>
        <Col xs={3} className="text-end">
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            className="cart-remove-btn"
          >
            🗑️
          </Button>
        </Col>
      </Row>
    </div>
  );
}