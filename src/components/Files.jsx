import React from "react";
import "./css/Files.css";

function Files() {
  return (
    <>
      <div className="files-container componentBox">
        <h2>Kotitalousyrityksen Resurssit</h2>  {/* "Household Company Resources" translation */}

        <div className="file-item">
          <h3>Isännöintitodistus</h3>
          <p>Kuvaus: Virallinen todistus rakennuksen hallinnosta.</p>  {/* "Description: Official certificate from the building's management." translation */}
          <button>Lataa</button>  {/* "Download" translation */}
        </div>

        <div className="file-item">
          <h3>Huoltopäiväkirja</h3>
          <p>Kuvaus: Rakennuksen huoltoloki.</p>  {/* "Description: Maintenance logbook of the building." translation */}
          <button>Lataa</button>
        </div>

        <div className="file-item">
          <h3>Taloyhtiökokousten pöytäkirja</h3>
          <p>Kuvaus: Pöytäkirja taloyhtiön kokouksista.</p>  {/* "Description: Meeting minutes from the housing company's meetings." translation */}
          <button>Lataa</button>
        </div>

        <div className="file-item">
          <h3>Kiinteistön vakuutustiedot</h3>
          <p>Kuvaus: Kiinteistön vakuutustiedot.</p>  {/* "Description: Property insurance information." translation */}
          <button>Lataa</button>
        </div>

        <div className="file-item">
          <h3>Taloudellinen suunnitelma</h3>
          <p>Kuvaus: Kotitalousyrityksen taloudellinen suunnitelma.</p>  {/* "Description: Financial plan of the household company." translation */}
          <button>Lataa</button>
        </div>
      </div>
    </>
  );
}

export default Files;

