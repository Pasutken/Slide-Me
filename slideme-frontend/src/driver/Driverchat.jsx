import React from "react";
import "./Driverchat.css";
import { useNavigate } from "react-router-dom";

const Driverchat = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div className="driver-chat-container">
      <div className="driver-chat-header">
        <button className="back-btn bi bi-arrow-left" onClick={handleBackClick}>&nbsp;&nbsp;</button>
        <img
          src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
          alt="User"
        />
        <div className="driver-user-info">
          <h2>น้องแดน</h2>
          <span>วันนี้ 5:00 PM</span>
        </div>
        <button className="call-btn bi bi-telephone"></button>
      </div>

      <div className="driver-chat-content">
        <div className="chat-timestamp">5:00 PM</div>
        <div className="driver-message sent">
          สวัสดีครับ ตอนนี้อยู่ที่ไหนครับ?
        </div>
        <div className="chat-timestamp">5:03 PM</div>
        <div className="driver-message received">อยู่แถวฟิวเจอร์พาร์คค่ะ</div>
        <div className="chat-timestamp">5:10 PM</div>
        <div className="driver-message sent">
          โอเคครับ อีกประมาณ 10 นาทีจะถึงนะครับ
        </div>
        <div className="chat-timestamp">5:20 PM</div>
        <div className="driver-message received">
          ได้ค่ะ รออยู่ที่ประตู 3 ค่ะ
        </div>
        <div className="chat-timestamp">5:27 PM</div>
        <div className="driver-message sent">
          ผมมาถึงแล้วครับ ขับรถสีดำ ทะเบียน กข 1234
        </div>
      </div>

      <div className="driver-input-container">
        <input type="text" placeholder="พิมพ์ข้อความ..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default Driverchat;
