import React from 'react';
import './Subscription.css';

const Subscription: React.FC = () => {
  return (
    <section className="subscription">
      <h2>Stay in the Loop</h2>
      <p>Subscribe to get updates on new events, offers, and inspiration.</p>
      <form
        action="https://formspree.io/f/xnnvrgwz"
        method="POST"
        className="subscription-form"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Subscription;