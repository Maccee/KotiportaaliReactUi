import React, { useState } from "react";
import "./css/MessageBoard.css";

function MessageBoard() {
  const [messages, setMessages] = useState([
    "Hei vaan!",
    "Varokaa koiraa!",
    "Ei sotketa siellä..",
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setMessages([currentMessage, ...messages]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="componentBox">
      <h2>Heippalaput</h2>
      <ul className="messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kirjoita.."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default MessageBoard;
