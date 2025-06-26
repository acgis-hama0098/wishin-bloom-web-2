
import React from 'react';

const About = () => {
  return (
    <>
      <link rel="stylesheet" href="/src/styles/WishInBloom.css" />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">WishIn Bloom</a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">Occasions ▼</a>
              <div className="dropdown-content">
                <a href="/baptism">Baptism</a>
                <a href="/mothers-day">Mother's Day</a>
                <a href="/christmas">Christmas</a>
                <a href="/communion">First Communion</a>
                <a href="/baby-shower">Baby Shower</a>
                <a href="/anniversary">Anniversary</a>
                <a href="/valentines-day">Valentine's Day</a>
                <a href="/easter">Easter</a>
                <a href="/graduation">Graduation</a>
                <a href="/engagement">Engagement</a>
                <a href="/new-year">New Year</a>
                <a href="/retirement">Retirement</a>
                <a href="/casual-gifts">Casual Gifts</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <h1>About WishIn Bloom</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <section>
          <h2 className="about-section-title">Our Story</h2>
          <p className="about-paragraph">
            At WishIn Bloom, we believe that every special moment in life deserves to be celebrated with something truly meaningful. Our journey began with a simple passion: creating handcrafted gifts that carry the weight of love, thoughtfulness, and genuine care.
          </p>
          <p className="about-paragraph-margin">
            Each piece we create is more than just a gift—it's a heartfelt expression designed to bloom with meaning in the lives of those who receive it. From the tender moments of a baptism to the joyous celebration of graduation, we understand that life's milestones deserve something as unique as the people celebrating them.
          </p>
        </section>

        <section className="about-handcrafted-section">
          <h2 className="about-section-title-deep-plum">Our Handcrafted Approach</h2>
          <p className="about-section-paragraph">
            Every creation at WishIn Bloom is carefully handcrafted with attention to detail that only comes from genuine care and passion. We source the finest materials and combine traditional techniques with modern artistry to create pieces that are both beautiful and meaningful.
          </p>
          <p className="about-section-paragraph">
            Our artisans take pride in creating unique pieces that reflect the significance of each occasion. Whether it's incorporating personal touches, selecting the perfect color palette, or adding custom elements, we ensure that every gift tells its own special story.
          </p>
        </section>

        <section className="about-why-section">
          <h2 className="about-why-title">Why Choose WishIn Bloom?</h2>
          <ul className="about-why-list">
            <li className="about-why-list-item">
              <span className="about-why-icon">🌸</span>
              <strong>Personalized Attention:</strong> Each order receives individual care and attention to ensure it perfectly captures your intentions.
            </li>
            <li className="about-why-list-item">
              <span className="about-why-icon">🌸</span>
              <strong>Quality Materials:</strong> We use only the finest materials to ensure your gifts are as enduring as the memories they represent.
            </li>
            <li className="about-why-list-item">
              <span className="about-why-icon">🌸</span>
              <strong>Meaningful Design:</strong> Every element is thoughtfully chosen to reflect the significance of your special occasion.
            </li>
            <li className="about-why-list-item">
              <span className="about-why-icon">🌸</span>
              <strong>Custom Options:</strong> We work with you to create truly unique pieces that perfectly suit your needs and preferences.
            </li>
          </ul>
        </section>

        <section className="about-cta-section">
          <h2 className="about-cta-title">Let's Create Something Beautiful Together</h2>
          <p className="about-cta-paragraph">
            Ready to find the perfect gift that will bloom with meaning? We'd love to help you create something truly special for your next celebration.
          </p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WishIn Bloom</h3>
            <p>Where Every Gift Blooms with Meaning</p>
            <p>Handcrafted with love for life's special moments.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className="footer-section">
            <h3>Policies</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/shipping-policy">Shipping Policy</a>
            <a href="/refund-policy">Return & Refund Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 WishIn Bloom. All rights reserved.</p>
        </div>
      </footer>

      <script src="/src/scripts/WishInBloom.js"></script>
    </>
  );
};

export default About;
