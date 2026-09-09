import React from 'react';
import './PriceSuccessPopup.css';
import { Link } from 'react-router-dom';

const PriceSuccessPopup = () => {
  return (
    <div className="price-popup-overlay">
      <div className="price-popup-content">
        <h3 className="price-popup-title">คนขับเสนอราคาให้คุณ</h3>
        <div className="price-icon-container">
          <img src="https://img2.pic.in.th/pic/Payicon.png" alt="Pay Icon" className="price-icon" />
        </div>
        <div className="price-info">
          <p className="price-text">1,500 บาท</p>
        </div>
        <div className="price-button-container">
          <Link to="/home" className="price-cancel-button">ยกเลิก</Link>
          <Link to="/payment" className="price-pay-button">ชำระเงิน</Link>
        </div>
      </div>
    </div>
  );
};

export default PriceSuccessPopup;