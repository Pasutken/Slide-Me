import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import './QrPayment.css';

const QrPayment = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // กลับไปหน้าก่อนหน้า
  };

  useEffect(() => {
    // ตั้งเวลา 5 วินาที แล้วเปลี่ยนเส้นทางไปที่ /test
    const timer = setTimeout(() => {
      navigate('/Waitpickup');
    }, 5000);

    // ล้างตัวจับเวลาหากคอมโพเนนต์ถูกถอดออก
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="qr-payment-container">
      <header className="qr-payment-header">
        <button className="back-button" onClick={handleBack}>←</button>
        <h1>QR พร้อมเพย์</h1>
      </header>
      <div className="qr-content">
        <div className="qr-title">THAI QR PAYMENT</div>
        <div className="promptpay-logo">
          <img src="https://img2.pic.in.th/pic/Promptpay.png" alt="PromptPay Logo" />
        </div>
        <div className="qr-code">
          <QRCodeCanvas
            value="https://img2.pic.in.th/pic/IMG_5136098a1618fb4ef74a.jpg"
            size={200}
          />
        </div>
        <div className="qr-info">
          <p>บริษัท : Slide Me ( Group 15 )</p>
          <p>จำนวนเงิน : 1,500 บาท</p>
        </div>
      </div>
    </div>
  );
};

export default QrPayment;