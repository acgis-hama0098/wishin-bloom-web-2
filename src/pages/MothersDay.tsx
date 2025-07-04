
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const MothersDay: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Mother's Day Celebrations</h1>
//             <p className="lead">Honor the special mothers in your life with thoughtful and heartwarming celebrations.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Elegant Mother's Day Brunch" />
//                   <div className="gallery-item-content">
//                     <h4>Elegant Mother's Day Brunch</h4>
//                     <p>Beautiful brunch celebrations with elegant table settings and delicious food</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Garden Tea Party" />
//                   <div className="gallery-item-content">
//                     <h4>Garden Tea Party</h4>
//                     <p>Charming outdoor tea parties surrounded by beautiful flowers and nature</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Family Gathering" />
//                   <div className="gallery-item-content">
//                     <h4>Family Gathering</h4>
//                     <p>Intimate family celebrations that bring everyone together to honor mom</p>
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

// export default MothersDay;
import React from 'react';
import './OccasionPage.css';

const MothersDay: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/mothers-day/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Mother's Day Celebrations</h1>
            <p className="lead">
              Honor the special mothers in your life with thoughtful and heartwarming celebrations.
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
                      <img src={img.src} alt={`Mother's Day ${index + 1}`} />
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

export default MothersDay;