// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-elixir">
      <Container>
        <Row>
          {/* Columna 1: Sobre nosotros */}
          <Col md={4} className="mb-4">
            <h5>Licorería Elixir</h5>
            <p className="footer-description">
              Ofrecemos las mejores bebidas nacionales e importadas. Calidad y excelencia en cada botella para sus momentos especiales.
            </p>
          </Col>

          {/* Columna 2: Navegación rápida */}
          <Col md={4} className="mb-4">
            <h5>Navegación</h5>
            <ul>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/catalogo">Catálogo</NavLink></li>
              <li><NavLink to="/nosotros">Nosotros</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </Col>

          {/* Columna 3: Contacto */}
          <Col md={4} className="mb-4">
            <h5>Contacto</h5>
            <ul className="footer-contact-list">
              <li>📍 Av. Premium 123, Lima</li>
              <li>📞 +51 999 888 777</li>
              <li>✉️ contacto@licoreriaelixir.com</li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Licorería Elixir. Todos los derechos reservados. Proyecto Educativo.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;