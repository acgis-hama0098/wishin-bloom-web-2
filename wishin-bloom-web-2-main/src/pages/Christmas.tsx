
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Christmas = () => {
  const products = [
    {
      name: "Winter Wonder Centerpiece",
      description: "Magical holiday centerpiece featuring handcrafted ornaments, warm lighting, and natural elements that capture Christmas magic.",
      image: "/images/christmas/christmas1.jpg"
    },
    {
      name: "Family Traditions Advent Set",
      description: "Beautiful wooden advent calendar with personalized family touches and small handmade surprises for each day.",
      image: "/images/christmas/christmas2.jpg"
    },
    {
      name: "Cozy Christmas Memories Box",
      description: "Handcrafted storage box for Christmas ornaments and memories, lined with festive fabric and custom nameplate.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="Christmas Gifts"
      description="Create magical holiday memories with our handcrafted Christmas collections. Each piece brings warmth, wonder, and the true spirit of the season into your home and heart."
      products={products}
    />
  );
};

export default Christmas;
