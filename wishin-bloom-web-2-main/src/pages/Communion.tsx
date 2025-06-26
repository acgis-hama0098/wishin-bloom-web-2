
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const Communion = () => {
  const products = [
    {
      name: "Sacred First Steps Set",
      description: "Beautiful keepsake collection for First Communion, featuring a prayer book cover, rosary pouch, and memory box with personalized touches.",
      image: "/images/baptism/baptism1.jpg"
    },
    {
      name: "Blessed Chalice Display",
      description: "Elegant wooden display stand with engraved details, perfect for showcasing communion keepsakes and creating a sacred memory corner.",
      image:  "/images/baptism/baptism2.jpg"
    },
    {
      name: "Faith Journey Scrapbook",
      description: "Handcrafted memory book with spaces for photos, prayers, and reflections from this holy milestone in your child's faith journey.",
    image: "/images/baptism/baptism3.jpg"
  },
  {
    name: "Heavenly Grace Frame",
    description: "A delicate glass frame with gold-foil scripture, perfect for commemorating a blessed baptism moment.",
    image: "/images/baptism/baptism4.jpg"
  },
  {
    name: "Heavenly Grace Frame",
    description: "A delicate glass frame with gold-foil scripture, perfect for commemorating a blessed baptism moment.",
    image: "/images/first-communion/communion1.jpg"
  },
  {
    name: "Heavenly Grace Frame",
    description: "A delicate glass frame with gold-foil scripture, perfect for commemorating a blessed baptism moment.",
    image: "/images/first-communion/communion2.jpg"
  }
  ];

  return (
    <OccasionTemplate
      title="First Communion Gifts"
      description="Celebrate this sacred milestone with meaningful keepsakes that honor your child's first steps in their faith journey. Each piece is crafted to preserve the holiness of this special day."
      products={products}
    />
  );
};

export default Communion;
