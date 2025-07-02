import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItem } from '../types/occasion';

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="occasion-gallery">
      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.alt} />
            <div className="gallery-item-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to="/contact" className="btn btn-primary">Inquire</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;