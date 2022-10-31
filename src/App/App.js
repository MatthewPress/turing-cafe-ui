import React, { useState, useEffect } from 'react';

import Form from '../Form/Form';
import ResyBox from '../ResyBox/ResyBox';

import { getData } from '../apiCalls/apiCalls';

import './App.css';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData()
      .then(reservationsData => {
        console.log({reservationsData});
        setReservations(reservationsData);
      })
  }, []);

  const handleSubmit = (newReservation) => {
    setReservations((reservations) => ([
      ...reservations,
      newReservation
    ]));
    console.log({reservations});
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form handleSubmit={handleSubmit} />
      </div>
      <div className='resy-container'>
        <ResyBox reservations={reservations} />
      </div>
    </div>
  )
}

export default App;
