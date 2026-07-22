// src/data/productos.js

// Base de datos local simulada con 20 productos de licorería premium
export const productos = [
  {
    id: 1,
    nombre: "Johnnie Walker Black Label",
    precio: 320.00,
    categoria: "Whisky",
    stock: 15,
    imagen: "/src/assets/imagenes/johnie_walker_black.jpg",
    descripcion: "Un blended Scotch whisky de 12 años de edad, con profundidad y complejidad inigualables.",
    destacado: true
  },
  {
    id: 2,
    nombre: "Johnnie Walker Red Label",
    precio: 180.00,
    categoria: "Whisky",
    stock: 25,
    imagen: "/src/assets/imagenes/johnnie-walker-red.jpeg",
    descripcion: "El whisky escocés más vendido del mundo, con un carácter vibrante y atrevido.",
    destacado: false
  },
  {
    id: 3,
    nombre: "Johnnie Walker Blue Label",
    precio: 1200.00,
    categoria: "Whisky",
    stock: 5,
    imagen: "/src/assets/imagenes/johnnie-walker-blue.jpg",
    descripcion: "Nuestra creación más excepcional, compuesta por los whiskies más raros de nuestras reservas.",
    destacado: true
  },
  {
    id: 4,
    nombre: "Chivas Regal 12",
    precio: 250.00,
    categoria: "Whisky",
    stock: 20,
    imagen: "/src/assets/imagenes/chivas-regal-12.jpg",
    descripcion: "Un blended whisky escocés con sabores ricos y suaves de miel, vainilla y manzana madura.",
    destacado: false
  },
  {
    id: 5,
    nombre: "Ballantine's Finest",
    precio: 160.00,
    categoria: "Whisky",
    stock: 30,
    imagen: "/src/assets/imagenes/ballantines-finest.jpg",
    descripcion: "Un blended Scotch whisky suave y equilibrado con toques de chocolate con leche y manzana roja.",
    destacado: false
  },
  {
    id: 6,
    nombre: "Jack Daniel's Old No. 7",
    precio: 220.00,
    categoria: "Whisky",
    stock: 35,
    imagen: "/src/assets/imagenes/jack_daniels.jpg",
    descripcion: "El Tennessee whiskey con sabor característico, filtrado gota a gota a través de carbón de arce.",
    destacado: true
  },
  {
    id: 7,
    nombre: "Old Parr 12 Años",
    precio: 240.00,
    categoria: "Whisky",
    stock: 18,
    imagen: "/src/assets/imagenes/old_parr_12.jpg",
    descripcion: "Un blended Scotch whisky de 12 años, reconocido por su sabor suave, redondo y pleno.",
    destacado: false
  },
  {
    id: 8,
    nombre: "Jägermeister",
    precio: 150.00,
    categoria: "Licores",
    stock: 40,
    imagen: "/src/assets/imagenes/Jägermeister.jpg",
    descripcion: "Un licor de hierbas alemán con 56 botánicos, ideal para tomar muy frío.",
    destacado: true
  },
  {
    id: 9,
    nombre: "Absolut Vodka",
    precio: 130.00,
    categoria: "Vodka",
    stock: 50,
    imagen: "/src/assets/imagenes/absolut_vodka.jpg",
    descripcion: "Vodka sueco de grano de invierno, puro y suave con un toque de vainilla.",
    destacado: false
  },
  {
    id: 10,
    nombre: "Smirnoff Vodka",
    precio: 95.00,
    categoria: "Vodka",
    stock: 60,
    imagen: "/src/assets/imagenes/smirnoff_vodka.jpg",
    descripcion: "El vodka más vendido del mundo, triple destilado y filtrado 10 veces.",
    destacado: false
  },
  {
    id: 11,
    nombre: "Bacardí Carta Blanca",
    precio: 110.00,
    categoria: "Ron",
    stock: 45,
    imagen: "/src/assets/imagenes/bacardi_carta_blanca.jpg",
    descripcion: "Ron blanco premium con notas de almendra y frutas tropicales.",
    destacado: false
  },
  {
    id: 12,
    nombre: "Havana Club 7 Años",
    precio: 230.00,
    categoria: "Ron",
    stock: 12,
    imagen: "/src/assets/imagenes/havana_club_7_años.jpg",
    descripcion: "Ron oscuro cubano con sabores a cacao, vainilla y caramelo.",
    destacado: true
  },
  {
    id: 13,
    nombre: "Ron Cartavio Black",
    precio: 140.00,
    categoria: "Ron",
    stock: 22,
    imagen: "/src/assets/imagenes/ron_cartavio_black.jpg",
    descripcion: "Ron oscuro peruano con cuerpo y carácter, ideal para cócteles o con hielo.",
    destacado: false
  },
  {
    id: 14,
    nombre: "Ron Zacapa 23",
    precio: 450.00,
    categoria: "Ron",
    stock: 8,
    imagen: "/src/assets/imagenes/ron_zacapa_23.jpg",
    descripcion: "Ron premium guatemalteco envejecido en altura, complejo y dulce.",
    destacado: true
  },
  {
    id: 15,
    nombre: "José Cuervo Especial",
    precio: 140.00,
    categoria: "Tequila",
    stock: 30,
    imagen: "/src/assets/imagenes/jose_cuervo_especial.jpg",
    descripcion: "Tequila mixto dorado, suave y ligeramente dulce, perfecto para margaritas.",
    destacado: false
  },
  {
    id: 16,
    nombre: "1800 Tequila Silver",
    precio: 210.00,
    categoria: "Tequila",
    stock: 15,
    imagen: "/src/assets/imagenes/1800_tequila_silver.jpeg",
    descripcion: "Tequila 100% de agave azul, puro y sin barrica, con notas cítricas.",
    destacado: false
  },
  {
    id: 17,
    nombre: "Patrón Silver",
    precio: 580.00,
    categoria: "Tequila",
    stock: 10,
    imagen: "/src/assets/imagenes/patron_silver.jpg",
    descripcion: "Tequila ultra premium 100% agave, elaborado artesanalmente.",
    destacado: true
  },
  {
    id: 18,
    nombre: "Baileys Original",
    precio: 120.00,
    categoria: "Licores",
    stock: 35,
    imagen: "/src/assets/imagenes/baileys _original.jpg",
    descripcion: "Crema irlandesa con whisky y chocolate, suave y deliciosa.",
    destacado: false
  },
  {
    id: 19,
    nombre: "J&B Rare",
    precio: 170.00,
    categoria: "Whisky",
    stock: 20,
    imagen: "/src/assets/imagenes/J&B_rare.jpg",
    descripcion: "Un blended Scotch whisky ligero y fresco, perfecto para mezclar.",
    destacado: false
  },
  {
    id: 20,
    nombre: "Passport Scotch",
    precio: 130.00,
    categoria: "Whisky",
    stock: 28,
    imagen: "/src/assets/imagenes/passport_scotch.jpg",
    descripcion: "Blended Scotch whisky con un sabor equilibrado y un toque ahumado ligero.",
    destacado: false
  }
];