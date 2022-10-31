import React, { Component } from 'react';
import { fetchAllReservations } from '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchAllReservations()
    .then(reservations => this.setState({reservations}))
    .catch(error => this.setState({...this.state, error: 'Something went wrong!'}))
  }

  render() {
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
}

export default App;
