
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';

const NewYear = () => {
  const products = [
    {
      name: "Fresh Start Goal Journal",
      description: "Handcrafted journal with inspiring quotes and goal-setting pages, beautifully bound to accompany your New Year resolutions.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Midnight Wishes Lantern",
      description: "Elegant handmade lantern for New Year's Eve celebrations, creating warm ambiance as you welcome new beginnings.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      name: "Year of Memories Box",
      description: "Beautiful storage box for collecting memories throughout the year, with monthly dividers and space for photos and mementos.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <OccasionTemplate
      title="New Year Gifts"
      description="Welcome fresh beginnings with inspiring handcrafted gifts that encourage reflection, goal-setting, and celebration of new possibilities ahead."
      products={products}
    />
  );
};

export default NewYear;
