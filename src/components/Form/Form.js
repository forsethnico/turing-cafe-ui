import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    makeReservation = event => {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({name: '', date: '', time: '', number: ''})
    }

    render() {
        return (
         <form>
            <input type='text' name = 'name' value={this.state.name} placeholder='Name' onChange={(event)=> this.handleChange(event)}/>
            <input type='text' name = 'date' value={this.state.date} placeholder='Date (mm/dd)' onChange={(event)=> this.handleChange(event)}/>
            <input type='text' name = 'time' value={this.state.time} placeholder="Time" onChange={(event)=> this.handleChange(event)}/>
            <input type='number' name= 'number' value={this.state.number} placeholder="Number of guests" onChange={(event)=> this.handleChange(event)}/>
            <button onClick={(event) => this.makeReservation(event)}>Make Reservation</button>
         </form>
        )
     }        
}

export default Form;
