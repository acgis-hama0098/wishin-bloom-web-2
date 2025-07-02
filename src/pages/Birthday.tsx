
import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';
import { useOccasionData } from '../hooks/useOccasionData';

const Birthday: React.FC = () => {
  const data = useOccasionData('birthday');
  
  if (!data) {
    return <div>Occasion data not found</div>;
  }

  return <OccasionTemplate data={data} />;
};

export default Birthday;
