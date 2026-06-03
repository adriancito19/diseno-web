import React from 'react';
import './Catalog.css';
import ProductCard from './ProductCard';

const Catalog = ({ 
  products, 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onProductClick, 
  onAddToCart 
}) => {
  return (
    <section className="catalog-section section-padding-large">
      <div className="container">
        <div className="section-head-modern text-center">
          <span className="subtitle-solid">CATÁLOGO COMPLETO</span>
          <h2>Explora Nuestros Equipos y Componentes</h2>
          <p className="section-description">Utiliza los filtros de categoría o el buscador superior para encontrar lo que necesitas.</p>
        </div>

        {/* Catalog Filter Controls */}
        <div className="catalog-controls-container">
          <div className="category-filters-row">
            <button 
              className={`filter-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Todo
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'laptops' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('laptops')}
            >
              Laptops Gaming
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'desktops' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('desktops')}
            >
              Desktops Gaming
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'monitores' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('monitores')}
            >
              Monitores
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'accesorios' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('accesorios')}
            >
              Accesorios
            </button>
          </div>

          {searchQuery && (
            <div className="search-status-tag">
              Búsqueda: <strong>"{searchQuery}"</strong>
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✖</button>
            </div>
          )}
        </div>

        {/* Catalog Products Grid */}
        {products.length > 0 ? (
          <div className="products-grid-modern">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={onProductClick} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <span className="no-products-icon">🔍</span>
            <h3>No se encontraron productos</h3>
            <p>Intenta ajustar tus criterios de búsqueda o de categoría.</p>
            <button 
              className="btn-outline-glass"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
