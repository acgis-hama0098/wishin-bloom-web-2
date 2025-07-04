
import React from 'react';
import Slideshow from './Slideshow';
import './Hero.css';

const Hero: React.FC = () => {
  const heroImages = [
  '/images/home/slide1.jpg',
  '/images/home/slide2.jpg',
  '/images/home/slide3.jpg',
  '/images/home/slide4.jpg',
  '/images/home/slide5.jpg',
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
          {/* <div className="hero-buttons">
            <a href="/learn-more" className="btn btn-secondary">Learn More</a>
          </div> */}
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
