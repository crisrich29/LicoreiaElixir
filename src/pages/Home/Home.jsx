// src/pages/Home/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100 align-items-center">
            <Col lg={7} className="text-start">
              <p className="hero-badge">Selección premium • Calidad garantizada</p>
              <h1 className="hero-title">Descubre el sabor de la exclusividad</h1>
              <p className="hero-text">
                Desde whiskies singulares hasta rones y vinos de colección, cada botella está elegida para elevar tus celebraciones.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button as={Link} to="/catalogo" variant="gold" size="lg">
                  Ver catálogo
                </Button>
                <Button as={Link} to="/nosotros" variant="outline-light" size="lg">
                  Conócenos
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <p className="section-badge">Experiencia premium</p>
              <h2 className="section-title">Una propuesta elegante para cada ocasión</h2>
              <p className="section-subtitle">
                Discover the best selection of premium spirits with a refined shopping experience built around quality, trust, and taste.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <div className="info-card text-center h-100">
                <div className="info-card-icon">🥃</div>
                <h4>Catálogo exclusivo</h4>
                <p className="mb-0" style={{ color: 'var(--color-gris)' }}>Marcas reconocidas, licores premium y opciones para todo tipo de ocasión.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card text-center h-100">
                <div className="info-card-icon">✨</div>
                <h4>Asesoría personalizada</h4>
                <p className="mb-0" style={{ color: 'var(--color-gris)' }}>Nuestro equipo te ayuda a elegir el producto perfecto para cada momento.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-card text-center h-100">
                <div className="info-card-icon">🚚</div>
                <h4>Entrega confiable</h4>
                <p className="mb-0" style={{ color: 'var(--color-gris)' }}>Recibe tus bebidas con la seguridad y el cuidado que mereces.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;