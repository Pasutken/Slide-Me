import React from "react";
import "./Chat.css";
import { useNavigate } from "react-router-dom";

const Chat = () => {
const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="chat-container">
      <div className="header">
        <button className="chat-back-btn bi bi-arrow-left" onClick={handleGoBack}>&nbsp;&nbsp;</button>
        <img
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="User"
        />
        <div className="user-info">
          <h2>สมชาย</h2>
          <span>วันนี้ 5:00 PM</span>
        </div>
        <button className="bi bi-telephone"></button>
      </div>

      <div className="chat-content">
        <div className="timestamp">5:00 PM</div>
        <div className="message sent1">อยู่ที่ไหนแล้วแล้วครับ</div>
        <div className="timestamp">5:03 PM</div>
        <div className="message received">ผมอยู่แถววิภาวดีแล้วครับ</div>

        <div className="message sent">
          โอเคครับ ผมอยู่ตรงหน้าฟิวเจอร์เลยครับ
        </div>

        <div className="timestamp">5:13 PM</div>
        <div className="message received1">รอสักครู่ครับ</div>

        <div className="timestamp">5:27 PM</div>
        <div className="message received1">ผมถึงแล้วครับ</div>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Type a message..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default Chat;
