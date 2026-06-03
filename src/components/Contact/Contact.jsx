import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ setActiveView }) => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setActiveView('home');
    }, 3000);
  };

  return (
    <section className="contact-section section-padding-large">
      <div className="container contact-grid-container">
        <div className="contact-info-card">
          <span className="subtitle-solid">ESTAMOS AQUÍ PARA AYUDAR</span>
          <h2>Ponte en Contacto con Nova Gaming</h2>
          <p>¿Tienes dudas sobre compatibilidad de hardware? ¿Quieres un presupuesto especial para tu empresa o canal de streaming? Escríbenos.</p>
          
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <h5>Oficina Central</h5>
                <p>Distrito Tecnológico, Torre Nova Gaming - Piso 8</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <h5>Soporte de Ventas</h5>
                <p>ventas@novagaming.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <h5>Llamada Gratuita</h5>
                <p>0800-444-NOVA (6682)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {contactSuccess ? (
            <div className="form-success-animation">
              <span className="success-icon">✓</span>
              <h3>Mensaje Enviado con Éxito</h3>
              <p>Gracias por comunicarte con nosotros. Un experto de soporte técnico te responderá en un plazo máximo de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <h3>Envíanos un Correo</h3>
              
              <div className="form-group-modern">
                <label htmlFor="name-input">Nombre Completo</label>
                <input 
                  id="name-input"
                  type="text" 
                  placeholder="Ingresa tu nombre" 
                  required 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="email-input">Correo Electrónico</label>
                <input 
                  id="email-input"
                  type="email" 
                  placeholder="correo@ejemplo.com" 
                  required 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="msg-input">Mensaje / Consulta</label>
                <textarea 
                  id="msg-input"
                  placeholder="Describe los componentes o asesoría que necesitas..." 
                  rows="5"
                  required 
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-contact-submit">
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
