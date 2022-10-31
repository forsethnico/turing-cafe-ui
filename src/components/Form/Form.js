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

    render() {
        return (
         <form>
            <input type='text' value={this.state.name} placeholder='Name'/>
            <input type='text' value={this.state.date} placeholder='Date (mm/dd)'/>
            <input type='text' value={this.state.time} placeholder="Time"/>
            <input type='text' value={this.state.number} placeholder="Number of guests"/>
            <button>Make Reservation</button>
         </form>
        )
     }        
}

export default Component
