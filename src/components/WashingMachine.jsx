import React, { useState } from "react";
import "./css/WashingMachine.css";

function WashingMachine() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 9);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showHours, setShowHours] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  // Modifying bookedSlots to store more details.
  const [bookedSlots, setBookedSlots] = useState([]);

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

  const isHourBooked = (hour, day) =>
    bookedSlots.some((slot) => slot.hour === hour && slot.day === day);

  const handleHourClick = (hour) => {
    if (!isHourBooked(hour, selectedDay)) {
      setSelectedHour(hour);
    }
  };

  const bookSlot = () => {
    setBookedSlots((prevSlots) => [
      ...prevSlots,
      { hour: selectedHour, day: selectedDay, booker: "Admin" },
    ]);
    setSelectedHour(null);
  };

  const deleteBooking = (hour, day) => {
    setBookedSlots((prevSlots) =>
      prevSlots.filter((slot) => !(slot.hour === hour && slot.day === day))
    );
  };

  const adminBookings = bookedSlots.filter((slot) => slot.booker === "Admin");

  return (
    <div className="componentBox">
      <h2>Pesukoneen varaus</h2>
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
            {hours.map((hour) => (
              <div
                key={hour}
                className={
                  isHourBooked(hour, selectedDay)
                    ? "hour-block booked"
                    : selectedHour === hour
                    ? "hour-block selected"
                    : "hour-block"
                }
                onClick={() => handleHourClick(hour)}
                title={`${hour}:00 - ${hour + 1}:00 ${
                  isHourBooked(hour, selectedDay) ? " - Varaus" : " - Vapaa"
                }`}
              >
                {hour}:00
              </div>
            ))}
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
      {adminBookings.length > 0 && (
        <>
          <hr />
          <h3>Omat varaukset</h3>
          <ul className="bookings-list">
            {adminBookings.map((booking, index) => (
              <li key={index}>
                Päivä: {booking.day}, Klo: {booking.hour}:00
                <button
                  className="delete-booking-btn"
                  onClick={() => deleteBooking(booking.hour, booking.day)}
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

export default WashingMachine;
