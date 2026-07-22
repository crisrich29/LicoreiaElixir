// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge, Toast, ToastContainer } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';

const NavbarElixir = () => {
  const [showCart, setShowCart] = useState(false); // Estado para abrir/cerrar Offcanvas
  const { totalItems, showToast, toastMessage } = useCart(); // Datos del contexto

  const handleOpenCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="navbar-elixir">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            🥃 Licorería Elixir
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
          
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center" onClick={handleOpenCart} role="button">
              <div className="cart-icon">
                🛒
                {/* Solo muestra el Badge si hay items */}
                {totalItems > 0 && (
                  <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </Badge>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Componente Offcanvas del Carrito */}
      <Cart show={showCart} handleClose={handleCloseCart} />

      {/* Toast Global para notificaciones */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1056 }}>
        <Toast show={showToast} className="toast-elixir">
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default NavbarElixir;