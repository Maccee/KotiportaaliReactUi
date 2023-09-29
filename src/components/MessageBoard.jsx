// components/MessageBoard.js
import React from "react";
import "./css/MessageBoard.css";

function MessageBoard() {
  return (
    <div className="componentBox">
      <h2>Message Board</h2>
      <ul className="messages">
        <li>Message 1: Hello everyone!</li>
        <li>Message 2: Hope you all are well.</li>
        <li>Message 3: Let's meet up tomorrow?</li>
      </ul>
      <form className="message-form">
        <input type="text" placeholder="Type your message here..." />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default MessageBoard;
