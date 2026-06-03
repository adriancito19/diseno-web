import React from 'react';
import './Advantages.css';

const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="container">
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon-box">🔧</div>
            <h3>Ensamblaje Premium</h3>
            <p>Cada equipo es ensamblado meticulosamente por expertos con una gestión de cables ultra limpia para el mejor flujo de aire y estética.</p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon-box">🛡️</div>
            <h3>3 Años de Garantía</h3>
            <p>Ofrecemos garantía líder en la industria en todas nuestras PCs. Soporte completo y cambio de piezas sin rodeos.</p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon-box">📞</div>
            <h3>Soporte Experto 24/7</h3>
            <p>Nuestro equipo de soporte técnico está compuesto por apasionados del hardware gaming listos para ayudarte en cualquier momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
