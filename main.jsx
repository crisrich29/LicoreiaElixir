// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/estilos.css';

// Contexto Global
import { CartProvider } from './src/context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CartProvider envuelve toda la app para compartir el estado del carrito */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)