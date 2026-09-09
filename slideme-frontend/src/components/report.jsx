import React from "react";
import "./report.css";
import { useNavigate } from "react-router-dom";

const Report = () => {
    const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  };
  return (
    <div className="report-container">
      <h1 className="report-title">
        โปรดป้อนรายละเอียดของคำขอของคุณ และเราจะตอบกลับโดยเร็วที่สุด
      </h1>
      <form className="report-form">
        <div className="report-field">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="report-field">
          <label>Subject</label>
          <input type="text" placeholder="Enter Subject" />
        </div>
        <div className="report-field">
          <label>For Order Number</label>
          <input type="text" placeholder="Enter For Order Number" />
        </div>
        <div className="report-field">
          <label>Type</label>
          <select>
            <option>Select an option</option>
            <option>Convertible</option>
            <option>Coupe</option>
            <option>Electric Vehicle (EV)</option>
            <option>Hatchback</option>
            <option>Luxury Car</option>
            <option>Minivan</option>
            <option>Pickup Truck</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Wagon</option>
          </select>
        </div>
        <div className="report-field">
          <label>I'm the...</label>
          <select>
            <option>Select an option</option>
            <option>User</option>
            <option>Driver</option>
          </select>
        </div>
        <div className="report-field">
          <label>Description</label>
          <textarea placeholder="Enter description here"></textarea>
        </div>
        <div className="attachment-container">
          <label>Attachments</label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => console.log("Selected file:", e.target.files[0])}
          />
          <label htmlFor="file-upload" className="add-file-button">
            Add File
          </label>
        </div>
        <div className="report-buttons">
          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;