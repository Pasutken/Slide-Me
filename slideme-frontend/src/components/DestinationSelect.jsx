import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import './DestinationSelect.css'; // ไฟล์ CSS สำหรับตกแต่ง

const Destination = () => {
  const [garages, setGarages] = useState([]);
  const navigate = useNavigate();

  // ดึงข้อมูลจาก backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/garage/getall') // เปลี่ยนเป็น URL จริงถ้าจัด deployment
      .then((res) => {
        if (res.data.status) {
          setGarages(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching garages:", err);
      });
  }, []);

  const handleItemClick = (garageId) => {
    navigate('/confirmdestination', { state: { garageId } });
  };  
  
  return (
    <div className="destination-container">
      <Navbar />
      <div className="destination-content">
        <div className="search-container">
          <div className="search-item current-location">
            <span className="icon">🟢</span>
            <span className="text">ตำแหน่งปัจจุบัน</span>
          </div>
          <div className="search-item destination-search">
            <span className="icon">🔍</span>
            <span className="text">จุดหมายปลายทาง</span>
          </div>
        </div>

        <div className="destination-list">
          {garages.map((garage) => (
            <div className="list-item" key={garage.id} onClick={() => handleItemClick(garage.id)}>
              <span className="list-icon">🕒</span>
              <div className="list-text">
                <div className="location-name">{garage.name}</div>
                <div className="location-address">{garage.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Destination;