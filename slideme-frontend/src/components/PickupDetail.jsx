import React, { useState } from 'react';
import './PickupDetail.css';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PickupDetail = () => {
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleConfirmClick = async () => {
    const customerId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
    const latitude = parseFloat(localStorage.getItem('userLat')); // Assuming userLat is stored in localStorage
    const longitude = parseFloat(localStorage.getItem('userLng')); // Assuming userLng is stored in localStorage
    const token = JSON.parse(localStorage.getItem("token"))?.token; // Retrieve the token from localStorage

    if (!note) {
      alert('Please provide a note');
      return;
    }

    if (!token) {
      alert('You are not authorized. Please log in.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/slide-truck-rquest/create',
        {
          customerId,
          note,
          latitude,
          longitude,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to request headers
          },
        }
      );

      console.log('Request created:', response.data);
      navigate('/waiting');
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  return (
    <div className="pickup-detail-container">
      <Navbar />
      <div className="pickup-detail-content">
        <h2 className="title">รายละเอียดคำขอเสนอราคา</h2>
        <div className="priceeeee-icon">
          <img src="https://img5.pic.in.th/file/secure-sv1/image-removebg-preview-249e5b2dc7d633d50.png" alt="price Icon" className="icon-image" />
        </div>
        <div className="location-info">
          <div className="first-location-item">
            <span className="green-circle">●</span>
            <span className="text">
              <span className="label">ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
            </span>
          </div>
          <div className="second-location-item">
            <span className="pink-circle">●</span>
            <span className="text">
              <span className="label">อู่ศรีปทุม</span>
            </span>
          </div>
        </div>
        <div className="distance-time-info">
          <img src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png" alt="Car Icon" className="car-icon" />
          <div className="distance info">
            <div className="label">ระยะทาง</div>
            <div className="value">14 km</div>
          </div>
          <div className="time info">
            <div className="label">เวลา</div>
            <div className="value">26 min</div>
          </div>
        </div>
        <textarea
          placeholder="Enter your note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="request-button" onClick={handleConfirmClick}>
          ส่งคำขอเสนอราคา
        </button>
        <p className="note">
          คุณอาจจะต้องรอคนขับตอบรับการเสนอราคามากกว่า 5-10 นาที ระบบจะโอนใบคำขอไปที่คนขับใกล้เคียงถ้าไม่มีการต่อ
        </p>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default PickupDetail;