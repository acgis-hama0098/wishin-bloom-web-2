
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Retirement = () => {
  const products = [
    {
      name: "Golden Years Memory Collection",
      description: "Elegant set for preserving career memories and achievements, including a personalized plaque and memory book for this new life chapter.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      name: "Leisure Time Hobby Box",
      description: "Handcrafted organizer for retirement hobbies and interests, with compartments and personalized touches for this exciting new phase.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Wisdom & Legacy Frame",
      description: "Beautiful display frame for favorite work photos and achievement certificates, honoring a lifetime of dedicated service.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="Retirement Gifts"
      description="Honor years of dedication and celebrate new freedoms with thoughtfully crafted gifts that recognize achievements and encourage exciting new adventures."
      products={products}
    />
  );
};

export default Retirement;
