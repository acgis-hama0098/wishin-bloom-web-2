import React from 'react';
import { ServiceItem } from '../types/occasion';

interface ServicesSectionProps {
  title: string;
  items: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, items }) => {
  return (
    <div className="occasion-services">
      <h2>{title}</h2>
      <div className="services-grid">
        {items.map((item) => (
          <div key={item.id} className="service-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;