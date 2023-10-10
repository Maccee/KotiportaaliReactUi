import React from "react";

import "./App.css";

import MessageBoard from "./components/MessageBoard";
import SaunaBookings from "./components/SaunaBookings";
import WashingMachine from "./components/WashingMachine";
import Resources from "./components/Resources";
import MaintenanceHelp from "./components/MaintenanceHelp";
import Announcements from "./components/Announcements";
import Files from "./components/Files";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="column">
          <Resources />
          <MaintenanceHelp />
          <Files />
        </div>
        <div className="centerColumn">
          <Announcements />
          <MessageBoard />
          
        </div>
        <div className="column">
          <WashingMachine />
          <SaunaBookings />
          <MaintenanceHelp />
          <Files />
        </div>
      </div>
    </>
  );
}

export default App;
