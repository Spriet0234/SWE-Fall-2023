import React from "react";
import "../styles/Popup.css"; // Import the CSS file for styling

const Popup = ({ isOpen, closePopup, message }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Item Added to Cart</h2>
        <p>{message}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
