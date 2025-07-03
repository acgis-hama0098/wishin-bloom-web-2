
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
import React from 'react';
import './OccasionPage.css';

const Christmas: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/wishinbloom/images/christmas/img${i + 1}.jpg`,
  }));

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
                {imageList.map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <div className="image-wrapper">
                      <img src={img.src} alt={`Christmas ${index + 1}`} />
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

export default Christmas;
