
// import React from 'react';
// import OccasionTemplate from '../components/OccasionTemplate';
// import { useOccasionData } from '../hooks/useOccasionData';

// const Birthday: React.FC = () => {
//   const data = useOccasionData('birthday');
  
//   if (!data) {
//     return <div>Occasion data not found</div>;
//   }

//   return <OccasionTemplate data={data} />;
// };

// export default Birthday;
import React from 'react';
import './OccasionPage.css';

const Birthday: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/birthday/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Birthday Moments</h1>
            <p className="lead">
              Celebrate life’s milestones with joyful birthday arrangements and unforgettable memories.
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
                    <div className="image-wrapper">
                      <img src={img.src} alt={`Birthday ${index + 1}`} />
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

export default Birthday;