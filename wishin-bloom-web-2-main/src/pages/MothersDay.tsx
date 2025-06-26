
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const MothersDay = () => {
  const products = [
    {
      name: "Nurturing Heart Collection",
      description: "A beautiful set of handcrafted items celebrating the nurturing spirit of motherhood, including a custom jewelry holder and blessing card.",
      image: "/images/mothers-day/mothersday1.jpg"
    },
    {
      name: "Garden of Love Terrarium",
      description: "Hand-assembled succulent garden representing the growth and care that mothers provide, complete with meaningful stones.",
      image: "/images/mothers-day/mothersday2.jpg"
    },
    {
      name: "Memory Lane Photo Display",
      description: "Rustic wooden display stand for cherished family photos, with hand-burned quotes about motherhood.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    }
  ];

  return (
    <OccasionTemplate
      title="Mother's Day Gifts"
      description="Honor the incredible mothers in your life with gifts that speak to the heart. Each creation celebrates the endless love, care, and wisdom that mothers bring to our world."
      products={products}
    />
  );
};

export default MothersDay;
