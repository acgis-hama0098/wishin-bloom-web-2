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
        keywords="contact event planner, event planning consultation, wedding planner contact, birthday party planning"
      />
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