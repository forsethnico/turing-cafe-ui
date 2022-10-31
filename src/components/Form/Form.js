import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: [event.target.value]})
    }


    render() {
        return (
         <form>
            <input type='text' value={this.state.name} placeholder='Name'onChange={(event)=> this.handleChange(event)}/>
            <input type='text' value={this.state.date} placeholder='Date (mm/dd)'onChange={(event)=> this.handleChange(event)}/>
            <input type='text' value={this.state.time} placeholder="Time"onChange={(event)=> this.handleChange(event)}/>
            <input type='number' value={this.state.number} placeholder="Number of guests"onChange={(event)=> this.handleChange(event)}/>
            <button>Make Reservation</button>
         </form>
        )
     }        
}

export default Component
