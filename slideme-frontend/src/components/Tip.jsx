import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tip.css";

function Tip() {
  const [tipAmount, setTipAmount] = useState("");

  const navigate = useNavigate();

  const handlefinish = () => {
    navigate("/home");
  };

  // ฟังก์ชันที่ใช้เช็คการกรอกจำนวนทิป
  const handleTip = () => {
    if (tipAmount === "") {
      alert("กรุณาระบุจำนวนทิปก่อนให้ทิป");
    } else {
      navigate("/home");
    }
  }

  return (
    <div className="tip-container">
      <div className="tip-img">
        <img
          className="profile"
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="โปรไฟล์"
        />
        <div className="name">
          <p>สมชาย </p>
        </div>
        <div className="position-container">
          <h6>สนใจให้ทิปคนขับไหม ?</h6>
        </div>
        <div className="text">
          <p>คุณสามารถให้ทิปคนขับได้</p>
        </div>
      </div>

      <div className="tip-input-container">
        <input
          type="number"
          placeholder="ระบุจำนวนทิป"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          className="tip-input"
        />
        <span className="currency">บาท</span>
      </div>

      <div className="tip-buttons-container">
        <button className="btn btn-danger" onClick={handlefinish}>ไม่ให้ทิป</button>
        <button className="btn btn-success" onClick={handleTip}>
          ให้ทิป
        </button>
      </div>

    </div>
  );
}

export default Tip;