import React from 'react';
import './Modals.css';
import { X, ShoppingCart, Truck, Plus, Minus, Trash2 } from 'lucide-react';

const CartModal = ({ 
  isCartOpen, 
  setIsCartOpen, 
  cart, 
  setCart, 
  updateCartQuantity, 
  removeFromCart, 
  getCartTotal, 
  getCartCount,
  setActiveView 
}) => {
  if (!isCartOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-slide-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-panel-header">
          <h3>Tu Carrito ({getCartCount()})</h3>
          <button className="btn-close-panel" onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>

        <div className="cart-items-flow">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  {item.isCustom ? (
                    <div className="cart-item-specs-preview">
                      {item.specs.slice(0, 3).map((sp, i) => <span key={i}>{sp.split(' (')[0]} • </span>)}
                    </div>
                  ) : (
                    <p className="cart-item-price-unit">${item.price.toLocaleString()}</p>
                  )}
                  
                  <div className="cart-item-actions-row">
                    <div className="quantity-adjuster">
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                    <button className="btn-remove-item" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={14} />
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="cart-item-total-price">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-state">
              <span className="empty-cart-icon"><ShoppingCart size={64} strokeWidth={1} /></span>
              <p>Tu carrito está vacío</p>
              <button className="btn-primary-solid" onClick={() => { setIsCartOpen(false); setActiveView('catalog'); }}>
                Explorar Catálogo
              </button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-panel-footer">
            <div className="cart-total-row">
              <span>Subtotal:</span>
              <span className="cart-total-value">${getCartTotal().toLocaleString()}</span>
            </div>
            <p className="shipping-note"><Truck size={14} /> Envío gratuito y seguro de tránsito gaming incluido.</p>
            <button 
              className="btn-checkout"
              onClick={() => {
                alert('¡Compra Procesada! (Simulación de pasarela de pago)');
                setCart([]);
                setIsCartOpen(false);
              }}
            >
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
