import React, { useState } from "react";
import "./css/MaintenanceHelp.css";

function MaintenanceHelp() {
  const [formData, setFormData] = useState({
    name: "",
    apartmentNumber: "",
    contactInfo: "",
    description: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.apartmentNumber ||
      !formData.contactInfo ||
      !formData.description
    ) {
      return;
    }
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      name: "",
      apartmentNumber: "",
      contactInfo: "",
      description: "",
    });
  };

  return (
    <div className="componentBox">
      <h2>Huoltoapu</h2>
      <p>
        Jos sinulla on huoltopyyntöjä tai ongelmia, täytä alla oleva lomake:
      </p>
      <form className="maintenance-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nimi:</label>
        <input
          type="text"
          id="name"
          placeholder="Anna nimesi"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="apartmentNumber">Asunnon numero:</label>
        <input
          type="text"
          id="apartmentNumber"
          placeholder="Anna asunnon numero"
          value={formData.apartmentNumber}
          onChange={handleChange}
        />

        <label htmlFor="contactInfo">Yhteystiedot:</label>
        <input
          type="text"
          id="contactInfo"
          placeholder="Puhelinnumero tai sähköposti"
          value={formData.contactInfo}
          onChange={handleChange}
        />

        <label htmlFor="description">Kuvaus ongelmasta:</label>
        <textarea
          id="description"
          placeholder="Kuvaile huoltokysymystäsi tai ongelmaa..."
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Lähetä</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <strong>Lähetetyt huoltopyynnöt:</strong>
          <br />
          {submittedData.map((data, index) => (
            <a key={index} href="#!" className="maintenance-request-link">
              {data.description.length > 30
                ? `${data.description.substring(0, 30)}...`
                : data.description}
              <br />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default MaintenanceHelp;
