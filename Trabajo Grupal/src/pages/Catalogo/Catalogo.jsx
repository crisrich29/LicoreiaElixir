// src/pages/Catalogo/Catalogo.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

// Componentes
import ProductList from '../../components/ProductList/ProductList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter.jsx';

// Datos
import { productos } from '../../data/productos';

const Catalogo = () => {
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('default');
  const [activeFilters, setActiveFilters] = useState(0);

  // 2. OBTENCIÓN DINÁMICA DE CATEGORÍAS
  // Usamos Set para obtener categorías únicas y evitamos escribirlas a mano
  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  // 3. LÓGICA DE FILTRADO Y ORDENAMIENTO
  useEffect(() => {
    // Creamos una copia del arreglo original para no mutarlo
    let resultado = [...productos];

    // Filtro por categoría
    if (selectedCategory !== 'Todos') {
      resultado = resultado.filter(p => p.categoria === selectedCategory);
    }

    // Filtro por búsqueda (en tiempo real)
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      resultado = resultado.filter(p => 
        p.nombre.toLowerCase().includes(term) || 
        p.descripcion.toLowerCase().includes(term)
      );
    }

    // Ordenamiento
    if (sortOrder === 'precio-asc') {
      resultado.sort((a, b) => a.precio - b.precio);
    } else if (sortOrder === 'precio-desc') {
      resultado.sort((a, b) => b.precio - a.precio);
    } else if (sortOrder === 'nombre-asc') {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortOrder === 'nombre-desc') {
      resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    setProductosFiltrados(resultado);
    setActiveFilters((searchTerm.trim() !== '' ? 1 : 0) + (selectedCategory !== 'Todos' ? 1 : 0));

  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <Container className="catalogo-section mt-5 pt-4">
      <section className="catalogo-hero mb-4">
        <div className="catalogo-hero-content">
          <div>
            <p className="section-badge">Colección premium</p>
            <h1 className="mb-2">Nuestro Catálogo</h1>
            <p className="catalogo-subtitle mb-0">
              Explora una colección exclusiva de whiskies, rones, tequilas, vodkas y licores premium seleccionados con estilo y criterio.
            </p>
          </div>
          <div className="catalogo-summary">
            <span>{productosFiltrados.length} productos disponibles</span>
          </div>
        </div>
        {activeFilters > 0 && (
          <div className="catalogo-filters-info mt-3">
            Filtros activos: {activeFilters} · {selectedCategory !== 'Todos' ? `Categoría: ${selectedCategory}` : 'Todas las categorías'}
          </div>
        )}
      </section>

      <section className="catalogo-toolbar mb-4">
        <Row className="align-items-center g-3">
          <Col md={6} lg={6}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Col>
          <Col md={6} lg={3}>
            <Form.Select 
              className="sort-select" 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Ordenar por...</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="nombre-asc">Nombre: A - Z</option>
              <option value="nombre-desc">Nombre: Z - A</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <CategoryFilter 
              categories={categorias} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </Col>
        </Row>
      </section>

      {productosFiltrados.length > 0 ? (
        <ProductList productos={productosFiltrados} />
      ) : (
        <div className="no-results">
          <div className="no-results-icon">🍷</div>
          <h4>No se encontraron productos</h4>
          <p>Prueba con otra búsqueda o selecciona otra categoría para ver más opciones.</p>
        </div>
      )}
    </Container>
  );
};

export default Catalogo;