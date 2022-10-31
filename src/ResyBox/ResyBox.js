import React from 'react';

import ResyCard from '../ResyCard/ResyCard';

import './ResyBox.css'

const ResyBox = ({ reservations }) => {
  const cards = reservations.map((reservation) => {
    return <ResyCard key={reservation.id} reservation={reservation} />
  })
  
  return (
    <section>
      {cards}
    </section>
  );
}

export default ResyBox;