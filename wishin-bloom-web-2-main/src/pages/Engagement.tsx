
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Engagement = () => {
  const products = [
  {
    name: "Together Forever Ring Box",
    description: "Elegant handcrafted ring box for the proposal moment and beyond, with personalized engraving and soft velvet interior.",
    image: "/images/engagement/engagement1.jpg"
  },
  {
    name: "Love Story Timeline",
    description: "Beautiful wooden display showcasing your relationship milestones, from first meeting to engagement, with custom details.",
    image: "/images/engagement/engagement2.jpg"
  },
    {
      name: "Engagement Celebration Set",
      description: "Romantic collection including champagne flutes, celebration candles, and a memory book for this exciting new chapter.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <OccasionTemplate
      title="Engagement Gifts"
      description="Mark the beginning of your forever journey with handcrafted treasures that celebrate your commitment and the beautiful future you're building together."
      products={products}
    />
  );
};

export default Engagement;
