import React from 'react';
import './PCBuilder.css';
import { BUILDER_OPTIONS } from '../../constants/products';
import { ShoppingCart, ShieldCheck, Cpu, HardDrive, Layout, Monitor as GpuIcon, Disc } from 'lucide-react';

const PCBuilder = ({ builderConfig, setBuilderConfig, addCustomPcToCart }) => {
  const totalPrice = builderConfig.cpu.price + 
                     builderConfig.gpu.price + 
                     builderConfig.ram.price + 
                     builderConfig.ssd.price + 
                     builderConfig.gabinete.price;

  return (
    <section className="builder-section section-padding-large">
      <div className="container">
        <div className="section-head-modern text-center">
          <span className="subtitle-solid">CONFIGURADOR INTERACTIVO</span>
          <h2>Diseña tu PC Gaming a Medida</h2>
          <p className="section-description">Selecciona componentes de gama alta certificados para total compatibilidad y rendimiento óptimo.</p>
        </div>

        <div className="builder-layout-grid">
          {/* Left Column: Configuration Options */}
          <div className="builder-configurator-card">
            <div className="builder-header-bar">
              <h3>Paso a Paso: Configura tu Setup</h3>
            </div>

            {/* Component Option Selection: CPU */}
            <div className="builder-component-selector">
              <label className="selector-title">
                <span className="selector-num">1</span> <Cpu size={18} /> Procesador (CPU)
              </label>
              <div className="selector-options-list">
                {BUILDER_OPTIONS.cpu.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`selector-option-item ${builderConfig.cpu.id === opt.id ? 'selected' : ''}`}
                    onClick={() => setBuilderConfig({ ...builderConfig, cpu: opt })}
                  >
                    <div className="option-info">
                      <span className="option-name">{opt.name}</span>
                    </div>
                    <span className="option-price">+${opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Option Selection: GPU */}
            <div className="builder-component-selector">
              <label className="selector-title">
                <span className="selector-num">2</span> <GpuIcon size={18} /> Tarjeta Gráfica (GPU)
              </label>
              <div className="selector-options-list">
                {BUILDER_OPTIONS.gpu.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`selector-option-item ${builderConfig.gpu.id === opt.id ? 'selected' : ''}`}
                    onClick={() => setBuilderConfig({ ...builderConfig, gpu: opt })}
                  >
                    <div className="option-info">
                      <span className="option-name">{opt.name}</span>
                      {opt.id === 'rtx5090' && <span className="option-badge-green">RECOMENDADO</span>}
                    </div>
                    <span className="option-price">+${opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Option Selection: RAM */}
            <div className="builder-component-selector">
              <label className="selector-title">
                <span className="selector-num">3</span> <Disc size={18} /> Memoria RAM
              </label>
              <div className="selector-options-list">
                {BUILDER_OPTIONS.ram.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`selector-option-item ${builderConfig.ram.id === opt.id ? 'selected' : ''}`}
                    onClick={() => setBuilderConfig({ ...builderConfig, ram: opt })}
                  >
                    <div className="option-info">
                      <span className="option-name">{opt.name}</span>
                    </div>
                    <span className="option-price">+${opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Option Selection: SSD */}
            <div className="builder-component-selector">
              <label className="selector-title">
                <span className="selector-num">4</span> <HardDrive size={18} /> Almacenamiento (SSD)
              </label>
              <div className="selector-options-list">
                {BUILDER_OPTIONS.ssd.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`selector-option-item ${builderConfig.ssd.id === opt.id ? 'selected' : ''}`}
                    onClick={() => setBuilderConfig({ ...builderConfig, ssd: opt })}
                  >
                    <div className="option-info">
                      <span className="option-name">{opt.name}</span>
                    </div>
                    <span className="option-price">+${opt.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Option Selection: Gabinete */}
            <div className="builder-component-selector">
              <label className="selector-title">
                <span className="selector-num">5</span> <Layout size={18} /> Gabinete / Chasis
              </label>
              <div className="selector-options-list">
                {BUILDER_OPTIONS.gabinete.map((opt) => (
                  <div 
                    key={opt.id} 
                    className={`selector-option-item ${builderConfig.gabinete.id === opt.id ? 'selected' : ''}`}
                    onClick={() => setBuilderConfig({ ...builderConfig, gabinete: opt })}
                  >
                    <div className="option-info">
                      <span className="option-name">{opt.name}</span>
                    </div>
                    <span className="option-price">+${opt.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Summary and Price Live Calculator */}
          <div className="builder-preview-sticky-card">
            <div className="builder-live-render-box">
              <div className="render-glow-pulse"></div>
              <img 
                src={builderConfig.gabinete.id === 'ice' ? '/images/pc_2_1779304486929.png' : '/images/pc_1_1779304111464.png'} 
                alt="Nova Custom PC Live Render" 
                className="builder-rendered-image"
              />
              <div className="builder-gabinete-label">
                {builderConfig.gabinete.name}
              </div>
            </div>

            <div className="builder-summary-details">
              <h4>Resumen de Configuración</h4>
              <ul className="selected-specs-list">
                <li>
                  <span className="spec-label-cat">CPU:</span>
                  <span className="spec-val-name">{builderConfig.cpu.name.split(' (')[0]}</span>
                </li>
                <li>
                  <span className="spec-label-cat">GPU:</span>
                  <span className="spec-val-name">{builderConfig.gpu.name.split(' (')[0]}</span>
                </li>
                <li>
                  <span className="spec-label-cat">RAM:</span>
                  <span className="spec-val-name">{builderConfig.ram.name.split(' Corsair')[0].split(' G.Skill')[0]}</span>
                </li>
                <li>
                  <span className="spec-label-cat">SSD:</span>
                  <span className="spec-val-name">{builderConfig.ssd.name.split(' WD')[0]}</span>
                </li>
              </ul>

              <div className="builder-price-calc-box">
                <div className="calc-row">
                  <span>Componentes Seleccionados:</span>
                  <span>5</span>
                </div>
                <div className="calc-row">
                  <span>Ensamblaje y Pruebas:</span>
                  <span className="text-green">¡GRATIS!</span>
                </div>
                <div className="total-divider"></div>
                <div className="calc-row total-price-row">
                  <span>Precio Total:</span>
                  <span className="builder-total-price">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                className="btn-builder-add-cart"
                onClick={addCustomPcToCart}
              >
                <ShoppingCart size={18} /> Añadir PC Personalizada al Carrito
              </button>

              <div className="builder-insurance-notes">
                <p><ShieldCheck size={14} /> Totalmente certificado e incompatible-free. Garantía extendida de 3 años incluida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCBuilder;
