import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // กลับไปหน้าก่อนหน้า
  };

  const goToQRPayment = () => {
    navigate('/qrpayment');
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <button className="back-button" onClick={handleBack}>←</button>
        <h1>วิธีการชำระเงิน</h1>
      </header>
      <div className="payment-content">
        <div className="payment-option" onClick={goToQRPayment}>
          <img src="https://img2.pic.in.th/pic/Promptpay.png" alt="QR พร้อมเพย์" className="payment-icon" />
          <span>QR พร้อมเพย์</span>
        </div>

        <div className="section-title">แอปธนาคาร</div>
        <div className="payment-option">
          <img src="https://img2.pic.in.th/pic/KBANKdb5b1fdd40453236.png" alt="K PLUS" className="payment-icon" />
          <span>K PLUS</span>
        </div>
        <div className="payment-option">
          <img src="https://img5.pic.in.th/file/secure-sv1/Krungthaie5ab023dee3a177e.png" alt="Krungthai NEXT" className="payment-icon" />
          <span>Krungthai NEXT</span>
        </div>
        <div className="payment-option">
          <img src="https://img5.pic.in.th/file/secure-sv1/Krungsri.png" alt="KMA Krungsri app" className="payment-icon" />
          <span>KMA Krungsri app</span>
        </div>
        <div className="payment-option">
          <img src="https://img5.pic.in.th/file/secure-sv1/SCB1a81263767dfc380.png" alt="SCB EASY" className="payment-icon" />
          <span>SCB EASY</span>
        </div>

        <div className="section-title">TrueMoney Wallet</div>
        <div className="payment-option">
          <img src="https://img2.pic.in.th/pic/Truewallet.png" alt="TrueMoney Wallet" className="payment-icon" />
          <span>TrueMoney Wallet</span>
        </div>

        <div className="section-title">เพิ่มบัตรใหม่</div>
        <div className="payment-option">
          <img src="https://img2.pic.in.th/pic/card30e17ab15e20e231.png" alt="บัตรเครดิต/บัตรเดบิต" className="payment-icon" />
          <span>บัตรเครดิต / บัตรเดบิต</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;