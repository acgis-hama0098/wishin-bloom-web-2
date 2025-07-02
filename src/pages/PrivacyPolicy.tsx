
import React from 'react';
import './PolicyPages.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="policy-page">
      <section className="section">
        <div className="container">
          <div className="policy-hero">
            <h1>Privacy Policy</h1>
            <p className="lead">
              We are committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="policy-content">
            <h2>Information We Collect</h2>
            <ul>
              <li>Personal information you provide when creating an account</li>
              <li>Order and payment information for purchases</li>
              <li>Communication preferences and contact details</li>
              <li>Website usage data and analytics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To process and fulfill your orders</li>
              <li>To provide customer support and communication</li>
              <li>To improve our services and user experience</li>
              <li>To send promotional materials (with your consent)</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. 
              Your data is encrypted and stored securely.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@occasions.com.
            </p>

            <p className="last-updated">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
