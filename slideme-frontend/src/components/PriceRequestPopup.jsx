import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PriceRequestPopup.css';

const PriceRequestPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/home'); // นำทางไปหน้า /home
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3 className="popup-title">คนขับกำลังเสนอราคาให้คุณ</h3>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <div className="vehicle-info">
          <p className="waiting-message">โปรดรอสักครู่</p>
        </div>
        <button className="cancel-button" onClick={handleCancel}>
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default PriceRequestPopup;