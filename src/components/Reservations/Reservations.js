import React from "react";
import Card from "../Card/Card";
import "./Reservations.css";

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        guests={reservation.number}
        key={reservation.id}
      />
    );
  });

  return <div className="reservation-container">{reservationCards}</div>;
};

export default Reservations;
