
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <link rel="stylesheet" href="/src/styles/WishInBloom.css" />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">{t.hero.title}</a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">{t.nav.home}</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">{t.nav.about}</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">{t.nav.occasions} ▼</a>
              <div className="dropdown-content">
                <a href="/baptism">{t.occasions.baptism}</a>
                <a href="/mothers-day">{t.occasions.mothersDay}</a>
                <a href="/christmas">{t.occasions.christmas}</a>
                <a href="/communion">{t.occasions.communion}</a>
                <a href="/baby-shower">{t.occasions.babyShower}</a>
                <a href="/anniversary">{t.occasions.anniversary}</a>
                <a href="/valentines-day">{t.occasions.valentinesDay}</a>
                <a href="/easter">{t.occasions.easter}</a>
                <a href="/graduation">{t.occasions.graduation}</a>
                <a href="/engagement">{t.occasions.engagement}</a>
                <a href="/new-year">{t.occasions.newYear}</a>
                <a href="/retirement">{t.occasions.retirement}</a>
                <a href="/casual-gifts">{t.occasions.casualGifts}</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">{t.nav.contact}</a>
            </li>
          </ul>
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p className="slogan">{t.hero.slogan}</p>
          <a href="#gallery" className="cta-button">{t.hero.cta}</a>
        </div>
      </section>

      {/* Slideshow */}
      <section className="slideshow-container">
        <div className="slide active">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Beautiful orange flowers arrangement" />
          <div className="slide-content">
            <h3>{t.slideshow.baptism.title}</h3>
            <p>{t.slideshow.baptism.description}</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22" alt="Warm golden lights" />
          <div className="slide-content">
            <h3>{t.slideshow.christmas.title}</h3>
            <p>{t.slideshow.christmas.description}</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" alt="Sunlight through green leaves" />
          <div className="slide-content">
            <h3>{t.slideshow.mothersDay.title}</h3>
            <p>{t.slideshow.mothersDay.description}</p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="gallery" className="gallery">
        <h2>{t.gallery.title}</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Elegant floral arrangement" />
            <h3>Blessed Beginnings Set</h3>
            <p>A beautiful collection for baptism celebrations, featuring handcrafted elements that symbolize new life and faith.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" alt="Cozy handmade items" />
            <h3>Mother's Love Bundle</h3>
            <p>Thoughtfully curated gifts that celebrate the warmth and care of motherhood with personalized touches.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22" alt="Festive decorations" />
            <h3>Holiday Wonder Collection</h3>
            <p>Magical Christmas creations that bring joy and wonder to your holiday celebrations.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" alt="Natural elements" />
            <h3>First Steps Keepsake</h3>
            <p>Commemorating life's precious milestones with handcrafted memories that last a lifetime.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027" alt="Peaceful nature scene" />
            <h3>Anniversary Treasures</h3>
            <p>Romantic and meaningful gifts that celebrate enduring love and cherished memories together.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Crafting workspace" />
            <h3>Graduation Dreams</h3>
            <p>Inspiring gifts for new graduates, celebrating achievements and encouraging future success.</p>
            <button className="inquire-btn">{t.gallery.inquire}</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.footer.title}</h3>
            <p>{t.footer.slogan}</p>
            <p>{t.footer.description}</p>
          </div>
          
          <div className="footer-section">
            <h3>{t.footer.quickLinks}</h3>
            <a href="/">{t.nav.home}</a>
            <a href="/about">{t.nav.about}</a>
            <a href="/contact">{t.nav.contact}</a>
          </div>
          
          <div className="footer-section">
            <h3>{t.footer.policies}</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/shipping-policy">Shipping Policy</a>
            <a href="/refund-policy">Return & Refund Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>

      <script src="/src/scripts/WishInBloom.js"></script>
    </>
  );
};

export default Index;
