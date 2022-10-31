import React from 'react';

import ResyCard from '../ResyCard/ResyCard';

import './ResyBox.css'

const ResyBox = () => {
  const cards = <ResyCard />
  
  return (
    <p>{cards}</p>
  );
}

export default ResyBox;