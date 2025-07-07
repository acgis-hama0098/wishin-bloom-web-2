import React from 'react';
import SEO from '../components/SEO';
import './LearnMore.css';

const LearnMore: React.FC = () => {
  return (
    <>
      <SEO 
        title="Learn More - WishIn Bloom"
        description="Discover our comprehensive event planning services, from custom floral arrangements to personalized gifts. Learn why clients choose WishIn Bloom for their special occasions."
        keywords="event planning services, custom floral arrangements, personalized gifts, venue selection, themed decorations"
      />
      <div className="learn-more">
        {/* Introduction Section */}
        <section className="section intro-section">
          <div className="container">
            <div className="intro-content">
              <h1>Welcome to WishIn Bloom</h1>
              <p className="intro-text">
                Where every gift blooms with meaning and every celebration becomes an unforgettable memory. 
                We are passionate about creating beautiful, personalized experiences that reflect your unique 
                style and celebrate life's most precious moments.
              </p>
              <p>
                Our mission is to transform your vision into reality, providing comprehensive event planning 
                services that take care of every detail so you can focus on what matters most enjoying 
                your special day with loved ones.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section section-alt">
          <div className="container">
            <h2>What We Offer</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎉</div>
                <h3>Event Planning</h3>
                <p>Complete event coordination from concept to execution, ensuring every detail is perfectly managed for your special day.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🌸</div>
                <h3>Custom Floral Arrangements</h3>
                <p>Beautiful, personalized floral designs that complement your theme and create stunning visual impact.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>Themed Decorations</h3>
                <p>Creative decoration solutions that transform any space into a magical setting for your celebration.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💝</div>
                <h3>Personalized Gifts</h3>
                <p>Thoughtful, custom gift solutions that add a personal touch and create lasting memories for your guests.</p>
              </div>
              {/* <div className="service-card">
                <div className="service-icon">🏛️</div>
                <h3>Venue Selection</h3>
                <p>Expert guidance in finding the perfect venue that matches your vision, style, and budget requirements.</p>
              </div> */}
            </div>
          </div>
        </section>

        {/*Client Testimonials*/}
        <section className="section testimonials-section">
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>'WishIn Bloom made my daughter’s birthday feel like a fairytale. Every detail was perfect.'</p>
                <div className="client-info">
                  <strong>Aida M. </strong>
                  <span>Birthday Celebration</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>'WishIn Bloom helped us honour our loved one’s memory with grace and beauty.'</p>
                <div className="client-info">
                  <strong>Najwa B.</strong>
                  <span>Memorial</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>'I’ve never seen a more thoughtful xmas gift arrangement.'</p>
                <div className="client-info">
                  <strong>Val S.</strong>
                  <span>Christmas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview
        <section className="section section-alt gallery-section">
          <div className="container">
            <h2>Gallery Preview</h2>
            <p className="gallery-intro">Explore some of our recent work and get inspired for your upcoming celebration.</p>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/wedding/wedding1.jpg" alt="Beautiful wedding celebration" />
                <div className="gallery-overlay">
                  <span>Wedding Celebrations</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&auto=format" alt="Birthday party setup" />
                <div className="gallery-overlay">
                  <span>Birthday Parties</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format" alt="Anniversary celebration" />
                <div className="gallery-overlay">
                  <span>Anniversary Events</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&auto=format" alt="Event venue decoration" />
                <div className="gallery-overlay">
                  <span>Venue Decorations</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Info
        <section className="section contact-info-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>hello@wishinbloom.com</p>
                <p>events@wishinbloom.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
                <p>Mon-Fri: 9AM-6PM</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🌐</div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                  <a href="#" aria-label="Pinterest">Pinterest</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section className="section section-alt faq-section"> */}
          {/* <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How far in advance should I book your services?</h3>
                <p>We recommend booking at least 2-3 months in advance for larger events like weddings and major celebrations. For smaller gatherings, 4-6 weeks notice is usually sufficient. However, we're always happy to discuss last-minute requests and will do our best to accommodate your needs.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide services for all types of occasions?</h3>
                <p>Yes! We specialize in a wide range of celebrations including weddings, birthdays, anniversaries, baby showers, graduations, holiday parties, and corporate events. Each event is uniquely planned to match your specific vision and requirements.</p>
              </div>
              <div className="faq-item">
                <h3>What's included in your event planning packages?</h3>
                <p>Our packages are customizable based on your needs, but typically include consultation and planning, vendor coordination, timeline creation, day-of coordination, and follow-up. We also offer additional services like floral design, decoration, and personalized gift creation.</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default LearnMore;