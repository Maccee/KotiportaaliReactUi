import React from "react";
import "./css/Announcements.css";

function Announcements() {
  return (
    <div className="componentBox announcements">
      <h2>Announcements</h2>
      <ul className="announcement-list">
        <li>
          <h3 className="announcement-header">Holy Grail Found!</h3>
          <p>Date: October 2, 2023 | Time: 11:00 AM | Author: Sir Lancelot</p>
          <p>
            Details: The Holy Grail has been found in the community garden! Join
            us for a celebratory quest at noon.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Rabbit Alert!</h3>
          <p>Date: October 3, 2023 | Time: 1:00 PM | Author: Sir Robin</p>
          <p>
            Details: Beware of the rabbit near the gym entrance. It's not as
            innocent as it looks. Approach with caution!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Spam Breakfast Tomorrow</h3>
          <p>Date: October 4, 2023 | Time: 6:30 AM | Author: Viking</p>
          <p>
            Details: Join us for a SPAM, SPAM, SPAM, and eggs breakfast in the
            dining hall!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Argument Clinic Open House</h3>
          <p>Date: October 5, 2023 | Time: 3:00 PM | Author: Mr. Barnard</p>
          <p>
            Details: If you've paid for a five-minute argument or a full
            half-hour, join us at the argument clinic's open house!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Lumberjack Song Sing-Along</h3>
          <p>Date: October 6, 2023 | Time: 7:00 PM | Author: Jack</p>
          <p>
            Details: Join our community sing-along, and proudly proclaim that
            you're a lumberjack!
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">
            Dead Parrot Sketch Reenactment
          </h3>
          <p>Date: October 7, 2023 | Time: 2:00 PM | Author: Mr. Praline</p>
          <p>
            Details: A reenactment of the classic dead parrot sketch. Be sure to
            join for a laugh and some nostalgia.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
        <li>
          <h3 className="announcement-header">Bridge of Death Trivia Night</h3>
          <p>Date: October 8, 2023 | Time: 8:00 PM | Author: Old Man</p>
          <p>
            Details: Answer the questions three and win exciting prizes! Just
            remember to know your favorite color.
          </p>
          <div className="announcement-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Announcements;
