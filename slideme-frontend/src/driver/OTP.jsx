import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OTP.css';

const OTP = () => {
  const { state } = useLocation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("OTP entered:", otpCode);
    // ส่งข้อมูลไปยังหน้า /createpass-driver
    navigate('/createpass-driver', { state: { phone_number: state.phone_number } });
  };

  return (
    <div className="otp-container">
      <h2>ยืนยัน OTP</h2>
      <p>กรอกรหัสที่ได้รับจากเบอร์ xxx-xxx-xxxx</p>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            className="otp-input"
          />
        ))}
      </div>
      <p className="otp-timer">{timer} Sec</p>
      <button onClick={handleSubmit} className="otp-button">ยืนยัน</button>
    </div>
  );
};

export default OTP;