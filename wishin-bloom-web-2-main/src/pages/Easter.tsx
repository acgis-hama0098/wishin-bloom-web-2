
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Easter = () => {
  const products = [
    {
      name: "Spring Renewal Centerpiece",
      description: "Beautiful Easter centerpiece featuring handcrafted elements celebrating rebirth and new life, with pastel colors and natural materials.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Resurrection Garden Kit",
      description: "Interactive Easter garden with handmade elements telling the Easter story, perfect for families to create together.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      name: "Hope Springs Eternal Box",
      description: "Delicate keepsake box for Easter treasures and spring memories, adorned with symbols of faith and renewal.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="Easter Gifts"
      description="Celebrate the joy of Easter and the promise of new beginnings with handcrafted gifts that honor this sacred season of renewal and hope."
      products={products}
    />
  );
};

export default Easter;
