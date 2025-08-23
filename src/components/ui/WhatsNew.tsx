import React from 'react';
import './WhatsNew.css';

const WhatsNew = () => {
  return (
    <div className="whats-new">
      <div className="container">
        <h1 className="section-title">What's New</h1>
        <div className="kit-card">
          <img
            src="/images/kits/raccoon-kit.jpg"
            alt="Raccoon Kit"
            className="kit-image"
          />
          <div className="kit-content">
            <p className="kit-quote">“So cozy, I loved the product so much.”</p>
            <p className="kit-author">— @flora</p>
            <h2 className="kit-title">Raccoon Kit</h2>
            <p className="kit-description">
              🍂 Cozy autumn vibes meet raccoon-themed charm in this delightful kit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;