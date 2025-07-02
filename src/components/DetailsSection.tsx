import React from 'react';
import { DetailItem } from '../types/occasion';

interface DetailsSectionProps {
  title: string;
  items: DetailItem[];
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ title, items }) => {
  return (
    <div className="occasion-details">
      <h2>{title}</h2>
      <div className="detail-list">
        {items.map((item) => (
          <div key={item.id} className="detail-item">
            <div className="detail-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;