// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const CanadaDay: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Canada Day Celebrations</h1>
//             <p className="lead">Celebrate Canadian pride with patriotic parties featuring red and white themes and national spirit.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Backyard BBQ" />
//                   <div className="gallery-item-content">
//                     <h4>Backyard BBQ</h4>
//                     <p>Classic Canadian barbecue celebrations with maple leaf decorations and outdoor fun</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Community Festival" />
//                   <div className="gallery-item-content">
//                     <h4>Community Festival</h4>
//                     <p>Large gatherings celebrating Canadian heritage with games, music, and local culture</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Fireworks Party" />
//                   <div className="gallery-item-content">
//                     <h4>Fireworks Party</h4>
//                     <p>Evening celebrations with spectacular fireworks displays and Canadian pride</p>
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

// export default CanadaDay;

import React from 'react';
import './OccasionPage.css';

const CanadaDay: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/canadaday/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Canada Day Celebrations</h1>
            <p className="lead">
              Celebrate Canadian pride with patriotic parties featuring red and white themes and national spirit.
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
                      <img src={img.src} alt={`Canada Day ${index + 1}`} />
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

export default CanadaDay;