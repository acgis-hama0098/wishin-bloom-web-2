
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const Christmas: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Christmas Celebrations</h1>
//             <p className="lead">Create magical Christmas memories with our festive celebration planning services.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Traditional Christmas Dinner" />
//                   <div className="gallery-item-content">
//                     <h4>Traditional Christmas Dinner</h4>
//                     <p>Classic Christmas celebrations with traditional decorations and festive dining</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Winter Wonderland Party" />
//                   <div className="gallery-item-content">
//                     <h4>Winter Wonderland Party</h4>
//                     <p>Magical winter-themed celebrations with snow-inspired decorations</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Corporate Christmas Event" />
//                   <div className="gallery-item-content">
//                     <h4>Corporate Christmas Event</h4>
//                     <p>Professional Christmas celebrations for businesses and organizations</p>
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

// export default Christmas;
// import React from 'react';
// import './OccasionPage.css';

// const Christmas: React.FC = () => {
//   const imageList = Array.from({ length: 20 }, (_, i) => ({
//     src: `/wishinbloom/images/christmas/img${i + 1}.jpg`,
//   }));

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Christmas Celebrations</h1>
//             <p className="lead">
//               Create magical Christmas memories with our festive celebration planning services.
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
//                       <img src={img.src} alt={`Christmas ${index + 1}`} />
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

// export default Christmas;
import React, { useState } from 'react';
import './OccasionPage.css';

const Christmas: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 images

  const totalImages = 50; // Adjust this to match your actual image count
  const imageList = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/christmas/img${i + 1}.jpg`,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, totalImages));
  };

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Christmas Celebrations</h1>
            <p className="lead">
              Create magical Christmas memories with our festive celebration planning services.
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
                      <img src={img.src} alt={`Christmas ${index + 1}`} />
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

export default Christmas;