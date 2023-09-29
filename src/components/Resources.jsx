import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

import "./css/Resources.css";

function Resources() {
  const [date, setDate] = useState(new Date());
  const [electricPrice, setElectricPrice] = useState(0.12);
  const [electricData, setElectricData] = useState({
    labels: [],
    datasets: [],
  });
  const [waterData, setWaterData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const updateData = () => {
      const labels = Array.from({ length: 30 }, (_, i) =>
        new Date(
          date.getFullYear(),
          date.getMonth(),
          i + 1
        ).toLocaleDateString()
      );

      setElectricData({
        labels: labels,
        datasets: [
          {
            label: "Electricity Price ($/kWh)",
            data: Array.from({ length: 30 }, () =>
              (Math.random() * 0.05 + 0.1).toFixed(2)
            ),
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
          {
            label: "kWh Used",
            data: Array.from({ length: 30 }, () =>
              Math.floor(Math.random() * 2000 + 1000)
            ),
            borderColor: "rgba(255,99,132,1)",
            fill: false,
          },
        ],
      });
      setWaterData({
        labels: labels,
        datasets: [
          {
            label: "Water Used (Liters)",
            data: Array.from({ length: 30 }, () =>
              Math.floor(Math.random() * 10000 + 2000)
            ),
            borderColor: "rgba(54, 162, 235, 1)",
            fill: false,
          },
        ],
      });
    };

    updateData(); // Initial data setup

    const interval = setInterval(() => {
      setDate(new Date());
      setElectricPrice((prevPrice) => (Math.random() * 0.05 + 0.1).toFixed(2));
      updateData();
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="componentBox">
      <h2>Resources</h2>
      <div className="resource-item">
        <label>Electric Price:</label>
        <span>${electricPrice}/kWh</span>
      </div>
      <div className="resource-item">
        <label>Current Time:</label>
        <span>{date.toLocaleTimeString()}</span>
      </div>
      <div className="resource-item">
        <label>Date:</label>
        <span>{date.toLocaleDateString()}</span>
      </div>

      <div className="chart-container">
        <h3>Electricity Usage & Prices</h3>
        <Line data={electricData} />
      </div>

      <div className="chart-container">
        <h3>Water Usage</h3>
        <Line data={waterData} />
      </div>
    </div>
  );
}

export default Resources;
