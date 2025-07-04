// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OccasionPage.css';

// const Graduation: React.FC = () => {
//   return (
//     <div className="occasion-page">
//       <section className="section">
//         <div className="container">
//           <div className="occasion-hero">
//             <h1>Graduation Celebrations</h1>
//             <p className="lead">Honor academic achievements with memorable graduation celebrations that mark this important milestone.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="occasion-content">
//             <div className="occasion-gallery">
//               <div className="gallery-grid">
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="High School Graduation" />
//                   <div className="gallery-item-content">
//                     <h4>High School Graduation</h4>
//                     <p>Celebrate the transition to adulthood with parties honoring years of hard work</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="College Graduation" />
//                   <div className="gallery-item-content">
//                     <h4>College Graduation</h4>
//                     <p>Honor degree achievements with sophisticated celebrations for graduates</p>
//                     <Link to="/contact" className="btn btn-primary">Inquire</Link>
//                   </div>
//                 </div>
                
//                 <div className="gallery-item">
//                   <img src="/placeholder.svg" alt="Graduate Degree" />
//                   <div className="gallery-item-content">
//                     <h4>Graduate Degree</h4>
//                     <p>Celebrate advanced degrees with elegant parties recognizing exceptional dedication</p>
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

// export default Graduation;

import React from 'react';
import './OccasionPage.css';

const Graduation: React.FC = () => {
  const imageList = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/graduation/img${i + 1}.jpg`,
  }));

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>Graduation Celebrations</h1>
            <p className="lead">
              Honor academic achievements with memorable graduation celebrations that mark this important milestone.
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
                      <img src={img.src} alt={`Graduation ${index + 1}`} />
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

export default Graduation;