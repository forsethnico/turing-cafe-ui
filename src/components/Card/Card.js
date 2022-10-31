import React from 'react'
import './Card.css'

const Card = ({name, date, time, guests, id, removeReservation}) => {
    return (
        <section className = 'card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of Guests: {guests}</p>
            <button onClick = {() => removeReservation(id)} className = "cancel-btn">Cancel</button>
        </section>
    )
}

export default Card;