import React, { useState, useEffect } from "react";
import "./css/Resources.css";

function Resources() {
  const [date, setDate] = useState(new Date());
  const [electricPrice, setElectricPrice] = useState(0.12);
  const [kWattage, setKWattage] = useState(Math.random() * (3000 - 400) + 400); // Initial random value between 400kW and 3000kW
  const [waterUsage, setWaterUsage] = useState(0); // Start from 0 for demonstration purposes

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      
      setElectricPrice((prevPrice) => (Math.random() * 0.05 + 0.1).toFixed(2));

      // Bounce kWattage every second between 400kW and 3000kW
      setKWattage(Math.random() * (3000 - 400) + 400);
      
      // Increase water usage by between 0.001m3 to 0.003m3
      setWaterUsage((prevWaterUsage) => prevWaterUsage + (Math.random() * (0.003 - 0.001) + 0.001));
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="componentBox">
      <h2>Resurssit</h2>

      <div className="resource-item">
        <label>Sähkön hinta:</label>
        <span>{electricPrice}snt/kWh</span>
      </div>
      
      <div className="resource-item">
        <label>Aika:</label>
        <span>{date.toLocaleTimeString()}</span>
      </div>
      
      <div className="resource-item">
        <label>Pvm:</label>
        <span>{date.toLocaleDateString()}</span>
      </div>
      
      <div className="resource-item">
        <label>Sähkön käyttö:</label>
        <span>{kWattage.toFixed(2)} kW</span>
      </div>
      
      <div className="resource-item">
        <label>Veden käyttö:</label>
        <span>{waterUsage.toFixed(4)} m³</span>
      </div>
      
    </div>
  );
}

export default Resources;
