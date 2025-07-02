
import React from 'react';
import './PolicyPages.css';

const TermsOfService: React.FC = () => {
  return (
    <div className="policy-page">
      <section className="section">
        <div className="container">
          <div className="policy-hero">
            <h1>Terms of Service</h1>
            <p className="lead">
              By using our services, you agree to these Terms of Service.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="policy-content">
            <h2>Use of Services</h2>
            <ul>
              <li>You must be at least 18 years old to use our services</li>
              <li>You are responsible for maintaining account security</li>
              <li>You agree to provide accurate information</li>
              <li>You will not use our services for illegal activities</li>
            </ul>

            <h2>Orders and Payments</h2>
            <ul>
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to cancel orders at our discretion</li>
            </ul>

            <h2>Intellectual Property</h2>
            <ul>
              <li>All content on our website is owned by Occasions</li>
              <li>You may not reproduce or distribute our content without permission</li>
              <li>User-generated content may be used by Occasions for promotional purposes</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Occasions is not liable for indirect, incidental, or consequential damages 
              arising from use of our services.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions about these Terms, contact us at legal@occasions.com.
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

export default TermsOfService;
