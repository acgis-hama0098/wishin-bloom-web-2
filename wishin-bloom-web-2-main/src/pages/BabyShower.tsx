
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const BabyShower = () => {
  const products = [
    {
      name: "Welcome Little One Bundle",
      description: "Adorable collection of handmade items for baby's arrival, including a soft blanket, wooden name sign, and memory box for first keepsakes.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Nursery Dreams Mobile",
      description: "Whimsical handcrafted mobile featuring soft clouds, stars, and gentle colors to create a peaceful atmosphere for baby's room.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Growing Love Height Chart",
      description: "Beautiful wooden growth chart with hand-painted details and space for marking baby's milestones through the years.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    }
  ];

  return (
    <OccasionTemplate
      title="Baby Shower Gifts"
      description="Welcome new life with tender, handcrafted gifts that celebrate the joy of new beginnings. Each piece is made with love to accompany baby's first precious moments."
      products={products}
    />
  );
};

export default BabyShower;
