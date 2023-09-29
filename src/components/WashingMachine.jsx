// components/WashingMachine.js
import React from "react";
import "./css/WashingMachine.css";

function WashingMachine() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const bookedSlots = [9, 14, 15, 20]; // Example booked hours

  return (
    <div className="componentBox">
      <h2>Washing Machine Schedule</h2>
      <div className="calendar-view">
        {hours.map((hour) => (
          <div
            key={hour}
            className={
              bookedSlots.includes(hour) ? "hour-block booked" : "hour-block"
            }
            title={`${hour}:00 - ${hour + 1}:00 ${
              bookedSlots.includes(hour) ? " - Booked" : " - Available"
            }`}
          >
            {hour}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WashingMachine;
