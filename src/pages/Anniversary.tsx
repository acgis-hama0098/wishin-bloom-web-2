// import React from 'react';
// import OccasionTemplate from '../components/OccasionTemplate';
// import { useOccasionData } from '../hooks/useOccasionData';

// const Anniversary: React.FC = () => {
//   const data = useOccasionData('anniversary');
  
//   if (!data) {
//     return <div>Occasion data not found</div>;
//   }

//   return <OccasionTemplate data={data} />;
// };

// export default Anniversary;

import React from 'react';
import './OccasionPage.css';

const Anniversary: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/anniversary/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Anniversary Celebrations</h1>
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
                    <div className="image-wrapper">
                      <img src={img.src} alt={`Anniversary ${index + 1}`} />
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

export default Anniversary;