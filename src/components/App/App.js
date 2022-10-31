import React, { Component } from "react";
import { fetchAllReservations } from "../../apiCalls";
import Form from "../Form/Form";
import Reservations from "../Reservations/Reservations";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: "",
    };
  }

  componentDidMount() {
    fetchAllReservations()
      .then((data) => this.setState({ reservations: data }))
      .catch((error) =>
        this.setState({ ...this.state, error: "Something went wrong!" })
      );
  }

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
      error: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addReservation={this.addReservation} />
        </div>
        <div className="resy-container">
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
