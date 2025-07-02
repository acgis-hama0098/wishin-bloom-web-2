
import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const Easter: React.FC = () => {
  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Easter Celebrations</h1>
            <p className="lead">Celebrate the joy of Easter with beautiful spring-themed celebrations and family gatherings.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Easter Brunch" />
                  <div className="gallery-item-content">
                    <h4>Easter Brunch</h4>
                    <p>Delightful Easter brunch celebrations with spring decorations and family fun</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Easter Egg Hunt" />
                  <div className="gallery-item-content">
                    <h4>Easter Egg Hunt</h4>
                    <p>Fun-filled Easter egg hunts for children with exciting games and prizes</p>
                    <Link to="/contact" className="btn btn-primary">Inquire</Link>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img src="/placeholder.svg" alt="Spring Garden Party" />
                  <div className="gallery-item-content">
                    <h4>Spring Garden Party</h4>
                    <p>Beautiful outdoor Easter celebrations surrounded by spring flowers and nature</p>
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

export default Easter;
