import React from "react";
import { useLocation } from "react-router-dom";
import './Jajaja.css';

function Jajaja() {
  // ใช้ useLocation เพื่อดึงข้อมูลจาก state
  const location = useLocation();
  const { rating, comment } = location.state || { rating: 0, comment: '' };

  return (
    <div>
      <p><strong>คะแนนที่ให้: </strong>{rating} ดาว</p>
      <p><strong>ความคิดเห็น: </strong>{comment}</p>
    </div>
  );
}

export default Jajaja;
