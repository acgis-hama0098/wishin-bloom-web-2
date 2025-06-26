
import React from 'react';

const TermsOfService = () => {
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
        <h1>Terms of Service</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <div className="tos-section">
          <p className="tos-effective-date">
            <strong>Effective Date:</strong> [Date]
          </p>
          
          <h2 className="tos-heading">Acceptance of Terms</h2>
          <p className="tos-paragraph">
            By accessing and using the WishIn Bloom website and services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="tos-heading">Custom Order Services</h2>
          <p className="tos-paragraph">
            WishIn Bloom specializes in handcrafted, custom-made gifts for special occasions. All items are made to order and may require lead time for completion. We will communicate estimated completion times when you place your order.
          </p>

          <h2 className="tos-heading">Order Process</h2>
          <ul className="tos-list">
            <li>Initial consultation to discuss your custom gift requirements</li>
            <li>Written confirmation of order details and pricing</li>
            <li>Production timeline and delivery arrangements</li>
            <li>Payment terms will be communicated during the order process</li>
          </ul>

          <h2 className="tos-heading">Intellectual Property</h2>
          <p className="tos-paragraph">
            All custom designs created by WishIn Bloom remain the intellectual property of WishIn Bloom unless otherwise agreed upon in writing.
          </p>

          <h2 className="tos-heading">Limitation of Liability</h2>
          <p className="tos-paragraph">
            WishIn Bloom's liability is limited to the cost of the custom item ordered. We are not liable for any indirect, incidental, or consequential damages.
          </p>

          <h2 className="tos-heading">Contact Information</h2>
          <p className="tos-paragraph">
            For questions about these Terms of Service, please contact us through our <a href="/contact" className="tos-link">contact page</a>.
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

export default TermsOfService;
