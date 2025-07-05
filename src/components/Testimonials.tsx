import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Aida M.',
    quote: 'WishIn Bloom made my daughter’s birthday feel like a fairytale. Every detail was perfect.',
  },
  {
    name: 'Najwa B.',
    quote: 'WishIn Bloom helped us honour our loved one’s memory with grace and beauty.',
  },
  {
    name: 'Val S.',
    quote: 'I’ve never seen a more thoughtful xmas gift arrangement.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{t.quote}”</p>
            <p className="name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;