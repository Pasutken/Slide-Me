import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import axios from "axios";
import './Createpass.css';

const CreatePassDriver = () => {
  const { state } = useLocation(); // รับข้อมูลจาก state ที่ส่งมาจาก OTP
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const navigate = useNavigate(); 

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

  const handleCreatePass = async () => {
    if (passwordValid && passwordMatch) {
      try {
        const response = await axios.put("http://localhost:5000/createpass-driver", {
          phone_number: state.phone_number,
          password,
        });
        console.log(response.data);
        navigate("/login-driver");
      } catch (error) {
        console.error("Error creating password:", error);
      }
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(passwordRegex.test(value));
    setPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  return (
    <div className="createpass-container">
      <div className="createpass-box">
        <h2>สร้างรหัสผ่าน</h2>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="รหัสผ่าน"
            className={`custom-input ${password && !passwordValid ? "error" : ""}`}
          />
          {password && !passwordValid && (
            <div className="password-hint">
              รหัสผ่านต้องประกอบด้วยตัวอักษรใหญ่, ตัวอักษรเล็ก, ตัวเลข และมีความยาว 8-20 ตัวอักษร
            </div>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="ยืนยันรหัสผ่าน"
            className={`custom-input ${confirmPassword && !passwordMatch ? "error" : ""}`}
          />
          {confirmPassword && !passwordMatch && (
            <div className="password-match-error">
              รหัสผ่านไม่ตรงกัน
            </div>
          )}
        </div>

        <button
          className="createpass-button"
          onClick={handleCreatePass}
          disabled={!passwordValid || !passwordMatch}
        >
          สร้างบัญชี
        </button>
      </div>
    </div>
  );
};

export default CreatePassDriver;