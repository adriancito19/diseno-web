import React from 'react';
import './Navbar.css';
import { Zap, Search, User, ShoppingCart } from 'lucide-react';

const Navbar = ({ 
  activeView, 
  setActiveView, 
  searchQuery, 
  setSearchQuery, 
  setSelectedCategory, 
  user, 
  setUser, 
  setIsLoginOpen, 
  setIsCartOpen, 
  cartCount 
}) => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Top Row: Brand, Search, User/Cart Actions */}
        <div className="nav-top-row">
          <div className="nav-brand" onClick={() => { setActiveView('home'); setSelectedCategory('all'); }}>
            <span className="brand-icon"><Zap size={24} fill="currentColor" /></span>
            <span className="brand-text">NOVA<span className="text-accent">GAMING</span></span>
          </div>

          {/* Mockup Fusion Search Bar */}
          <div className="nav-search-bar">
            <span className="search-icon"><Search size={18} /></span>
            <input 
              type="text" 
              placeholder="Busca tu Producto (ej: RTX, Ryzen, Laptop...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeView !== 'catalog' && activeView !== 'home') {
                  setActiveView('catalog');
                }
              }}
            />
            <span className="search-count-badge">100+</span>
            <button 
              className="search-btn"
              onClick={() => {
                setActiveView('catalog');
              }}
            >
              Buscar
            </button>
          </div>

          <div className="nav-actions">
            {/* User Account Button */}
            {user ? (
              <div className="user-profile-menu">
                <div className="avatar"><User size={20} /></div>
                <span className="user-email">{user.email.split('@')[0]}</span>
                <button className="btn-logout" onClick={() => setUser(null)}>Salir</button>
              </div>
            ) : (
              <button className="nav-btn-action btn-glass" onClick={() => setIsLoginOpen(true)}>
                <span className="btn-icon"><User size={20} /></span>
                <span className="btn-label">Iniciar Sesión</span>
              </button>
            )}

            {/* Shopping Cart Button */}
            <button className="nav-btn-action btn-primary-solid" onClick={() => setIsCartOpen(true)}>
              <span className="btn-icon"><ShoppingCart size={20} /></span>
              <span className="btn-label">Mi Carrito</span>
              <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="nav-bottom-row">
          <ul className="nav-navlist">
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'home' ? 'active' : ''}`}
                onClick={() => { setActiveView('home'); setSelectedCategory('all'); }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'builder' ? 'active' : ''}`}
                onClick={() => setActiveView('builder')}
              >
                PC Builder <span className="beta-tag">Interactivo</span>
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'catalog' ? 'active' : ''}`}
                onClick={() => { setActiveView('catalog'); setSelectedCategory('all'); }}
              >
                Catálogo
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveView('contact')}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
