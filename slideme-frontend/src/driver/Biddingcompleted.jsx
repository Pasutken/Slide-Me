import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DriverBottomNavBar from './DriverBottomNavBar';
import MapView from './MapView';
import SuccessPopup from './SuccessPopup';
import './Waiting.css';

const Waiting = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Waiting-container">
      <Navbar />
      <MapView />
      {isPopupVisible && <SuccessPopup onClose={handleClosePopup} />}
      <DriverBottomNavBar />
    </div>
  );
};

export default Waiting;