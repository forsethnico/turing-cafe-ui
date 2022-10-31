import React, { Component } from 'react';
import { fetchAllReservations, postReservation } from '../../apiCalls';
import Form from '../../Form/Form'
import Reservations from '../../Reservations/Reservations'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchAllReservations()
    .then(reservations => this.setState({reservations}))
    .catch(error => this.setState({...this.state, error: 'Something went wrong!'}))
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
    .then(result => {
      if(result.id) {
        this.setState({reservations: [...this.state.reservations, newReservation], error: ''})
      } else {
        this.setState({error: 'Please fill out all fields!'})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
