// src/components/Drivertobiding.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DriverBottomNavBar from './DriverBottomNavBar';
import MapView from './MapView';
import './Drivertobiding.css';

const Drivertobiding = () => {
  const navigate = useNavigate();

  const handlebiding = (e) => {
    e.preventDefault();
    navigate('/biding-driver');
    }

  const handlecallingtocustomer = () => {
    navigate('/call-driver');
  }

  const handlechatingtocustomer = () => {
    navigate('/chat-driver');
  }

  return (
    <div className="dtob-container">
      <Navbar />
      <MapView />

      <div>
      <div className="infloww-card">
        <div className="driver-infloww">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
              alt="Driver"
              className="driver-image"
            />
            <div className="dtdriverrrr">
              <h4>น้องแดน</h4>
              <span className="rating">096-XXX-XXXX</span>
            </div>
            <div className="contact-icons">
              <img src="https://img2.pic.in.th/pic/chat96a103a3a0de24a4.png" alt="Chat" className="icon contact-icon" onClick={handlechatingtocustomer}/>
              <img src="https://img5.pic.in.th/file/secure-sv1/call2a608874f06be4da.png" alt="Call" className="icon contact-icon" onClick={handlecallingtocustomer}/>
            </div>
          </div>

          <div className="location-infloww">
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
            <span className="ride-time">17 กม.</span>
            <span className="ride-price">17 นาที</span>
          </div>
        <button className="cancelbtn" onClick={handlebiding}>เสนอราคา</button>
        </div>
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default Drivertobiding;