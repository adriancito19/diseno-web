import React from 'react';
import './Footer.css';
import { X, Camera, Video, MessageCircle } from 'lucide-react';

const Footer = ({ setActiveView, setSelectedCategory }) => {
  return (
    <footer className="footer-modern-section">
      <div className="container">
        <div className="footer-grid-modern">
          <div className="footer-brand-info">
            <h2 className="footer-logo">
              PC<span> ASSEMBLY</span>
            </h2>
            <p>El estándar más alto del PC Gaming. Ensamblado a mano, probado para overclocking y optimizado al extremo.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Twitter"><X size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Camera size={20} /></a>
              <a href="#" className="social-icon" aria-label="Youtube"><Video size={20} /></a>
              <a href="#" className="social-icon" aria-label="Discord"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4>Productos</h4>
            <ul>
              <li onClick={() => { setActiveView('catalog'); setSelectedCategory('desktops'); }}>PCs de Escritorio</li>
              <li onClick={() => { setActiveView('catalog'); setSelectedCategory('laptops'); }}>Laptops de Rendimiento</li>
              <li onClick={() => { setActiveView('catalog'); setSelectedCategory('monitores'); }}>Monitores Gaming</li>
              <li onClick={() => { setActiveView('catalog'); setSelectedCategory('accesorios'); }}>Accesorios RGB</li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Soporte</h4>
            <ul>
              <li onClick={() => setActiveView('contact')}>Centro de Asistencia</li>
              <li>Garantía de Sistemas</li>
              <li>Envíos y Devoluciones</li>
              <li>Drivers de Dispositivos</li>
            </ul>
          </div>

          <div className="footer-newsletter-col">
            <h4>Comunidad VIP</h4>
            <p>Recibe notificaciones de stock inmediato sobre la nueva Serie RTX 5000 y ofertas exclusivas.</p>
            <form className="newsletter-form-modern" onSubmit={(e) => { e.preventDefault(); alert('¡Suscrito al boletín informativo!'); }}>
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit">Unirse</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} PC ASSEMBLY. Diseñado con fines de demostración de experiencia moderna de e-commerce.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
