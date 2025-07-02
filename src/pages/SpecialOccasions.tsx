import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';
import { useOccasionData } from '../hooks/useOccasionData';

const SpecialOccasions: React.FC = () => {
  const data = useOccasionData('special-occasions');
  
  if (!data) {
    return <div>Occasion data not found</div>;
  }

  return <OccasionTemplate data={data} />;
};

export default SpecialOccasions;