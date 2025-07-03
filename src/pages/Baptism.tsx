import React from 'react';
import { Link } from 'react-router-dom';
import './OccasionPage.css';

const Baptism: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/baptism/img${i + 1}.jpg`,
    title: `Baptism Style ${i + 1}`,
    description: `Celebrate with style and grace — option ${i + 1}`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Baptism Celebrations</h1>
            <p className="lead">
              Mark this sacred milestone with meaningful celebrations that honor faith and family.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                {imageList.map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={img.src} alt={img.title} />
                    <div className="gallery-item-content">
                      <h4>{img.title}</h4>
                      <p>{img.description}</p>
                      <Link to="/contact" className="btn btn-primary">
                        Inquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Baptism;