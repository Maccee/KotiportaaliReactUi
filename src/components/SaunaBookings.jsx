import React, { useState } from "react";
import "./css/SaunaBooking.css";

function SaunaBookings() {
  const hours = Array.from({ length: 10 }, (_, i) => i + 15); // 1500 - 2400
  const [selectedDay, setSelectedDay] = useState(null);
  const [showHours, setShowHours] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  
  const bookings = [
    { hour: 15, name: "John", houseNumber: 42, surname: "Doe" },
    { hour: 17, name: "Sarah", houseNumber: 5, surname: "Smith" },
    { hour: 19, name: "Alex", houseNumber: 18, surname: "Turner" },
  ];

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    if (selectedDay === day) {
      setShowHours(!showHours);
    } else {
      setSelectedDay(day);
      setShowHours(true);
    }
    setSelectedHour(null); // Clear selected hour when day is clicked
  };

  const handleHourClick = (hour) => {
    if (!bookings.some((booking) => booking.hour === hour)) {
      setSelectedHour(hour);
    }
  };

  const bookSlot = () => {
    // Implement the logic to book the slot.
    // For this mockup, just an example of adding a new booking.
    bookings.push({
      hour: selectedHour,
      name: "YourName",
      houseNumber: 22,
      surname: "YourSurname",
    });
    setSelectedHour(null);
  };

  return (
    <div className="componentBox">
      <h2>Saunan varaus</h2>
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
      <hr />
      {showHours && (
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
                title={
                  booking
                    ? `Varattu: ${booking.name} ${booking.surname} Asunto ${booking.houseNumber}`
                    : "Vapaa"
                }
              >
                {hour}:00
              </div>
            );
          })}
          
        </div>
      )}
      {selectedHour && (
        <div className="centered-button">
          <button onClick={bookSlot} className="varaa-button">
            Varaa
          </button>
        </div>
      )}
    </div>
  );
}

export default SaunaBookings;
