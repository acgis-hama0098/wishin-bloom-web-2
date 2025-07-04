// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const Thanksgiving: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Thanksgiving Celebrations</h1>
//             <p className="lead">Gather with gratitude for meaningful Thanksgiving celebrations filled with warmth, family, and thankfulness.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Family Thanksgiving" />
//                   <div className="gallery-item-content">
//                     <h4>Family Thanksgiving</h4>
//                     <p>Traditional family gatherings with autumn decorations and gratitude-focused celebrations</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Friendsgiving Party" />
//                   <div className="gallery-item-content">
//                     <h4>Friendsgiving Party</h4>
//                     <p>Modern celebrations with chosen family and friends sharing gratitude and good food</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Harvest Feast" />
//                   <div className="gallery-item-content">
//                     <h4>Harvest Feast</h4>
//                     <p>Abundant celebrations featuring seasonal ingredients and autumn harvest themes</p>
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

// export default Thanksgiving;

import React from 'react';
import './OccasionPage.css';

const Thanksgiving: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/thanksgiving/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Thanksgiving Celebrations</h1>
            <p className="lead">
              Gather with gratitude for meaningful Thanksgiving celebrations filled with warmth, family, and thankfulness.
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
                      <img src={img.src} alt={`Thanksgiving ${index + 1}`} />
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

export default Thanksgiving;