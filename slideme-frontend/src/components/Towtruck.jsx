import React from 'react';
import Navbar from './Navbar';
import MapView from './MapView';
import { useNavigate } from 'react-router-dom';
import './Towtruck.css';

const Towtruck = () => {
  const navigate = useNavigate();

  const handleSelectedClick = () => {
    navigate('/pickupdetail');
  };

  return (
    <div className="towtruck-container">
      <Navbar />
      <div className="mapview-container">
        <MapView />
        <div className="overlay-box">
          <div className="drag-bar" />
          <h2 className="title">เลือกประเภท</h2>
          <div className="truck-list">
            <div className="truck-item selected" onClick={handleSelectedClick}>
              <img src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png" alt="รถสไลด์" className="truck-icon" />
              <span className="truck-name">รถสไลด์</span>
            </div>
            <div className="truck-item">
              <img src="https://img2.pic.in.th/pic/tow.png" alt="รถลากจูง" className="truck-icon" />
              <span className="truck-name">รถลากจูง</span>
            </div>
            <div className="truck-item">
              <img src="https://img5.pic.in.th/file/secure-sv1/image-removebg-preview-3b5b54c6a7aa4078d.png" alt="รถสไลด์พิเศษ" className="truck-icon" />
              <span className="truck-name">รถสไลด์พิเศษ</span>
            </div>
            <div className="truck-item">
              <img src="https://img2.pic.in.th/pic/car-service-removebg-preview.png" alt="ยกรถอุบัติเหตุ" className="truck-icon" />
              <span className="truck-name">ยกรถอุบัติเหตุ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Towtruck;