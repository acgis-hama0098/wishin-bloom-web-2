import React from "react";
import "./WhatsNew.css";

const WhatsNew = () => {
  return (
    <div className="whats-new">
  <div className="whats-new-row">
    <h2 className="whats-new-title">What's New</h2>

    <div className="update-card">
      <img
        src="/images/kits/raccoon-kit.jpg"
        alt="Raccoon kit"
        className="kit-image"
      />
      <div className="update-content">
        <h3 className="spooky-title">Raccoon Kit</h3>
        <p>Discover our latest raccoon-themed kit designed for cozy autumn vibes.</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default WhatsNew;