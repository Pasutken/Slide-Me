import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MapView from "./MapView";
import "./Bidding.css";

const Bidding = () => {
  const [price, setPrice] = useState("");
  const [slideRequestId, setSlideRequestId] = useState(null); // Initialize state for slideRequestId
  const navigate = useNavigate();
  const location = useLocation(); // To get the state passed from ReceiveJob
  const token = JSON.parse(localStorage.getItem("token"))?.token; // Assuming token is stored in localStorage

  useEffect(() => {
    // Retrieve slideRequestId from state passed by the ReceiveJob component
    if (location.state && location.state.slideRequestId) {
      setSlideRequestId(location.state.slideRequestId);
    } else {
      console.error("No slideRequestId found in state.");
    }
  }, [location.state]);

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (!slideRequestId) {
      alert("Slide request ID is missing.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/job/create-bid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Assuming token is stored in localStorage
        },
        body: JSON.stringify({
          slideRequestId,
          price: parseFloat(price.replace(/,/g, "")), // Convert formatted price to number
        }),
      });

      if (response.ok) {
        console.log("Bid created successfully");
        navigate("/waiting-driver");
      } else {
        const errorData = await response.json();
        console.error("Error creating bid:", errorData.message);
        alert("Failed to create bid: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the bid.");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Remove commas
    if (!isNaN(value)) {
      const formattedValue = Number(value).toLocaleString(); // Add commas
      setPrice(formattedValue); // Update state
    }
  };

  return (
    <div className="bidding-container">
      <Navbar />
      <MapView />
      <div className="bidding-popup">
        <h2 className="bidding-title">เสนอราคา</h2>
        <p className="bidding-subtext">คุณควรเสนอราคาตามความเหมาะสม</p>
        <p className="bidding-subtext">
          หรือยึดอัตราที่แนะนำได้{" "}
          <Link to={"/pricetable"}>
            <span className="suggested-rate">คลิกเลย</span>
          </Link>
        </p>
        <div className="bidding-input-container">
          <input
            type="text"
            className="bidding-input"
            placeholder="ราคา (บาท)"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="location-details">
          <div className="pickup-location">
            <div className="circle"></div>
            <span className="location-text">ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
          </div>
          <div className="destination-location">
            <div className="location-icon"></div>
            <span className="location-text">อู่ศรีปทุม</span>
          </div>
        </div>
        <div className="vehicle-details">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png"
            alt="Vehicle"
            className="vehicle-icon"
          />
          <div className="vehicle-info">
            <p className="vehicle-text">ระยะทาง: 17 กม.</p>
            <p className="vehicle-text">เวลา: 17 นาที</p>
          </div>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default Bidding;