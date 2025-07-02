import React from 'react';
import SEO from './SEO';
import GalleryGrid from './GalleryGrid';
import DetailsSection from './DetailsSection';
import ServicesSection from './ServicesSection';
import { OccasionData } from '../types/occasion';
import '../pages/OccasionPage.css';

interface OccasionTemplateProps {
  data: OccasionData;
}

const OccasionTemplate: React.FC<OccasionTemplateProps> = ({ data }) => {
  return (
    <>
      <SEO 
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.seoKeywords}
      />
      <div className="occasion-page">
        <section className="section">
          <div className="container">
            <div className="occasion-hero">
              <h1>{data.title}</h1>
              <p className="lead">{data.description}</p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="occasion-content">
              <GalleryGrid items={data.galleryItems} />
            </div>
          </div>
        </section>

        {data.serviceItems && data.serviceItems.length > 0 && (
          <section className="section">
            <div className="container">
              <ServicesSection title={data.servicesTitle} items={data.serviceItems} />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default OccasionTemplate;