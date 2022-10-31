import React, { useState } from 'react';

import './Form.css';

function Form({}) {
  return (
    <form>
      <label>NAME</label>
      <input 
        type="text"
      />
      <label>NUMBER OF PEEPS</label>
      <input 
        type="number"
      />
      <label>DATE</label>
      <input 
        type="date"
      />
      <label>TIME</label>
      <input 
        type="time"
      />
      <input
        type="submit"
      />
    </form>
  );
}

export default Form;