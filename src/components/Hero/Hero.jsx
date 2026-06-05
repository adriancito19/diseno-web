import React, { useState, useEffect } from 'react';
import './Hero.css';
import { HERO_SLIDES } from '../../constants/hero';
import { Rocket, Sparkles, Cpu, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ setActiveView, setSelectedCategory, setSearchQuery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel-section">
      <div className="carousel-track">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div 
              key={idx} 
              className={`carousel-slide slide-theme-${slide.themeColor} ${isActive ? 'active' : ''}`}
            >
              <div className="container slide-grid">
                <div className="slide-content">
                  <span className="slide-badge-glow">{slide.badge}</span>
                  <h1 className="slide-headline">
                    {slide.title} <br/>
                    <span className="gradient-text">{slide.accentTitle}</span>
                  </h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>

                  {/* Specific mockup details for RTX 5000 Launch */}
                  {slide.isRTXLaunch && (
                    <div className="rtx-features-grid">
                      <div className="rtx-feature-card">
                        <span className="rtx-feature-icon"><Rocket size={20} /></span>
                        <div>
                          <h4>Más FPS</h4>
                          <p>En tus juegos favoritos</p>
                        </div>
                      </div>
                      <div className="rtx-feature-card">
                        <span className="rtx-feature-icon"><Sparkles size={20} /></span>
                        <div>
                          <h4>Trazado de Rayos</h4>
                          <p>Más realista que nunca</p>
                        </div>
                      </div>
                      <div className="rtx-feature-card">
                        <span className="rtx-feature-icon"><Cpu size={20} /></span>
                        <div>
                          <h4>Rendimiento IA</h4>
                          <p>De última generación</p>
                        </div>
                      </div>
                      <div className="rtx-feature-card">
                        <span className="rtx-feature-icon"><Monitor size={20} /></span>
                        <div>
                          <h4>Listo para 4K</h4>
                          <p>Y 1440p en Ultra</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="slide-actions">
                    {slide.isRTXLaunch ? (
                      <>
                        <button className="btn-primary-solid" onClick={() => { setActiveView('catalog'); setSelectedCategory('desktops'); setSearchQuery('5090'); }}>
                          Adquirir RTX 5090
                        </button>
                        <button className="btn-outline-glass" onClick={() => setActiveView('builder')}>
                          Personalizar en PC Builder
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn-primary-solid" onClick={() => { setActiveView(slide.ctaLink); setSelectedCategory(slide.categoryFilter); }}>
                          Explorar Ahora
                        </button>
                        <button className="btn-outline-glass">
                          Ver Detalles
                        </button>
                      </>
                    )}
                  </div>

                  {/* Quick Category Cards */}
                  <div className="hero-quick-cards">
                    <div className="quick-card" onClick={() => { setActiveView('catalog'); setSelectedCategory('desktops'); }}>
                      <span className="quick-card-tag">DESKTOPS</span>
                      <h5>Nova Systems</h5>
                    </div>
                    <div className="quick-card" onClick={() => { setActiveView('catalog'); setSelectedCategory('laptops'); }}>
                      <span className="quick-card-tag">LAPTOPS</span>
                      <h5>Aero & Beast</h5>
                    </div>
                    <div className="quick-card" onClick={() => { setActiveView('catalog'); setSelectedCategory('monitores'); }}>
                      <span className="quick-card-tag">MONITORES</span>
                      <h5>4K & OLED</h5>
                    </div>
                  </div>
                </div>

                <div className="slide-media-container">
                  <div className="slide-glow-circle"></div>
                  <img src={slide.image} alt={slide.title} className="slide-image-render" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow arrow-left" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-arrow arrow-right" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {HERO_SLIDES.map((_, idx) => (
          <button 
            key={idx} 
            className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>

      {/* Ticker Banner */}
      <div className="hero-ticker-banner">
        <div className="ticker-content">
          <span>ENVÍOS A TODO EL PAÍS </span> <span className="ticker-dot">•</span>
          <span> SOPORTE TÉCNICO ESPECIALIZADO </span> <span className="ticker-dot">•</span>
          <span> GARANTÍA DE HASTA 3 AÑOS </span> <span className="ticker-dot">•</span>
          <span> CONFIGURACIÓN PERSONALIZADA </span> <span className="ticker-dot">•</span>
          <span> COMPONENTES DE ÚLTIMA GENERACIÓN </span> <span className="ticker-dot">•</span>
          {/* Repeat for loop effect */}
          <span> ENVÍOS A TODO EL PAÍS </span> <span className="ticker-dot">•</span>
          <span> SOPORTE TÉCNICO ESPECIALIZADO </span> <span className="ticker-dot">•</span>
          <span> GARANTÍA DE HASTA 3 AÑOS </span> <span className="ticker-dot">•</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
