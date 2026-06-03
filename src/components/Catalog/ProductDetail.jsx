import React from 'react';
import './ProductDetail.css';
import { INITIAL_PRODUCTS } from '../../constants/products';

const ProductDetail = ({ modalProduct, closeProductDetail, addToCart, viewProductDetail }) => {
  if (!modalProduct) return null;

  return (
    <section className="product-detail-view-section section-padding-large">
      <div className="container">
        <div className="product-detail-full-card">
          <button className="btn-back-catalog" onClick={closeProductDetail}>← Volver al Catálogo</button>
          
          <div className="product-modal-grid">
            {/* Left Column: Image */}
            <div className="product-modal-image-col">
              <div className="product-modal-image-wrapper">
                <img src={modalProduct.image} alt={modalProduct.name} />
              </div>
            </div>
            
            {/* Center Column: Details & Specs */}
            <div className="product-modal-info-col">
              <span className="product-modal-category">{modalProduct.category.toUpperCase()}</span>
              <h2 className="product-modal-title">{modalProduct.name}</h2>
              
              <div className="product-modal-rating">
                ⭐⭐⭐⭐⭐ <span className="rating-count">(128 valoraciones)</span>
              </div>
              
              <p className="product-modal-desc">{modalProduct.description}</p>
              
              <div className="product-modal-specs">
                <h4>Especificaciones Técnicas</h4>
                <ul>
                  {modalProduct.specs.map((spec, i) => (
                    <li key={i}><strong>{spec.split(' ')[0]}</strong> {spec.substring(spec.indexOf(' ') + 1)}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right Column: Checkout/Buy Box */}
            <div className="product-modal-buy-col">
              <div className="buy-box-card">
                <div className="buy-box-price">${modalProduct.price.toLocaleString()}</div>
                <div className="buy-box-delivery">
                  Entrega <strong>Gratis</strong> el <span>Jueves, 28 de Mayo</span>
                </div>
                <div className="buy-box-stock">En Stock</div>
                <button className="btn-primary-solid btn-add-to-cart-large" onClick={() => addToCart(modalProduct)}>
                  Añadir al Carrito
                </button>
                <div className="buy-box-meta">
                  <p>Envío desde <span>Nova Gaming</span></p>
                  <p>Vendido por <span>Nova Gaming</span></p>
                  <p>Devoluciones <span>Política de 30 días</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Related Products */}
          <div className="product-modal-related">
            <h3>Productos Relacionados</h3>
            <div className="related-products-row">
              {INITIAL_PRODUCTS.filter(p => p.category === modalProduct.category && p.id !== modalProduct.id).slice(0, 4).map(related => (
                <div key={related.id} className="related-product-card" onClick={() => viewProductDetail(related)}>
                  <img src={related.image} alt={related.name} />
                  <h5>{related.name}</h5>
                  <span>${related.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
