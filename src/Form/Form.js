import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  initialState = {
    name: '',
    number: 0,
    date: '',
    time: ''
  }

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, number, date, time } = this.state;
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} 
        />
        <label htmlFor="number">Number of People</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={this.handleChange} 
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={this.handleChange} 
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={this.handleChange} 
        />
        <input 
          type="button" 
          value="Submit" 
          onClick={this.submitForm} 
        />
      </form>
    );
  }
}

export default Form;