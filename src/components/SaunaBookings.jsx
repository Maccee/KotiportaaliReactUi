// components/SaunaBookings.js
import React from "react";
import "./css/SaunaBooking.css";

function SaunaBookings() {
  const hours = Array.from({ length: 9 }, (_, i) => 15 + i);
  const bookings = [
    { hour: 15, name: "John", houseNumber: 42, surname: "Doe" },
    { hour: 17, name: "Sarah", houseNumber: 5, surname: "Smith" },
    { hour: 19, name: "Alex", houseNumber: 18, surname: "Turner" },
  ];

  return (
    <div className="componentBox">
      <h2>Sauna Bookings</h2>
      <div className="calendar-view">
        {hours.map((hour) => {
          const booking = bookings.find((b) => b.hour === hour);
          return (
            <div
              key={hour}
              className={`hour-block ${booking ? "booked" : "available"}`}
              title={
                booking
                  ? `Booked by ${booking.name} ${booking.surname} from House ${booking.houseNumber}`
                  : "Available"
              }
            >
              {hour}
            </div>
          );
        })}
      </div>
      <button className="booking-btn">Book Sauna</button>
    </div>
  );
}

export default SaunaBookings;
