import React from "react";
import "./css/Files.css";

function Files() {
  return (
    <>
      <div className="files-container componentBox">
        <h2>Kotitalousyrityksen tiedostot</h2>
  
        <div className="file-item">
          <div className="file-description">
            <h3>Isännöintitodistus</h3>
            <p>Kuvaus: Virallinen todistus rakennuksen hallinnosta.</p>
          </div>
          <button>Lataa</button>
        </div>
  
        <div className="file-item">
          <div className="file-description">
            <h3>Huoltopäiväkirja</h3>
            <p>Kuvaus: Rakennuksen huoltoloki.</p>
          </div>
          <button>Lataa</button>
        </div>
  
        <div className="file-item">
          <div className="file-description">
            <h3>Taloyhtiökokousten pöytäkirja</h3>
            <p>Kuvaus: Pöytäkirja taloyhtiön kokouksista.</p>
          </div>
          <button>Lataa</button>
        </div>
  
        <div className="file-item">
          <div className="file-description">
            <h3>Kiinteistön vakuutustiedot</h3>
            <p>Kuvaus: Kiinteistön vakuutustiedot.</p>
          </div>
          <button>Lataa</button>
        </div>
  
        <div className="file-item">
          <div className="file-description">
            <h3>Taloudellinen suunnitelma</h3>
            <p>Kuvaus: Kotitalousyrityksen taloudellinen suunnitelma.</p>
          </div>
          <button>Lataa</button>
        </div>
      </div>
    </>
  );
  
}

export default Files;

