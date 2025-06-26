
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Anniversary = () => {
  const products = [
    {
      name: "Forever Love Memory Box",
      description: "Elegant wooden keepsake box for preserving anniversary mementos, love letters, and precious memories from your journey together.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      name: "Two Hearts Photo Display",
      description: "Romantic handcrafted photo stand designed to showcase your favorite memories together, with personalized engraving options.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      name: "Eternal Flame Candle Set",
      description: "Beautiful set of handmade candles with romantic scents and elegant holders, perfect for creating intimate anniversary moments.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <OccasionTemplate
      title="Anniversary Gifts"
      description="Celebrate enduring love with handcrafted treasures that honor your unique journey together. Each piece tells the story of your beautiful partnership."
      products={products}
    />
  );
};

export default Anniversary;
