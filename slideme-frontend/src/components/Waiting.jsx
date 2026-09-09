import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import WaitingPopup from './PriceRequestPopup';
import './Waiting.css';

const Waiting = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/bidcom'); // เปลี่ยนไปที่หน้า /bidcom หลังจากผ่านไประยะหนึ่ง
    }, 5000); // เปลี่ยน 5000 เป็นระยะเวลาที่คุณต้องการ (มิลลิวินาที)

    return () => clearTimeout(timer); // ทำความสะอาด timer เมื่อคอมโพเนนต์นี้ unmount
  }, [navigate]);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Waiting-container">
      <Navbar />
      <MapView />
      {isPopupVisible && <WaitingPopup onClose={handleClosePopup} />}
      <BottomNavBar />
    </div>
  );
};

export default Waiting;