import React from 'react';

import './ResyCard.css';

const ResyCard = ({ reservation }) => {
  return (
    <article key={reservation.id}>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
    </article>
  )
}

export default ResyCard;