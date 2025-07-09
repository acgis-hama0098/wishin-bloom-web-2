// // import React from 'react';
// // import './OccasionPage.css';

// // const Memorials: React.FC = () => {
// //   const imageList = Array.from({ length: 20 }, (_, i) => ({
// //     src: `/images/memorials/img${i + 1}.jpg`,
// //   }));

// //   return (
// //     <div className="occasion-page">
// //       <section className="section">
// //         <div className="container">
// //           <div className="occasion-hero">
// //             <h1>Memorial Tributes</h1>
// //             <p className="lead">
// //               Honor cherished lives with thoughtful arrangements, peaceful settings, and heartfelt remembrance.
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
// //                       <img src={img.src} alt={`Memorial Tribute ${index + 1}`} />
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

// // export default Memorials;

// import React, { useState } from 'react';
// import './OccasionPage.css';

// const Memorials: React.FC = () => {
//   const [lightboxImage, setLightboxImage] = useState<string | null>(null);

//   const imageList = Array.from({ length: 20 }, (_, i) => ({
//     src: `/images/memorials/img${i + 1}.jpg`,
//   }));

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Memorial Tributes</h1>
//             <p className="lead">
//               Honor cherished lives with thoughtful arrangements, peaceful settings, and heartfelt remembrance.
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
//                       <img src={img.src} alt={`Memorial Tribute ${index + 1}`} />
//                       <button
//                         className="zoom-button"
//                         onClick={() => setLightboxImage(img.src)}
//                         aria-label="Zoom image"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {lightboxImage && (
//         <div className="lightbox" onClick={() => setLightboxImage(null)}>
//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
//             <img src={lightboxImage} alt="Full size" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Memorials;

// import React, { useState } from 'react';
// import './OccasionPage.css';

// const Memorials: React.FC = () => {
//   const [lightboxImage, setLightboxImage] = useState<string | null>(null);
//   const [visibleCount, setVisibleCount] = useState(12); // Start with 12 images

//   const totalImages = 50; // Adjust this to match your actual image count
//   const imageList = Array.from({ length: totalImages }, (_, i) => ({
//     src: `/images/memorials/img${i + 1}.jpg`,
//   }));

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 12, totalImages));
//   };

//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Memorial Tributes</h1>
//             <p className="lead">
//               Honor cherished lives with thoughtful arrangements, peaceful settings, and heartfelt remembrance.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 {imageList.slice(0, visibleCount).map((img, index) => (
//                   <div className="gallery-item" key={index}>
//                     <div className="image-wrapper">
//                       <img src={img.src} alt={`Memorial Tribute ${index + 1}`} />
//                       <button
//                         className="zoom-button"
//                         onClick={() => setLightboxImage(img.src)}
//                         aria-label="Zoom image"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {visibleCount < totalImages && (
//                 <div className="load-more-container">
//                   <button className="load-more-button" onClick={handleLoadMore}>
//                     Load More
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {lightboxImage && (
//         <div className="lightbox" onClick={() => setLightboxImage(null)}>
//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
//             <img src={lightboxImage} alt="Full size" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Memorials;

import React, { useState } from 'react';
import './OccasionPage.css';

const Memorials: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 images

  const totalImages = 50; // Adjust this to match your actual image count
  const imageList = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/memorials/img${i + 1}.jpg`,
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, totalImages));
  };

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Memorial Tributes</h1>
            <p className="lead">
              Honor cherished lives with thoughtful arrangements, peaceful settings, and heartfelt remembrance.
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
                      <img src={img.src} alt={`Memorial Tribute ${index + 1}`} />
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

export default Memorials;