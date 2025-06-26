
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const CasualGifts = () => {
  const products = [
    {
      name: "Just Because Joy Box",
      description: "Delightful surprise collection of small handmade treasures perfect for brightening someone's day without a special occasion.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Friendship Token Set",
      description: "Sweet handcrafted items celebrating friendship, including matching keychains, note cards, and a small succulent arrangement.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Everyday Magic Collection",
      description: "Charming assortment of handmade items to add beauty to daily routines, from decorative coasters to inspirational desk accessories.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    }
  ];

  return (
    <OccasionTemplate
      title="Casual Gifts"
      description="Sometimes the most meaningful gifts are given for no special reason at all. Discover handcrafted treasures perfect for spontaneous acts of kindness."
      products={products}
    />
  );
};

export default CasualGifts;
