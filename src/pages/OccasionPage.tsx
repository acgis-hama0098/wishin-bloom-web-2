
import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import './OccasionPage.css';

const OccasionPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const formatOccasionName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getOccasionImages = (occasionSlug: string) => {
    // Different image sets for different occasions
    const imageMap: { [key: string]: string[] } = {
      'wedding': [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&auto=format'
      ],
      'birthday': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&auto=format'
      ],
      'graduation': [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&auto=format'
      ]
    };
    
    return imageMap[occasionSlug] || [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format'
    ];
  };

  const getOccasionDescription = (occasionSlug: string) => {
    const descriptions: { [key: string]: string } = {
      'wedding': 'Your perfect wedding day deserves perfect planning. From intimate ceremonies to grand celebrations, we help create the wedding of your dreams.',
      'birthday': 'Make birthdays unforgettable with personalized celebrations that reflect the unique personality of the birthday star.',
      'graduation': 'Celebrate academic achievements and new beginnings with memorable graduation parties that honor this important milestone.',
      'anniversary': 'Honor your love story with anniversary celebrations that remind you of your beautiful journey together.',
      'baby-shower': 'Welcome new life with joy and celebration. Our baby shower planning ensures a beautiful and memorable event.',
      'christmas': 'Create magical Christmas celebrations filled with warmth, joy, and unforgettable family moments.',
      'valentine-day': 'Express your love with romantic celebrations that capture the essence of your relationship.',
      'mothers-day': 'Honor the special women in your life with thoughtful celebrations that show your appreciation.',
      'easter': 'Celebrate renewal and new beginnings with Easter gatherings that bring family and friends together.',
      'halloween': 'Create spook-tacular Halloween celebrations that are both thrilling and fun for all ages.',
      'new-year': 'Ring in the new year with style and celebration, making resolutions and memories that last.',
      'baptism': 'Mark this sacred milestone with meaningful celebrations that honor faith and family.'
    };
    
    return descriptions[occasionSlug] || 'Create beautiful memories with our professional event planning services tailored to your special occasion.';
  };

  if (!name) {
    return (
      <div className="occasion-page">
        <div className="container">
          <h1>Occasion not found</h1>
        </div>
      </div>
    );
  }

  const occasionName = formatOccasionName(name);
  const occasionImages = getOccasionImages(name);
  const occasionDescription = getOccasionDescription(name);

  return (
    <div className="occasion-page">
      <section className="section">
        <div className="container">
          <div className="occasion-hero">
            <h1>{occasionName} Celebrations</h1>
            <p className="lead">{occasionDescription}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="occasion-content">
            <div className="occasion-slideshow">
              <Slideshow 
                images={occasionImages}
                autoPlay={true}
                autoPlayInterval={4000}
                showControls={true}
                showIndicators={true}
              />
            </div>
            
            <div className="occasion-details">
              <h2>Why Choose Us for Your {occasionName}?</h2>
              <div className="detail-list">
                <div className="detail-item">
                  <div className="detail-icon">✨</div>
                  <div>
                    <h4>Personalized Planning</h4>
                    <p>Every {occasionName.toLowerCase()} is unique, and we tailor our services to your specific vision and needs.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>From the smallest decorative touches to major logistics, we ensure everything is perfect.</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h4>Full Support</h4>
                    <p>Our team is with you every step of the way, from initial planning to the final celebration.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary">Plan Your {occasionName}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="occasion-services">
            <h2>Our {occasionName} Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h4>Event Design</h4>
                <p>Custom themes and decorations that reflect your style</p>
              </div>
              <div className="service-item">
                <h4>Venue Selection</h4>
                <p>Finding the perfect location for your celebration</p>
              </div>
              <div className="service-item">
                <h4>Vendor Coordination</h4>
                <p>Managing all suppliers and service providers</p>
              </div>
              <div className="service-item">
                <h4>Day-of Coordination</h4>
                <p>Ensuring everything runs smoothly on your special day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OccasionPage;
