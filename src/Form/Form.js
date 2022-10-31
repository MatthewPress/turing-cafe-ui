import React, { useState } from 'react';

import './Form.css';

function Form({}) {
  const [values, setValues] = useState({
    userName: '',
    numb: 0,
    date: '',
    time: ''
  });

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form>
      <label>NAME</label>
      <input 
        type="text"
        name="userName"
        value={values.userName}
        onChange={(event) => handleChange(event)}
      />
      <label>NUMBER OF PEEPS</label>
      <input 
        type="number"
        name="numb"
        value={values.numb}
        onChange={(event) => handleChange(event)}
      />
      <label>DATE</label>
      <input 
        type="date"
        name="date"
        value={values.date}
        onChange={(event) => handleChange(event)}
      />
      <label>TIME</label>
      <input 
        type="time"
        name="time"
        value={values.time}
        onChange={(event) => handleChange(event)}
      />
      <input
        type="submit"
      />
    </form>
  );
}

export default Form;