// src/pages/Nosotros/Nosotros.jsx
import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Nosotros = () => {
  return (
    <Container className="mt-5 pt-4 pb-5">
      <section className="about-hero">
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p className="section-badge">Sobre nosotros</p>
            <h1 className="section-title mb-3">Una historia de sabor, criterio y excelencia</h1>
            <p style={{ color: 'var(--color-gris)', fontSize: '1.05rem', maxWidth: '680px' }}>
              Desde nuestros inicios, hemos trabajado para reunir marcas excepcionales, experiencias memorables y un servicio que convierte cada compra en un momento especial.
            </p>
            <div className="about-highlights mt-4">
              <span className="about-pill">+20 años de trayectoria</span>
              <span className="about-pill">Selección premium</span>
              <span className="about-pill">Asesoría experta</span>
            </div>
          </Col>

          <Col lg={5}>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-dorado)' }}>¿Por qué elegirnos?</h4>
              <ul className="about-list mt-3">
                <li>Productos auténticos y cuidadosamente seleccionados.</li>
                <li>Recomendaciones personalizadas para cada ocasión.</li>
                <li>Atención cercana y un servicio de alta calidad.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section className="section-shell">
        <Row className="g-4 mb-4">
          <Col md={4}>
            <div className="info-card text-center h-100">
              <div className="info-card-icon">🍷</div>
              <h4>Tradición</h4>
              <p style={{ color: 'var(--color-gris)' }}>Más de 20 años seleccionando las mejores marcas nacionales e importadas para nuestros clientes exigentes.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card text-center h-100">
              <div className="info-card-icon">🌍</div>
              <h4>Origen</h4>
              <p style={{ color: 'var(--color-gris)' }}>Fundada en el corazón de la ciudad, empezamos como una pequeña botica de licores y hoy somos referente premium.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card text-center h-100">
              <div className="info-card-icon">🤝</div>
              <h4>Compromiso</h4>
              <p style={{ color: 'var(--color-gris)' }}>Asesoramiento personalizado y garantía de autenticidad en cada botella que sale de nuestras manos.</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="section-shell pt-0">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center mb-4">Identidad Corporativa</h2>
            <Accordion defaultActiveKey="0" className="accordion-elixir">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Misión</Accordion.Header>
                <Accordion.Body>
                  Brindar a nuestros clientes una experiencia excepcional en la adquisición de licores premium, ofreciendo productos auténticos de la más alta calidad, un servicio personalizado y asesoría experta que transforme cada celebración en un momento inolvidable.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Visión</Accordion.Header>
                <Accordion.Body>
                  Ser la licorería líder y más reconocida a nivel nacional por su curaduría exclusiva de licores, innovación constante en el servicio al cliente y ser el referente en cultura de cata y maridaje en la región.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Valores</Accordion.Header>
                <Accordion.Body>
                  <strong>Autenticidad:</strong> Garantizamos productos originales.<br />
                  <strong>Excelencia:</strong> Buscamos la perfección en cada detalle y asesoramiento.<br />
                  <strong>Pasión:</strong> Amamos lo que hacemos y transmitimos ese entusiasmo.<br />
                  <strong>Responsabilidad:</strong> Fomentamos un consumo responsable y ético.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Nosotros;