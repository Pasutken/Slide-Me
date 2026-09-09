// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgotpass.css';

function Forgotpass() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleForgotpass = (e) => {
    e.preventDefault();
    console.log('Forgotpassing with phone:', phone);

    // Navigate to /detailform after clicking the button
    navigate('/otp-driver');
  };

  return (
    <div className="forgotpass-container">
      <div className="forgotpass-box">
        <h1 className="forgotpass-title">ลืมรหัสผ่าน</h1>
        <p className="forgotpass-subtitle">กรุณาใส่เบอร์ของคุณ เราจะทำการส่ง OTP</p>
        <p className="forgotpass-subtitle">ไปยังมือถือของคุณเพื่อตั้งรหัสผ่านใหม่</p>
        <form onSubmit={handleForgotpass}>
          <div className="form-group">
            <input
              type="number"
              placeholder="เบอร์โทรศัพท์มือถือ"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="custom-input"
            />
          </div>
          <button type="submit" className="forgotpass-button">ยืนยัน</button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpass;