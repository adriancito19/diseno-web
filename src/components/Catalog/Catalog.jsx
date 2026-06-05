import React from 'react';
import './Catalog.css';
import ProductCard from './ProductCard';
import { Search, X } from 'lucide-react';

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
            <button 
              className={`filter-tab-btn ${selectedCategory === 'procesadores' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('procesadores')}
            >
              Procesadores
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'graficas' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('graficas')}
            >
              Gráficas
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'ram' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ram')}
            >
              Memorias RAM
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'almacenamiento' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('almacenamiento')}
            >
              Almacenamiento
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'madres' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('madres')}
            >
              Placas Madre
            </button>
            <button 
              className={`filter-tab-btn ${selectedCategory === 'fuentes' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('fuentes')}
            >
              Fuentes
            </button>
          </div>

          {searchQuery && (
            <div className="search-status-tag">
              Búsqueda: <strong>"{searchQuery}"</strong>
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}><X size={14} /></button>
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
            <span className="no-products-icon"><Search size={48} /></span>
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
