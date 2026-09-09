import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import WaitingPopup from './SuccessPaymentPopup';
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
      {isPopupVisible && <WaitingPopup onClose={handleClosePopup} />}
      <BottomNavBar />
    </div>
  );
};

export default Waiting;