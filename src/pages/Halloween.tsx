
import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const Halloween: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Halloween Celebrations</h1>
            <p className="lead">Create spooktacular Halloween memories with our creative and fun celebration planning services.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Halloween Party" />
                  <div className="gallery-item-content">
                    <h4>Halloween Party</h4>
                    <p>Spooky and fun Halloween parties with creative decorations and themed activities</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Haunted House Experience" />
                  <div className="gallery-item-content">
                    <h4>Haunted House Experience</h4>
                    <p>Thrilling haunted house setups that create unforgettable scary experiences</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Costume Contest Event" />
                  <div className="gallery-item-content">
                    <h4>Costume Contest Event</h4>
                    <p>Exciting costume contests with prizes and entertainment for all ages</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Halloween;
