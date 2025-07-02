
import React from 'react';
import Slideshow from './Slideshow';
import './Hero.css';

const Hero: React.FC = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop&auto=format'
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-branding">
            <h1 className="brand-name">WishIn Bloom</h1>
            <p className="brand-slogan">Where Every Gift Blooms with Meaning.</p>
          </div>
          <p className="hero-description">
            From intimate gatherings to grand celebrations, we help you create 
            unforgettable memories for life's most precious occasions.
          </p>
          <div className="hero-buttons">
            <a href="/learn-more" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        
        <div className="hero-slideshow">
          <Slideshow 
            images={heroImages}
            autoPlay={true}
            autoPlayInterval={4000}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
