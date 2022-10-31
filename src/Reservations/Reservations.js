import React from "react"
import Card from '../Card/Card'

const Reservations = ({reservations}) => {
   const reservationCards = reservations.map(reservation => {
    return (
        <Card 
        name = {reservation.name}
        date = {reservation.date}
        time = {reservation.time}
        guests = {reservation.number}
        key = {reservation.id}
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