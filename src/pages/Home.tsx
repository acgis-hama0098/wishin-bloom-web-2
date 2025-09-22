import React from 'react';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import SEO from '../components/SEO';
import './Home.css';
import Subscription from '../components/Subscription';
// import Testimonials from '../components/Testimonials';
// import WhatsNew from '../components/ui/WhatsNew';

const Home: React.FC = () => {
  const featuredImages = [
    '/images/home/slide1.jpg',
    '/images/home/slide2.jpg',
    '/images/home/slide3.jpg',
    '/images/home/slide4.jpg',
    '/images/home/slide5.jpg',
    '/images/home/slide6.jpg',
    '/images/home/slide7.jpg',
    '/images/home/slide8.jpg',
  ];

  return (
    <>
      {/* <SEO
  title="Event Planning & Personalized Gifts | Special Gifts for All Occasions"
  description="Professional event planning and handcrafted, customized gifts for weddings, birthdays, anniversaries, and every special occasion. Discover meaningful celebrations and thoughtful gifting ideas."
  keywords="event planning, wedding planner, personalized gifts, custom gifts, special gifts, birthday presents, celebration design, Ottawa event coordinator, gifts for all occasions"
/> */}
<SEO
  title="WishIn Bloom | Personalized Gifts & Custom Creations for Every Occasion"
  description="Discover handcrafted and personalized gifts for weddings, birthdays, baptisms, anniversaries, holidays, and every special occasion. WishIn Bloom offers meaningful keepsakes, unique gift boxes, and thoughtful creations, with optional event planning support for memorable celebrations."
  keywords="personalized gifts, custom gifts, handcrafted gifts, unique gifts, Ottawa gift shop, Canadian gift shop, birthday gifts, wedding gifts, baptism keepsakes, anniversary gifts, holiday gifts, Christmas gifts, Mother's Day gifts, Father's Day gifts, special occasion gifts, gift boxes, gift baskets, favors, décor, meaningful keepsakes, thoughtful presents, Ottawa gifts, Ottawa Makers, Ottawa vendors, Do it yourself, DIY gifts, event planning, event support, celebration design, Ottawa event coordinator"
/>


      <div className="home">
        <Hero />
        {/* <WhatsNew /> */}

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