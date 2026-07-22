// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes estructurales
import NavbarElixir from './src/components/Navbar/Navbar';
import Footer from './src/components/Footer/Footer';

// Páginas
import Home from './src/pages/Home/Home';
import Catalogo from './src/pages/Catalogo/Catalogo';
import Nosotros from './src/pages/Nosotros/Nosotros';
import Contacto from './src/pages/Contacto/Contacto';

function App() {
  return (
    // BrowserRouter permite la navegación por URL
    <BrowserRouter>
      {/* Layout general: Navbar fija arriba, contenido medio flexible, Footer abajo */}
      <div className="d-flex flex-column min-vh-100">
        
        <NavbarElixir />
        
        {/* Contenido principal que crecerá empujando el footer hacia abajo */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;