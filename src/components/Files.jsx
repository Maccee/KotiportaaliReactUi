import React from "react";
import "./css/Files.css";

function Files() {
  return (
    <>
      <div className="files-container componentBox">
        <h2>Household Company Resources</h2>

        <div className="file-item">
          <h3>Isännöintitodistus</h3>
          <p>Description: Official certificate from the building's management.</p>
          <button>Download</button>
        </div>

        <div className="file-item">
          <h3>Huoltopäiväkirja</h3>
          <p>Description: Maintenance logbook of the building.</p>
          <button>Download</button>
        </div>

        <div className="file-item">
          <h3>Taloyhtiökokousten pöytäkirja</h3>
          <p>Description: Meeting minutes from the housing company's meetings.</p>
          <button>Download</button>
        </div>

        <div className="file-item">
          <h3>Kiinteistön vakuutustiedot</h3>
          <p>Description: Property insurance information.</p>
          <button>Download</button>
        </div>

        <div className="file-item">
          <h3>Taloudellinen suunnitelma</h3>
          <p>Description: Financial plan of the household company.</p>
          <button>Download</button>
        </div>
      </div>
    </>
  );
}

export default Files;
