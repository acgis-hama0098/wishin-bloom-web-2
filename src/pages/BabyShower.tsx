// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const BabyShower: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Baby Shower Celebrations</h1>
//             <p className="lead">Welcome new arrivals with beautiful baby shower celebrations filled with joy, love, and anticipation.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Traditional Baby Shower" />
//                   <div className="gallery-item-content">
//                     <h4>Traditional Baby Shower</h4>
//                     <p>Classic celebrations with games, gifts, and sweet decorations for expecting parents</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Gender Reveal Party" />
//                   <div className="gallery-item-content">
//                     <h4>Gender Reveal Party</h4>
//                     <p>Exciting celebrations revealing baby's gender with creative and memorable surprises</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Co-ed Baby Shower" />
//                   <div className="gallery-item-content">
//                     <h4>Co-ed Baby Shower</h4>
//                     <p>Modern celebrations including both parents and all friends in welcoming baby</p>
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

// export default BabyShower;

import React from 'react';
import './OccasionPage.css';

const BabyShower: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/babyshower/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Baby Shower Celebrations</h1>
            <p className="lead">
              Welcome new arrivals with beautiful baby shower celebrations filled with joy, love, and anticipation.
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
                      <img src={img.src} alt={`Baby Shower ${index + 1}`} />
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

export default BabyShower;