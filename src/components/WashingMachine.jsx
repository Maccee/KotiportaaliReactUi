import React, { useState } from "react";
import "./css/WashingMachine.css";

function WashingMachine() {
  const hours = Array.from({ length: 12 }, (_, i) => i + 9); // 0900 - 2000
  const [selectedDay, setSelectedDay] = useState(null);
  const [showHours, setShowHours] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const bookedSlots = [9, 14, 15, 20]; // Example booked hours

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // for simplicity, assuming every month has 30 days

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
    if (!bookedSlots.includes(hour)) {
      setSelectedHour(hour);
    }
  };

  const bookSlot = () => {
    // Implement the logic to book the slot
    // For now, just adding it to the bookedSlots
    bookedSlots.push(selectedHour);
    setSelectedHour(null);
  };

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
      <hr />
      {showHours && (
        
        <div className="hour-selection">
          {hours.map((hour) => (
            <div
              key={hour}
              className={
                bookedSlots.includes(hour)
                  ? "hour-block booked"
                  : selectedHour === hour
                  ? "hour-block selected"
                  : "hour-block"
              }
              onClick={() => handleHourClick(hour)}
              title={`${hour}:00 - ${hour + 1}:00 ${
                bookedSlots.includes(hour) ? " - Varaus" : " - Vapaa"
              }`}
            >
              {hour}:00
            </div>
          ))}
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

export default WashingMachine;
