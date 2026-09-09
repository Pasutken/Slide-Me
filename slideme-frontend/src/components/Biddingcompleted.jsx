import React, { useState } from 'react';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import BidcomPopup from './PriceSuccessPopup';
import './Biddingcompleted.css';

const Bidcom = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Set to true if you want it to appear on page load

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Bidcom-container">
      <Navbar />
      <MapView />
      {isPopupVisible && <BidcomPopup onClose={handleClosePopup} />}
      <BottomNavBar />
    </div>
  );
};

export default Bidcom;