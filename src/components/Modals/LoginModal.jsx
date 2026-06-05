import React from 'react';
import './Modals.css';
import { X, LogIn } from 'lucide-react';

const LoginModal = ({ 
  isLoginOpen, 
  setIsLoginOpen, 
  handleLogin, 
  loginEmail, 
  setLoginEmail, 
  loginPassword, 
  setLoginPassword 
}) => {
  if (!isLoginOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => setIsLoginOpen(false)}>
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h3>Ingresar a Nova Gaming</h3>
          <button className="btn-close-modal" onClick={() => setIsLoginOpen(false)}><X size={20} /></button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group-modern">
            <label htmlFor="login-email-input">Correo Electrónico</label>
            <input 
              id="login-email-input"
              type="email" 
              placeholder="ejemplo@correo.com" 
              required 
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>

          <div className="form-group-modern">
            <label htmlFor="login-pwd-input">Contraseña</label>
            <input 
              id="login-pwd-input"
              type="password" 
              placeholder="Contraseña" 
              required 
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <div className="login-options-row">
            <label className="checkbox-container">
              <input type="checkbox" /> Recordarme
            </label>
            <button type="button" className="btn-link-reset forgot-password" onClick={() => alert('Recuperación de contraseña no disponible en demo')}>¿Olvidaste tu contraseña?</button>
          </div>

          <button type="submit" className="btn-login-submit">
            <LogIn size={18} />
            Entrar a mi Cuenta
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta? <button className="btn-link-accent">Regístrate Ahora</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
