import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ใช้ useLocation และ useNavigate
import "./OTP.css";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60); // ตั้งค่านับถอยหลังที่ 60 วินาที
  const navigate = useNavigate();
  const { state } = useLocation(); // รับข้อมูลจาก state ที่ส่งมาจาก DetailForm

  // เริ่มการนับถอยหลัง
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  // จัดการเมื่อผู้ใช้กรอก OTP
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") { // ตรวจสอบว่าเป็นตัวเลข 0-9
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus(); // ย้ายไปช่องถัดไปอัตโนมัติ
      }
    }
  };

  // จัดการเมื่อกดยืนยัน
  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("OTP entered:", otpCode);
    // เมื่อ OTP ถูกต้อง ให้ไปที่หน้า /createpass และส่งข้อมูลทั้งหมดไป
    navigate("/createpass", {
      state: {
        phone_number: state.phone_number,
        name: state.name,
        surname: state.surname,
        email: state.email,
      },
    });
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
      <button onClick={handleSubmit} className="otp-button">
        ยืนยัน
      </button>
    </div>
  );
};

export default OTP;