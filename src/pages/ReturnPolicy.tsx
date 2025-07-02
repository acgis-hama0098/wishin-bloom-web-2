
import React from 'react';
import './PolicyPages.css';

const ReturnPolicy: React.FC = () => {
  return (
    <div className="policy-page">
      <section className="section">
        <div className="container">
          <div className="policy-hero">
            <h1>Return Policy</h1>
            <p className="lead">
              We want you to be completely satisfied with your purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="policy-content">
            <h2>Return Eligibility</h2>
            <ul>
              <li>Items must be returned within 30 days of purchase</li>
              <li>Items must be in original condition and packaging</li>
              <li>Custom or personalized items cannot be returned</li>
              <li>Sale items are final sale unless defective</li>
            </ul>

            <h2>Return Process</h2>
            <ol>
              <li>Contact our customer service team</li>
              <li>Receive a return authorization number</li>
              <li>Package items securely with original packaging</li>
              <li>Ship using the provided return label</li>
            </ol>

            <h2>Refunds</h2>
            <ul>
              <li>Refunds will be processed within 5-7 business days</li>
              <li>Original shipping costs are non-refundable</li>
              <li>Return shipping costs are the customer's responsibility</li>
              <li>Refunds will be issued to the original payment method</li>
            </ul>

            <h2>Exchanges</h2>
            <ul>
              <li>We offer exchanges for different sizes or colors</li>
              <li>Exchange requests must be made within 30 days</li>
              <li>Additional shipping charges may apply for exchanges</li>
            </ul>

            <h2>Damaged Items</h2>
            <p>
              If you receive a damaged item, please contact us immediately with photos of the damage.
            </p>

            <h2>Contact Us</h2>
            <p>
              For return questions, contact us at returns@occasions.com or call 1-800-OCCASIONS.
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

export default ReturnPolicy;
