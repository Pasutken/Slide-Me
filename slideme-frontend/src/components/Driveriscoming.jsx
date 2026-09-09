// src/components/Driveriscoming.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNavBar from "./BottomNavBar";
import MapView from "./MapView";
import "./Driveriscoming.css";

const Driveriscoming = () => {
  const navigate = useNavigate();

  const handlecancel = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/star'); // เปลี่ยนไปที่หน้า /bidcom หลังจากผ่านไประยะหนึ่ง
    }, 7000); // เปลี่ยน 5000 เป็นระยะเวลาที่คุณต้องการ (มิลลิวินาที)

    return () => clearTimeout(timer); // ทำความสะอาด timer เมื่อคอมโพเนนต์นี้ unmount
  }, [navigate]);

  return (
    <div className="driver-is-coming-container">
      <Navbar />
      <MapView />

      <div>
        <div className="infooo-card">
          <div className="driver-infooo">
            <Link to="/data-driver">
              <img
                src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
                alt="Driver"
                className="driver-image"
              />
            </Link>
            <div className="driver-dtzz">
              <h4>สมชาย</h4>
              <span className="rating">⭐ 4.9</span>
            </div>
            <div className="contact-icons">
              <Link to="/chat-customer">
                <img
                  src="https://img2.pic.in.th/pic/chat96a103a3a0de24a4.png"
                  alt="Chat"
                  className="icon contact-icon"
                />
              </Link>
              <Link to="/call">
                <img
                  src="https://img5.pic.in.th/file/secure-sv1/call2a608874f06be4da.png"
                  alt="Call"
                  className="icon contact-icon"
                />
              </Link>
            </div>
          </div>

          <div className="location-infooo">
            <div className="location-item">
              <span className="green-dot">🟢</span>
              <span className="location-text">ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
            </div>
            <div className="location-item">
              <span className="pink-dot">📍</span>
              <span className="location-text">อู่ศรีปทุม</span>
            </div>
          </div>

          <hr className="divider" />

          <div className="ride-details">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png"
              alt="รถสไลด์"
              className="ride-icon"
            />
            <span>รถสไลด์</span>
            <span className="ride-time">12 นาที</span>
            <span className="ride-price">1,500 บาท</span>
          </div>

          <button className="cancel-button" onClick={handlecancel}>
            ยกเลิก
          </button>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Driveriscoming;
