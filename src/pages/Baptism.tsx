
import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const Baptism: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Baptism Celebrations</h1>
            <p className="lead">Mark this sacred milestone with meaningful celebrations that honor faith and family.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Traditional Baptism" />
                  <div className="gallery-item-content">
                    <h4>Traditional Baptism</h4>
                    <p>Classic baptism celebrations with elegant decorations and meaningful touches</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Family Baptism Gathering" />
                  <div className="gallery-item-content">
                    <h4>Family Baptism Gathering</h4>
                    <p>Intimate family celebrations following the baptism ceremony</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Modern Baptism Reception" />
                  <div className="gallery-item-content">
                    <h4>Modern Baptism Reception</h4>
                    <p>Contemporary baptism receptions with stylish decorations and catering</p>
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

export default Baptism;
