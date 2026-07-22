// src/pages/Contacto/Contacto.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contacto = () => {
  // Estados para controlar el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  // Estado para mostrar la alerta de éxito
  const [showAlert, setShowAlert] = useState(false);

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Copiamos lo que ya tenía
      [name]: value // Actualizamos solo el campo modificado
    });
  };

  // Función al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <Container className="mt-5 pt-4" style={{ minHeight: '70vh' }}>
      <Row className="justify-content-center">
        <Col lg={6}>
          <div className="text-center mb-4">
            <h1>Contáctanos</h1>
            <p className="text-muted">¿Tienes alguna consulta o pedido especial? Escríbenos.</p>
          </div>

          {/* Alerta de éxito condicional */}
          {showAlert && (
            <Alert variant="success" className="text-center" onClose={() => setShowAlert(false)} dismissible>
              ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
            </Alert>
          )}

          {/* Formulario con Floating Labels */}
          <Form onSubmit={handleSubmit} className="form-elixir">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Floating>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
                <label>Tu nombre completo</label>
              </Form.Floating>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Floating>
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
                <label>Correo electrónico</label>
              </Form.Floating>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMensaje">
              <Form.Floating>
                <Form.Control
                  as="textarea"
                  placeholder="Deja tu mensaje aquí"
                  style={{ height: '150px' }}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
                <label>Escribe tu mensaje</label>
              </Form.Floating>
            </Form.Group>

            <div className="d-grid">
              <Button variant="gold" type="submit" size="lg">
                Enviar Mensaje
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;