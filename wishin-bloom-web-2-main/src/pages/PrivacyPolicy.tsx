
import React from 'react';

const PrivacyPolicy = () => {
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
        <h1>Privacy Policy</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <div className="privacy-section">
          <p className="privacy-effective-date">
            <strong>Effective Date:</strong> [Date]
          </p>
          
          <h2 className="privacy-section-heading">Information We Collect</h2>
          <p className="privacy-section-paragraph">
            When you contact us through our website or place a custom order, we may collect personal information such as your name, email address, phone number, and details about your custom gift requirements. This information is collected solely to provide you with our handcrafted gift services.
          </p>

          <h2 className="privacy-section-heading">How We Use Your Information</h2>
          <p className="privacy-section-paragraph">
            We use the information you provide to:
          </p>
          <ul className="privacy-section-list">
            <li>Respond to your inquiries and communicate about your custom orders</li>
            <li>Create and deliver your personalized handcrafted gifts</li>
            <li>Provide customer service and support</li>
            <li>Send you updates about your order status (with your consent)</li>
          </ul>

          <h2 className="privacy-section-heading">Information Sharing</h2>
          <p className="privacy-section-paragraph">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only when necessary to fulfill your custom order (such as with shipping providers) or when required by law.
          </p>

          <h2 className="privacy-section-heading">Data Security</h2>
          <p className="privacy-section-paragraph">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="privacy-section-heading">Contact Us</h2>
          <p className="privacy-section-paragraph">
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="privacy-link">contact page</a>.
          </p>
        </div>
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

export default PrivacyPolicy;
