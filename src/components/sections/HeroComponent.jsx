import React, { useEffect, useState } from 'react';
import './HeroComponent.css'; // Create this CSS file for styling

const HeroComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animation trigger on mount
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`hero-container ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background Gradient */}
      <div className="gradient-bg">
        <div className="gradient-circle gradient-1"></div>
        <div className="gradient-circle gradient-2"></div>
        <div className="gradient-circle gradient-3"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Content Section */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to Your
            <span className="highlight-text"> Next Generation</span>
            Experience
          </h1>
          
          <p className="hero-subtitle">
            Crafting beautiful, responsive, and performant web applications 
            with modern technologies and cutting-edge design.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
              <span className="btn-arrow">→</span>
            </button>
            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">⚡</div>
            <h4>Fast Performance</h4>
            <p>Lightning fast load times</p>
          </div>
          
          <div className="floating-card card-2">
            <div className="card-icon">🎨</div>
            <h4>Beautiful Design</h4>
            <p>Modern and clean UI</p>
          </div>
          
          <div className="floating-card card-3">
            <div className="card-icon">🔧</div>
            <h4>Easy Integration</h4>
            <p>Seamless compatibility</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </div>
  );
};

export default HeroComponent;