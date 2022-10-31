import React from "react"

const Reservations = ({reservations}) => {
   const reservationCards = reservations.map(reservation => {
    return (
        <Card 
        name = {reservation.name}
        date = {reservation.date}
        time = {reservation.time}
        guests = {reservation.number}
        />
    ) 
   }) 
    
    return (
        <div>
            {reservationCards}
        </div>
    )
}

export default Reservations;