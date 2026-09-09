import React from "react";
import "./Chatadmin.css";

const Chatadmin = () => {
  return (
    <div className="chatBox-container">
      <div className="chatBox-header">
        <img
          src="https://img2.pic.in.th/pic/image2da80171dc7f06ea2.png"
          alt="User"
        />
        <div className="chatBox-user-info">
          <h2>Admin</h2>
          <span className="bi bi-circle-fill">&nbsp;Online</span>
        </div>
        <button className="chatBox-close-btn">
          <i className="bi bi-dash-circle"></i>
        </button>
      </div>

      <div className="chatBox-content">
        <div className="chatBox-timestamp">9:00 PM</div>
        <div className="chatBox-message chatBox-sent">ติดต่อคนขับไม่ได้ครับ</div>
        <div className="chatBox-timestamp">9:00 PM</div>
        <div className="chatBox-message chatBox-received">ทางเรารับเรื่องแล้ว กรุณารอสักครู่</div>

        <div className="chatBox-timestamp">9:02 PM</div>
        <div className="chatBox-message chatBox-received1">
          คุณ แดน ตอนนี้เรากำลังประสานงานกับคนขับจะติดต่อ
          เมื่อมีความคืบหน้า
        </div>

        <div className="chatBox-timestamp">9:15 PM</div>
        <div className="chatBox-message chatBox-sent1">ผมติดต่อคนขับไม่ได้เลยครับ</div>
      </div>

      

      <div className="chatBox-input-container">
        <input type="text" placeholder="Type a message..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default Chatadmin;
