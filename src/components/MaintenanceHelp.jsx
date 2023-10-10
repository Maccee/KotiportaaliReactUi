import React from "react";
import "./css/MaintenanceHelp.css";

function MaintenanceHelp() {
  return (
    <div className="componentBox">
      <h2>Huoltoapu</h2>
      <p>
        Jos sinulla on huoltopyyntöjä tai ongelmia, täytä alla oleva lomake:
      </p>
      <form className="maintenance-form">
        <label htmlFor="name">Nimi:</label>
        <input type="text" id="name" placeholder="Anna nimesi" />

        <label htmlFor="apartment-number">Asunnon numero:</label>
        <input type="text" id="apartment-number" placeholder="Anna asunnon numero" />

        <label htmlFor="contact-info">Yhteystiedot:</label>
        <input type="text" id="contact-info" placeholder="Puhelinnumero tai sähköposti" />

        <label htmlFor="description">Kuvaus ongelmasta:</label>
        <textarea id="description" placeholder="Kuvaile huoltokysymystäsi tai ongelmaa..." />

        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default MaintenanceHelp;
