// components/MaintenanceHelp.js
import React from "react";
import "./css/MaintenanceHelp.css";

function MaintenanceHelp() {
  return (
    <div className="componentBox">
      <h2>Maintenance Help</h2>
      <p>
        If you have any maintenance requests or issues, please fill out the form
        below:
      </p>
      <form className="maintenance-form">
        <textarea placeholder="Describe your maintenance issue..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MaintenanceHelp;
