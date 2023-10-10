import React from "react";
import "./css/Announcements.css";

function Announcements() {
  return (
    <div className="componentBox announcements">
      <h2>Ilmoitukset</h2>
      <ul className="announcement-list">
        <li>
          <h3 className="announcement-header">Pyhä Graali Löydetty!</h3>
          <p>Päivämäärä: 2. lokakuuta 2023 | Aika: 11:00 | Kirjoittaja: Sir Lancelot</p>
          <p>
            Yksityiskohdat: Pyhä Graali on löydetty yhteisön puutarhasta! Liity meihin juhlalliselle etsintäretkelle keskipäivällä.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Jänishälytys!</h3>
          <p>Päivämäärä: 3. lokakuuta 2023 | Aika: 1:00 PM | Kirjoittaja: Sir Robin</p>
          <p>
            Yksityiskohdat: Varo jänistä kuntosalin sisäänkäynnin lähellä. Se ei ole niin viaton kuin miltä se näyttää. Lähesty varoen!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Spam-aamiainen Huomenna</h3>
          <p>Päivämäärä: 4. lokakuuta 2023 | Aika: 6:30 AM | Kirjoittaja: Viikinki</p>
          <p>
            Yksityiskohdat: Liity meihin SPAM, SPAM, SPAM ja munien aamiaiselle ruokasalissa!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Väittelyn Klinikka Avoinna</h3>
          <p>Päivämäärä: 5. lokakuuta 2023 | Aika: 3:00 PM | Kirjoittaja: Mr. Barnard</p>
          <p>
            Yksityiskohdat: Jos olet maksanut viiden minuutin väittelystä tai täydestä puolituntisesta, liity meihin väittelyn klinikan avoimessa talossa!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Lumberjack Laulun Yhteislaulu</h3>
          <p>Päivämäärä: 6. lokakuuta 2023 | Aika: 7:00 PM | Kirjoittaja: Jack</p>
          <p>
            Yksityiskohdat: Liity yhteisölauluun ja julista ylpeänä olevasi lumberjack!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Kuolleen Papukaijan Sketch Uudelleennäytös</h3>
          <p>Päivämäärä: 7. lokakuuta 2023 | Aika: 2:00 PM | Kirjoittaja: Mr. Praline</p>
          <p>
            Yksityiskohdat: Kuolleen papukaijan sketsin uudelleennäytös. Tule mukaan nauramaan ja muistelemaan vanhoja aikoja.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Kuoleman Silta Trivia-ilta</h3>
          <p>Päivämäärä: 8. lokakuuta 2023 | Aika: 8:00 PM | Kirjoittaja: Vanha Mies</p>
          <p>
            Yksityiskohdat: Vastaa kolmeen kysymykseen ja voita jännittäviä palkintoja! Muista tietää suosikkivärisi.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Muokkaa</button>
            <button className="delete-btn">Poista</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Announcements;
