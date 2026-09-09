import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPaymentPopup.css';

const SuccessPaymentPopup = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/driveriscoming');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="success-icon">
          <img src="https://img.icons8.com/fluency/96/000000/checkmark.png" alt="Success" />
        </div>
        <h3 className="popup-title">ชำระเงินเสร็จสิ้น</h3>
        <p className="waiting-message">โปรดรอคนขับสักครู่</p>
        <button className="continueeee-button" onClick={handleContinue}>
          ต่อไป
        </button>
      </div>
    </div>
  );
};

export default SuccessPaymentPopup;