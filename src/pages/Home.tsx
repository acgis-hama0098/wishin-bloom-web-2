import React from 'react';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import SEO from '../components/SEO';
import './Home.css';
const Home: React.FC = () => {
  const featuredImages = ['https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format', 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format'];
  return (
    <>
      <SEO 
        title="Home"
        description="Professional event planning services for weddings, birthdays, anniversaries, and all of life's special occasions. Make every moment memorable with our expert planning team."
        keywords="event planning, wedding planner, birthday parties, anniversary celebrations, special occasions, event coordinator"
      />
      <div className="home">
      <Hero />
      
      <section className="section section-alt">
        <div className="container">
          <div className="features">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎉</div>
                <h3>Expert Planning</h3>
                <p>Professional guidance for every type of celebration</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💝</div>
                <h3>Personal Touch</h3>
                <p>Customized solutions for your unique vision</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Memorable Moments</h3>
                <p>Creating experiences that last a lifetime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default Home;