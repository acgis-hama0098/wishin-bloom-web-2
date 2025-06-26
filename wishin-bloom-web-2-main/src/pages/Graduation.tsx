
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Graduation = () => {
  const products = [
    {
      name: "Achievement Celebration Box",
      description: "Personalized keepsake box for diplomas, awards, and graduation memories, crafted to honor this significant academic milestone.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Dreams Take Flight Display",
      description: "Inspirational wooden display stand with motivational quotes and space for graduation photos, celebrating future possibilities.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      name: "Future Bright Memory Book",
      description: "Handcrafted scrapbook for preserving graduation memories and messages from loved ones, marking the beginning of new adventures.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="Graduation Gifts"
      description="Honor academic achievements and celebrate new beginnings with thoughtfully crafted gifts that inspire and commemorate this proud milestone."
      products={products}
    />
  );
};

export default Graduation;
