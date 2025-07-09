// // // // import React from 'react';
// // // // import OccasionTemplate from '../components/OccasionTemplate';
// // // // import { useOccasionData } from '../hooks/useOccasionData';

// // // // const Wedding: React.FC = () => {
// // // //   const data = useOccasionData('wedding');
  
// // // //   if (!data) {
// // // //     return <div>Occasion data not found</div>;
// // // //   }

// // // //   return <OccasionTemplate data={data} />;
// // // // };

// // // // export default Wedding;


// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './OccasionPage.css';

// // // const Wedding: React.FC = () => {
// // //   const imageList = Array.from({ length: 20 }, (_, i) => ({
// // //     src: `/wishinbloom/images/wedding/img${i + 1}.jpg`,
// // //     title: `Wedding Style ${i + 1}`,
// // //     description: `Celebrate love with elegance — option ${i + 1}`,
// // //   }));

// // //   return (
// // //     <div className="occasion-page">
// // //       <section className="section">
// // //         <div className="container">
// // //           <div className="occasion-hero">
// // //             <h1>Wedding Celebrations</h1>
// // //             <p className="lead">
// // //               Celebrate love with unforgettable moments, elegant settings, and timeless memories.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="section section-alt">
// // //         <div className="container">
// // //           <div className="occasion-content">
// // //             <div className="occasion-gallery">
// // //               <div className="gallery-grid">
// // //                 {imageList.map((img, index) => (
// // //                   <div className="gallery-item" key={index}>
// // //                     <img src={img.src} alt={img.title} />
// // //                     <div className="gallery-item-content">
// // //                       <h4>{img.title}</h4>
// // //                       <p>{img.description}</p>
// // //                       <Link to="/contact" className="btn btn-primary">
// // //                         Inquire
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Wedding;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './OccasionPage.css';

// // const Wedding: React.FC = () => {
// //   const imageList = Array.from({ length: 20 }, (_, i) => ({
// //     src: `/wishinbloom/images/wedding/img${i + 1}.jpg`,
// //   }));

// //   return (
// //     <div className="occasion-page">
// //       <section className="section">
// //         <div className="container">
// //           <div className="occasion-hero">
// //             <h1>Wedding Celebrations</h1>
// //             <p className="lead">
// //               Celebrate love with unforgettable moments, elegant settings, and timeless memories.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="section section-alt">
// //         <div className="container">
// //           <div className="occasion-content">
// //             <div className="occasion-gallery">
// //               <div className="gallery-grid">
// //                 {imageList.map((img, index) => (
// //                   <div className="gallery-item" key={index}>
// //                     <div className="image-wrapper">
// //                       <img src={img.src} alt={`Wedding Style ${index + 1}`} />
// //                     </div>
// //                     <div className="gallery-item-content">
// //                       <Link to="/contact" className="btn btn-primary">
// //                         Inquire
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Wedding;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './OccasionPage.css';

// // const Wedding: React.FC = () => {
// //   const imageList = Array.from({ length: 20 }, (_, i) => ({
// //     src: `/wishinbloom/images/wedding/img${i + 1}.jpg`,
// //   }));

// //   return (
// //     <div className="occasion-page">
// //       <section className="section">
// //         <div className="container">
// //           <div className="occasion-hero">
// //             <h1>Wedding Celebrations</h1>
// //             <p className="lead">
// //               Celebrate love with unforgettable moments, elegant settings, and timeless memories.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="section section-alt">
// //         <div className="container">
// //           <div className="occasion-content">
// //             <div className="occasion-gallery">
// //               <div className="gallery-grid">
// //                 {imageList.map((img, index) => (
// //                   <div className="gallery-item" key={index}>
// //                     <div className="image-wrapper">
// //                       <img src={img.src} alt={`Wedding Style ${index + 1}`} />
// //                     </div>
// //                     <div className="gallery-item-content">
// //                       <Link to="/contact" className="btn btn-primary">
// //                         Inquire
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Wedding;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const Wedding: React.FC = () => {
//   const imageList = Array.from({ length: 20 }, (_, i) => ({
//     src: `/wishinbloom/images/wedding/img${i + 1}.jpg`,
//   }));

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Wedding Celebrations</h1>
//             <p className="lead">
//               Celebrate love with unforgettable moments, elegant settings, and timeless memories.
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
//                       <img src={img.src} alt={`Wedding Style ${index + 1}`} />
//                     </div>
//                     <div className="gallery-item-content">
//                       <Link to="/contact" className="btn btn-primary">
//                         Inquire
//                       </Link>
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

// export default Wedding;

// import React from 'react';
// import './OccasionPage.css';

// const Wedding: React.FC = () => {
//   const imageList = Array.from({ length: 20 }, (_, i) => ({
//     src: `/images/wedding/img${i + 1}.jpg`,
//   }));

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Wedding Celebrations</h1>
//             <p className="lead">
//               Celebrate love with unforgettable moments, elegant settings, and timeless memories.
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
//                       <img src={img.src} alt={`Wedding Style ${index + 1}`} />
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

// export default Wedding;

import React, { useState } from 'react';
import './OccasionPage.css';

const Wedding: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 images

  const totalImages = 50; // Adjust this to match your actual image count
  const imageList = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/wedding/img${i + 1}.jpg`,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, totalImages));
  };

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Wedding Celebrations</h1>
            <p className="lead">
              Celebrate love with unforgettable moments, elegant settings, and timeless memories.
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
                      <img src={img.src} alt={`Wedding Style ${index + 1}`} />
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

export default Wedding;