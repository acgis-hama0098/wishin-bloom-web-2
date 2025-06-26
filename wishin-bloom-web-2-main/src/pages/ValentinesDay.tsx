
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const ValentinesDay = () => {
  const products = [
    {
      name: "Heart's Desire Gift Set",
      description: "Romantic collection featuring handmade love notes holder, heart-shaped keepsake box, and personalized photo frame for your valentine.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Love Blooms Terrarium",
      description: "Enchanting miniature garden in a glass container, symbolizing how love grows and flourishes with care and attention.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Sweet Romance Candle Collection",
      description: "Handcrafted candles with romantic fragrances and elegant rose gold holders, perfect for creating intimate Valentine's moments.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <OccasionTemplate
      title="Valentine's Day Gifts"
      description="Express your love with handcrafted gifts that speak directly to the heart. Each creation is designed to celebrate the beauty and magic of romantic love."
      products={products}
    />
  );
};

export default ValentinesDay;
