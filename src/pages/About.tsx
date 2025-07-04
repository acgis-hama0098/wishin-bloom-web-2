import React from 'react';
import SEO from '../components/SEO';
import './About.css';
const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about our story, passion for event planning, and commitment to creating memorable celebrations. From handmade gifts to full event coordination, we bring love to every detail."
        keywords="about us, event planning story, handmade celebrations, sustainable events, community support, family business"
      />
      <div className="about">
      <section className="section bg-[#a7e3d8]">
        <div className="container bg-[#a7e3d8]/[0.84]">
          <div className="about-hero">
            <h1>About Occasions</h1>
            <p className="lead font-bold">
              We believe every moment deserves to be celebrated with love, 
              care, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p className="text-justify">Since as far back as I can remember, I’ve been creating handmade gifts, party favors, invitations, and decorations for life’s special moments. What began as a passion soon became something more especially when my tiny helper, my daughter, joined me. With her innocent creativity and curious heart, she helped bring our shared vision to life. Together, we poured love into every piece, making each item not just beautiful, but meaningful. This work did more than fill our days, it strengthened the bond between us. Through the art of creation, we built not just a small business, but a life filled with joy, laughter, and connection. As a single mother, raising my only daughter came with challenges. But what kept us grounded and grateful was the happiness we were able to share with others. Our clients welcomed us into their most cherished moments; weddings, baptisms, birthdays, and more. Some even invited us to their celebrations, turning strangers into friends and work into lasting memories. These experiences carried us through the hardest of times and became the foundation of our story.</p>
              <p className="text-justify">Nature has always been a gentle guide in our creative journey. The colors, textures, and harmony of the natural world inspire everything we make. We are friendly users of what nature offers always with respect, care, and a heart for sustainability.

Beyond our love for design, we believe in giving back. Our small business proudly contributes to the community by supporting people with disabilities, offering them opportunities to work with us in ways that honor their abilities and dignity.

Every item we make carries a story : ours, and now, yours. Thank you for letting us be a part of your beautiful moments.</p>
            </div>
            
            {/* <div className="about-image">
              <img src="/images/about/img1.jpg" alt="Mother and daughter working together on handmade event decorations and planning materials" />
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Event Planning</h3>
              <p>
                Comprehensive planning services from concept to execution, 
                ensuring every detail is perfect.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Coordination</h3>
              <p>
                Day-of coordination to ensure your event runs smoothly, 
                allowing you to enjoy every moment.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Consulting</h3>
              <p>
                Expert advice and guidance to help you make the best 
                decisions for your special occasion.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Vendor Network</h3>
              <p>
                Access to our trusted network of vendors and suppliers 
                for all your event needs.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section section-alt">
        <div className="container">
          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💎</div>
                <h4>Excellence</h4>
                <p>We strive for perfection in every detail</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Trust</h4>
                <p>Building lasting relationships with our clients</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h4>Creativity</h4>
                <p>Bringing innovative ideas to every celebration</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h4>Passion</h4>
                <p>Love for what we do shows in every event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default About;