import React, { useState } from "react";
import "./css/Announcements.css";

function Announcements() {
  const [announcements, setAnnouncements] = useState([
    {
      header: "Pyhä Graali Löydetty!",
      details: "Päivämäärä: 2. lokakuuta 2023 | Aika: 11:00 | Kirjoittaja: Sir Lancelot",
      content: "Yksityiskohdat: Pyhä Graali on löydetty yhteisön puutarhasta! Liity meihin juhlalliselle etsintäretkelle keskipäivällä."
    },
    {
      header: "Jänishälytys!",
      details: "Päivämäärä: 3. lokakuuta 2023 | Aika: 1:00 PM | Kirjoittaja: Sir Robin",
      content: "Yksityiskohdat: Varo jänistä kuntosalin sisäänkäynnin lähellä. Se ei ole niin viaton kuin miltä se näyttää. Lähesty varoen!"
    }
  ]);

  const handleAdd = () => {
    const header = prompt("Ilmoituksen otsikko:");
    const content = prompt("Ilmoituksen sisältö:");

    if (header && content) {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}. ${currentDate.getMonth() + 1}. ${currentDate.getFullYear()}`;
        const formattedTime = `${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
        const details = `Päivämäärä: ${formattedDate} | Aika: ${formattedTime} | Kirjoittaja: Admin`;

        const newAnnouncement = { header, details, content };
        setAnnouncements(prevAnnouncements => [newAnnouncement, ...prevAnnouncements]);
    }
  };

  const handleDelete = (index) => {
    const newAnnouncements = [...announcements];
    newAnnouncements.splice(index, 1);
    setAnnouncements(newAnnouncements);
  };

  const handleEdit = (index) => {
    const header = prompt("Muokkaa otsikkoa:", announcements[index].header);
    const content = prompt("Muokkaa sisältöä:", announcements[index].content);

    if (header && content) {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}. ${currentDate.getMonth() + 1}. ${currentDate.getFullYear()}`;
        const formattedTime = `${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
        const details = `Päivämäärä: ${formattedDate} | Aika: ${formattedTime} | Kirjoittaja: Admin | Muokattu..`;

        const newAnnouncements = [...announcements];
        newAnnouncements[index] = { header, details, content };
        setAnnouncements(newAnnouncements);
    }
};


  return (
    <div className="componentBox announcements">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Ilmoitukset</h2>
        <button onClick={handleAdd}>Uusi ilmoitus</button>
      </div>
      <ul className="announcement-list">
        {announcements.map((announcement, index) => (
          <li key={index}>
            <h3 className="announcement-header">{announcement.header}</h3>
            <p>{announcement.details}</p>
            <p>{announcement.content}</p>
            <div className="announcement-actions">
              <button className="edit-btn" onClick={() => handleEdit(index)}>Muokkaa</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Poista</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
