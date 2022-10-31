import React, { useState, useEffect } from 'react';

import { getData } from '../apiCalls/apiCalls';

import './App.css';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData()
      .then(reservationsData => {
        console.log(reservationsData);
        setReservations(reservationsData);
      })
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>

      </div>
      <div className='resy-container'>
        
      </div>
    </div>
  )
}

export default App;
