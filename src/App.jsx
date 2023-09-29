import React from "react";

import "./App.css";

import MessageBoard from "./components/MessageBoard";
import SaunaBookings from "./components/SaunaBookings";
import WashingMachine from "./components/WashingMachine";
import Resources from "./components/Resources";
import MaintenanceHelp from "./components/MaintenanceHelp";
import Announcements from "./components/Announcements";

function App() {
  return (
    <div className="app-container">
      <div className="column">
        <Announcements />
      </div>
      <div className="column">
        <WashingMachine />
        <SaunaBookings />
        <MaintenanceHelp />
        <MessageBoard />
      </div>
      <div className="column">
        <Resources />
      </div>
    </div>
  );
}

export default App;
