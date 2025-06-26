
import React from 'react';

const RefundPolicy = () => {
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
        <h1>Return & Refund Policy</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <div className="refund-policy-section">
          <p className="refund-effective-date">
            <strong>Effective Date:</strong> [Date]
          </p>
          
          <h2 className="refund-section-title">Custom Order Policy</h2>
          <p className="refund-section-margin-bottom">
            As all WishIn Bloom items are custom-made and handcrafted specifically for each customer, we generally do not accept returns or offer refunds on completed custom orders. Each piece is created uniquely according to your specifications and requirements.
          </p>

          <h2 className="refund-section-title">Quality Guarantee</h2>
          <p className="refund-section-paragraph">
            We stand behind the quality of our craftsmanship. If your item arrives damaged due to shipping or has a manufacturing defect, please contact us within 48 hours of delivery. We will work with you to resolve the issue, which may include:
          </p>
          <ul className="refund-policy-list">
            <li>Repair or replacement of the damaged item</li>
            <li>Partial or full refund (at our discretion)</li>
            <li>Store credit for future purchases</li>
          </ul>

          <h2 className="refund-section-title">Order Modifications</h2>
          <p className="refund-section-margin-bottom">
            Changes to your custom order can only be made before production begins. Once we start crafting your item, modifications may not be possible. Please review your order details carefully before confirmation.
          </p>

          <h2 className="refund-section-header">Cancellation Policy</h2>
          <p className="refund-section-paragraph-bottom">
            Orders may be cancelled within 24 hours of placement, before production begins. Once production has started, cancellations may not be possible due to the custom nature of our work.
          </p>

          <h2 className="refund-section-header">Exceptional Circumstances</h2>
          <p className="refund-section-paragraph-bottom">
            We understand that sometimes unexpected situations arise. If you have concerns about your order, please reach out to us. We will review each situation individually and work with you to find a fair solution.
          </p>

          <h2 className="refund-section-header">How to Contact Us</h2>
          <p className="refund-section-paragraph-bottom">
            If you need to report an issue with your order or have questions about our return policy, please <a href="/contact" className="refund-contact-link">contact us</a> as soon as possible. Include your order details and photos if reporting damage.
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

export default RefundPolicy;
