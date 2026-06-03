import React from 'react';
import './Catalog.css';

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
  return (
    <div className="product-card-modern" onClick={() => onProductClick(product)}>
      <div className="product-card-img-wrapper">
        {product.tags && product.tags.map((tag, i) => (
          <span key={i} className="prod-badge-tag">{tag}</span>
        ))}
        <img src={product.image} alt={product.name} className="product-card-img" />
      </div>
      <div className="product-card-details">
        <span className="product-card-cat-label">{product.category.toUpperCase()}</span>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>
        
        <div className="product-card-specs-box">
          <ul>
            {product.specs.map((spec, i) => (
              <li key={i}>• {spec}</li>
            ))}
          </ul>
        </div>

        <div className="product-card-footer">
          <div className="product-card-price-box">
            <span className="price-label">Precio</span>
            <span className="price-value">${product.price.toLocaleString()}</span>
          </div>
          <button className="btn-add-to-cart" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
