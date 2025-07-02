import React from 'react';
import OccasionTemplate from '../components/OccasionTemplate';
import { useOccasionData } from '../hooks/useOccasionData';

const Anniversary: React.FC = () => {
  const data = useOccasionData('anniversary');
  
  if (!data) {
    return <div>Occasion data not found</div>;
  }

  return <OccasionTemplate data={data} />;
};

export default Anniversary;