// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useMemo } from 'react';

// 1. Creamos el Contexto
const CartContext = createContext(null);

// 2. Creamos un Hook personalizado para usar el contexto fácilmente en cualquier componente
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// 3. Proveedor del Contexto (Envolverá toda la aplicación en main.jsx)
export const CartProvider = ({ children }) => {
  // Estados principales
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Función auxiliar para disparar el Toast global
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    window.clearTimeout(window.__cartToastTimer);
    window.__cartToastTimer = window.setTimeout(() => setShowToast(false), 2500);
  };

  // ==========================================
  // FUNCIONES DEL CARRITO
  // ==========================================

  // AGREGAR AL CARRITO (Con validación de Stock)
  const addToCart = (producto) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(item => item.id === producto.id);

      if (itemInCart) {
        if (itemInCart.cantidad >= producto.stock) {
          triggerToast(`⚠️ Stock máximo alcanzado para ${producto.nombre}`);
          return prevCart;
        }

        return prevCart.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }

      triggerToast(`🍷 ${producto.nombre} agregado al carrito`);
      return [...prevCart, { ...producto, cantidad: 1 }];
    });
  };

  // ELIMINAR UN PRODUCTO ESPECÍFICO DEL CARRITO
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // VACIAR TODO EL CARRITO
  const clearCart = () => {
    setCart([]);
  };

  // ==========================================
  // CÁLCULOS DERIVADOS (Métodos de arreglos ES6)
  // ==========================================

  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.cantidad, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0), [cart]);
  const igv = useMemo(() => subtotal * 0.18, [subtotal]);
  const total = useMemo(() => subtotal + igv, [subtotal, igv]);

  // ==========================================
  // OBJETO DE VALORES GLOBALES
  // ==========================================
  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    igv,
    total,
    showToast,
    toastMessage
  }), [cart, totalItems, subtotal, igv, total, showToast, toastMessage]);

  // Retornamos el Proveedor que envolverá la App
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};