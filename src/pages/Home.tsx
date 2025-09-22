import React from 'react';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import SEO from '../components/SEO';
import './Home.css';
import Subscription from '../components/Subscription';
// import Testimonials from '../components/Testimonials';
// import WhatsNew from '../components/ui/WhatsNew';

const Home: React.FC = () => {
  const featuredImages = [
    '/images/home/slide1.jpg',
    '/images/home/slide2.jpg',
    '/images/home/slide3.jpg',
    '/images/home/slide4.jpg',
    '/images/home/slide5.jpg',
    '/images/home/slide6.jpg',
    '/images/home/slide7.jpg',
    '/images/home/slide8.jpg',
  ];

  return (
    <>
      {/* <SEO
  title="Event Planning & Personalized Gifts | Special Gifts for All Occasions"
  description="Professional event planning and handcrafted, customized gifts for weddings, birthdays, anniversaries, and every special occasion. Discover meaningful celebrations and thoughtful gifting ideas."
  keywords="event planning, wedding planner, personalized gifts, custom gifts, special gifts, birthday presents, celebration design, Ottawa event coordinator, gifts for all occasions"
/> */}
<SEO
  title="WishIn Bloom | Personalized Gifts & Custom Creations for Every Occasion"
  description="Discover handcrafted and personalized gifts for weddings, birthdays, baptisms, anniversaries, holidays, and every special occasion. WishIn Bloom offers meaningful keepsakes, unique gift boxes, and thoughtful creations, with optional event planning support for memorable celebrations."
  keywords="handmade gifts, custom gifts, personalized gifts, customized gifts, themed gifts, themed table accessories, unique gifts, artisan gifts, handcrafted items, handmade accessories, 
    gift ideas, thoughtful presents, creative gifts, DIY gifts, small batch gifts, boutique gifts, seasonal gifts, holiday gifts, birthday gifts, anniversary gifts, wedding gifts, baby shower gifts, graduation gifts,
    retirement gifts, housewarming gifts, Christmas gifts, Valentine's Day gifts, Mother's Day gifts, Father's Day gifts, Easter gifts, New Year gifts, handmade jewelry, handmade home decor, handmade ornaments, 
    handmade cards, handmade keychains, handmade candles, handmade soaps, handmade bags, handmade hair accessories, handmade plushies, handmade toys, handmade art, handmade prints, handmade embroidery, handmade crochet, 
    handmade knitwear, handmade wood crafts, handmade resin crafts, handmade clay crafts, handmade paper crafts, handmade textile crafts, handmade floral arrangements, handmade wreaths, handmade bookmarks, handmade magnets, 
    handmade charms, handmade stickers, handmade packaging, handmade wrapping, handmade tags, handmade keepsakes, handmade mementos, handmade decor, handmade tableware, handmade wall art, handmade signs, handmade centerpieces, 
    handmade garlands, handmade bunting, handmade party favors, handmade gift sets, handmade bundles, handmade subscription boxes, handmade Canadian gifts, handmade Alberta gifts, handmade Edmonton gifts, handmade local gifts,
    handmade eco-friendly gifts, handmade sustainable gifts, handmade organic gifts, handmade natural gifts, handmade ethical gifts, handmade zero waste gifts, handmade recycled gifts, handmade upcycled gifts, 
    handmade minimalist gifts, handmade vintage gifts, handmade rustic gifts, handmade boho gifts, handmade modern gifts, handmade whimsical gifts, handmade romantic gifts, handmade cozy gifts, handmade cute gifts, 
    handmade elegant gifts, handmade quirky gifts, handmade spiritual gifts, handmade inspirational gifts, handmade motivational gifts, handmade healing gifts, handmade wellness gifts, handmade self-care gifts, 
    handmade pampering gifts, handmade luxury gifts, handmade budget gifts, handmade affordable gifts, handmade premium gifts, handmade exclusive gifts, handmade one-of-a-kind gifts, handmade limited edition gifts,
    handmade custom orders, handmade gift shop, handmade online store, handmade ecommerce, handmade crafts, handmade gifting, handmade celebration accessories, handmade occasion decor, handmade party decor, 
    handmade festive decor, handmade seasonal accessories, handmade all-occasion gifts, craft workshops, DIY workshops, handmade gift workshops, kids craft workshops, adult craft workshops, family craft workshops, 
    seasonal craft workshops, holiday craft workshops, creative workshops, art and craft classes, crafting classes, beginner craft classes, advanced craft workshops, weekend craft workshops, private craft lessons, 
    group craft sessions, craft education, teaching crafts, learn to craft, crafting for kids, crafting for adults, hands-on craft activities, interactive craft sessions, craft party workshops, themed craft workshops, 
    personalized craft classes, community craft events, local craft workshops, Edmonton craft workshops, Alberta craft classes, Canadian craft education" />


      <div className="home">
        <Hero />
        {/* <WhatsNew /> */}

        {/* <section className="section section-alt">
          <div className="container">
            <div className="features">
              <h2>Why Choose Us</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🎉</div>
                  <h3>Expert Planning</h3>
                  <p>Professional guidance for every type of celebration</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">💝</div>
                  <h3>Personal Touch</h3>
                  <p>Customized solutions for your unique vision</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⭐</div>
                  <h3>Memorable Moments</h3>
                  <p>Creating experiences that last a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section section-alt">
  <div className="container">
    <div className="features">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Handcrafted with Heart</h3>
          <p>Every piece is made with care, creativity, and a touch of magic.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎁</div>
          <h3>Gifts for Every Occasion</h3>
          <p>From birthdays to quiet moments, we help you celebrate beautifully.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💫</div>
          <h3>Workshops & Wonder</h3>
          <p>Inspiring kids and adults through hands-on craft experiences.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* 👇 Add your subscription form here */}
        <Subscription />
        {/* <Testimonials /> */}

      </div>
    </>
  );
};

export default Home;