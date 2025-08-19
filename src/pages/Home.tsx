import React from 'react';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import SEO from '../components/SEO';
import './Home.css';
import Subscription from '../components/Subscription';
// import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const featuredImages = [
    '/images/home/slide1.jpg',
    '/images/home/slide2.jpg',
    // '/images/home/slide3.jpg',
    '/images/home/slide4.jpg',
    '/images/home/slide5.jpg',
  ];

  return (
    <>
      <SEO
  title="Event Planning & Personalized Gifts | Special Gifts for All Occasions"
  description="Professional event planning and handcrafted, customized gifts for weddings, birthdays, anniversaries, and every special occasion. Discover meaningful celebrations and thoughtful gifting ideas."
  keywords="event planning, wedding planner, personalized gifts, custom gifts, special gifts, birthday presents, celebration design, Ottawa event coordinator, gifts for all occasions"
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

        {/* 👇 Add your subscription form here */}
        <Subscription />
        {/* <Testimonials /> */}

      </div>
    </>
  );
};

export default Home;