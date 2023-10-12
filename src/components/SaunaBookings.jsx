import React, { useState } from "react";
import "./css/SaunaBooking.css";

function SaunaBookings() {
  const hours = Array.from({ length: 10 }, (_, i) => i + 15);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showHours, setShowHours] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  const [bookings, setBookings] = useState([]);

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    if (selectedDay === day) {
      setShowHours(!showHours);
    } else {
      setSelectedDay(day);
      setShowHours(true);
    }
    setSelectedHour(null);
  };

  const handleHourClick = (hour) => {
    if (!bookings.some((booking) => booking.hour === hour)) {
      setSelectedHour(hour);
    }
  };

  const bookSlot = () => {
    setBookings((prevBookings) => [
      ...prevBookings,
      {
        hour: selectedHour,
        day: selectedDay, // Save the selected day with the booking
      },
    ]);
    setSelectedHour(null);
  };

  const deleteBooking = (hour) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.hour !== hour)
    );
  };

  return (
    <div className="componentBox">
      <h2>Saunan varaus</h2>
      Valitse Päivä
      <div className="calendar-days">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={selectedDay === day ? "day-block selected" : "day-block"}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {showHours && (
        <div>
          <hr />
          <div className="hour-selection">
            {hours.map((hour) => {
              const booking = bookings.find((b) => b.hour === hour);
              return (
                <div
                  key={hour}
                  className={
                    booking
                      ? "hour-block booked"
                      : selectedHour === hour
                      ? "hour-block selected"
                      : "hour-block"
                  }
                  onClick={() => handleHourClick(hour)}
                  title={`${hour}:00 - ${hour + 1}:00 ${
                    booking ? " - Varaus" : " - Vapaa"
                  }`}

                >
                  {hour}:00
                </div>
              );
            })}
          </div>
        </div>
      )}
      {selectedHour && (
        <div className="centered-button">
          <span className="selected-info">
            Valittu Päivä: {selectedDay}, Klo: {selectedHour}:00
          </span>

          <button onClick={bookSlot} className="varaa-button">
            Varaa
          </button>
        </div>
      )}
      {bookings.length > 0 && (
        <>
          <hr />
          <h3>Omat varaukset</h3>
          <ul className="bookings-list">
            {bookings.map((booking, index) => (
              <li key={index}>
                Päivä: {booking.day}, Klo: {booking.hour}:00
                <button
                  className="delete-booking-btn"
                  onClick={() => deleteBooking(booking.hour)}
                >
                  Peru varaus
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SaunaBookings;
