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

import React from 'react';
import './OccasionPage.css';

const Wedding: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/wedding/img${i + 1}.jpg`,
  }));

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
                {imageList.map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <div className="image-wrapper">
                      <img src={img.src} alt={`Wedding Style ${index + 1}`} />
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

export default Wedding;