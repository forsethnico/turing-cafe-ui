import React from "react";
import "./Card.css";

const Card = ({ name, date, time, guests, id, removeReservation }) => {
  return (
    <section className="card">
      <h3 className="card-name">{name}</h3>
      <p className="card-date">{date}</p>
      <p className="card-time">{time} pm</p>
      <p className="card-guests">Number of Guests: {guests}</p>
      <button onClick={() => removeReservation(id)} className="cancel-btn">
        Cancel
      </button>
    </section>
  );
};

export default Card;
