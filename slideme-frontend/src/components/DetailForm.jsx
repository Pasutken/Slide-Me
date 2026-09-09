import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './DetailForm.css';

const DetailForm = () => {
  const { state } = useLocation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleNext = async () => {
    try {
      const response = await axios.post("http://localhost:5000/detailform", {
        phone_number: state.phone_number,
        name,
        surname,
        email,
      });

      console.log(response.data);

      navigate("/otp", {
        state: {
          phone_number: state.phone_number,
          name,
          surname,
          email,
        },
      });
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <div className="formmy-container">
      <h2>สมัครสมาชิก</h2>
      <p>
        มีบัญชีอยู่แล้ว? <a href="/login">เข้าสู่ระบบ</a>
      </p>
      <div className="detail-form">
        <label>
          ชื่อ *
          <input
            className="cuuussstommm-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          นามสกุล *
          <input
            className="cuuussstommm-input"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          อีเมล *
          <input
            className="cuuussstommm-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <div className="checkkkkyyy-label">
          <input type="checkbox" />
          <span>ยอมรับเงื่อนไขการใช้งาน และ นโยบายความเป็นส่วนตัว</span>
        </div>

        <button className="suubbbmt" onClick={handleNext}>
          สมัครสมาชิก
        </button>
      </div>
    </div>
  );
};

export default DetailForm;