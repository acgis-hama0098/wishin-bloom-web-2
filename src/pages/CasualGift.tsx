// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const CasualGift: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Casual Gift Celebrations</h1>
//             <p className="lead">Celebrate everyday moments and spontaneous gestures with thoughtfully planned casual gift occasions.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Just Because Party" />
//                   <div className="gallery-item-content">
//                     <h4>Just Because Party</h4>
//                     <p>Spontaneous celebrations to show appreciation and create unexpected joy</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Friendship Celebration" />
//                   <div className="gallery-item-content">
//                     <h4>Friendship Celebration</h4>
//                     <p>Casual gatherings to celebrate special friendships and meaningful connections</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Surprise Gesture" />
//                   <div className="gallery-item-content">
//                     <h4>Surprise Gesture</h4>
//                     <p>Thoughtful surprise celebrations for life's everyday victories and moments</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default CasualGift;

// import React from 'react';
// import './OccasionPage.css';

// const CasualGift: React.FC = () => {
//   const imageList = Array.from({ length: 20 }, (_, i) => ({
//     src: `/images/casual-gift/img${i + 1}.jpg`,
//   }));

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Casual Gift Celebrations</h1>
//             <p className="lead">
//               Celebrate everyday moments and spontaneous gestures with thoughtfully planned casual gift occasions.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 {imageList.map((img, index) => (
//                   <div className="gallery-item" key={index}>
//                     <div className="image-wrapper">
//                       <img src={img.src} alt={`Casual Gift ${index + 1}`} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CasualGift;

import React, { useState } from 'react';
import './OccasionPage.css';

const CasualGift: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 images

  const totalImages = 50; // Adjust this to match your actual image count
  const imageList = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/casual-gift/img${i + 1}.jpg`,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, totalImages));
  };

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Casual Gift Celebrations</h1>
            <p className="lead">
              Celebrate everyday moments and spontaneous gestures with thoughtfully planned casual gift occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-gallery">
              <div className="gallery-grid">
                {imageList.slice(0, visibleCount).map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <div className="image-wrapper">
                      <img src={img.src} alt={`Casual Gift ${index + 1}`} />
                      <button
                        className="zoom-button"
                        onClick={() => setLightboxImage(img.src)}
                        aria-label="Zoom image"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < totalImages && (
                <div className="load-more-container">
                  <button className="load-more-button" onClick={handleLoadMore}>
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img src={lightboxImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CasualGift;