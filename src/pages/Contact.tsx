import React, { useState } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xnnvrgwz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          occasion: '',
          message: '',
        });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was a problem sending your message.');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with our event planning team. Contact us for weddings, birthdays, anniversaries, and special occasions. Free consultations available."
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
      <div className="contact">
        <section className="section">
          <div className="container">
            <div className="contact-hero">
              <h1>Get In Touch</h1>
              <p className="lead">
                Ready to plan your special occasion? We'd love to hear from you 
                and help make your vision come to life.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Contact Information</h2>

                <div className="info-item">
                  <div>
                    <h4>Address</h4>
                    <p>Ottawa, Ontario</p>
                  </div>
                </div>

                <div className="info-item">
                  <div>
                    <h4>Phone</h4>
                    <p>613 816 4338</p>
                  </div>
                </div>

                <div className="info-item">
                  <div>
                    <h4>Email</h4>
                    <p>wishinbloom.krol@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <h2>Send us a Message</h2>

                {submitted && (
                  <p className="success-message">
                    ✅ Thank you for your message! We'll be in touch shortly.
                  </p>
                )}

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact from WishIn Bloom Website" />

                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">Email *</label>
                      <input 
                        type="email" 
                        id="contact-email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone</label>
                      <input 
                        type="tel" 
                        id="contact-phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-occasion">Occasion Type</label>
                    <select 
                      id="contact-occasion" 
                      name="occasion" 
                      value={formData.occasion} 
                      onChange={handleInputChange}
                    >
                      <option value="anniversary">Anniversary</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="baptism">Baptism</option>
                      <option value="birthday">Birthday</option>
                      <option value="canada-day">Canada Day</option>
                      <option value="casual-gift">Casual Gift</option>
                      <option value="christmas">Christmas</option>
                      <option value="easter">Easter</option>
                      <option value="graduation">Graduation</option>
                      <option value="halloween">Halloween</option>
                      <option value="memorials">Memorials</option>
                      <option value="mothers-day">Mother's Day</option>
                      <option value="new-year">New Year</option>
                      <option value="special-occasions">Special Occasions</option>
                      <option value="thanksgiving">Thanksgiving</option>
                      <option value="valentines-day">Valentine's Day</option>
                      <option value="wedding">Wedding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea 
                      id="contact-message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Tell us about your vision, date, guest count, and any specific requirements..." 
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;