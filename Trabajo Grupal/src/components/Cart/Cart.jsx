// src/components/Cart/Cart.jsx
import React from 'react';
import { Offcanvas, Button, Stack } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem.jsx';

const Cart = ({ show, handleClose }) => {
  const { cart, removeFromCart, clearCart, subtotal, igv, total, totalItems } = useCart();

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Este flujo simula el proceso de pago.');
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-elixir">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="cart-title">
          🥃 Mi Carrito ({totalItems})
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🧺</div>
            <h3>Tu carrito está vacío</h3>
            <p>Explora el catálogo y agrega tus bebidas favoritas para comenzar tu compra.</p>
            <Button variant="gold" onClick={handleClose}>
              Ver catálogo
            </Button>
          </div>
        ) : (
          <>
            <div className="cart-summary-pill">
              <span>{totalItems} artículo{totalItems > 1 ? 's' : ''}</span>
              <span>Envío gratis</span>
            </div>

            <Stack className="flex-grow-1 overflow-auto mt-3">
              {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
            </Stack>

            <div className="cart-summary rounded mt-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>S/ {subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>IGV (18%):</span>
                <span>S/ {igv.toFixed(2)}</span>
              </div>
              <hr style={{ borderColor: 'var(--color-dorado)' }} />
              <div className="d-flex justify-content-between mb-3">
                <strong style={{ color: 'var(--color-dorado)' }}>Total:</strong>
                <strong style={{ color: 'var(--color-dorado)' }}>S/ {total.toFixed(2)}</strong>
              </div>

              <Button variant="gold" className="w-100 mb-2" size="lg" onClick={handleCheckout}>
                Proceder al Pago
              </Button>
              <Button variant="outline-danger" className="w-100" onClick={clearCart}>
                Vaciar Carrito
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;