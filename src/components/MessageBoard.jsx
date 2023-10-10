// components/MessageBoard.js
import React from "react";
import "./css/MessageBoard.css";

function MessageBoard() {
  return (
    <div className="componentBox">
      <h2>Heippalaput</h2>
      <ul className="messages">
        <li>Hei vaan!</li>
        <li>Varokaa koiraa!</li>
        <li>Ei sotketa siellä..</li>
      </ul>
      <form className="message-form">
        <input type="text" placeholder="Kirjoita.." />
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default MessageBoard;
