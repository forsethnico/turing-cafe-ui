import React from 'react'

const Card = ({name, date, time, guests}) => {
    return (
        <section className = 'card'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of Guests: {guests}</p>
            <button className = "cancel-btn">Cancel</button>
        </section>
    )
}

export default Card;