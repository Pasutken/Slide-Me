import React, { useState } from "react";
import "./Notifications.css";
import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();
  const handletobackk = () => {
    navigate(-1);
  }
  const [notifications, setNotifications] = useState([
    "การจองรถสไลด์ของคุณได้รับการยืนยันแล้ว!",
    "รถสไลด์กำลังเดินทางไปยังตำแหน่งของคุณ",
    "รถสไลด์ได้มาถึงที่หมายแล้ว โปรดตรวจสอบสถานะ",
    "การชำระเงินสำเร็จ ขอบคุณที่ใช้บริการของเรา",
    "โปรดให้คะแนนและแสดงความคิดเห็นเกี่ยวกับบริการของเรา",
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <button className="button-back bi bi-arrow-left" onClick={handletobackk}></button>
        <h2>การแจ้งเตือน 🔔</h2>
        <button
          className="button-trash bi bi-trash"
          onClick={clearNotifications}
        ></button>
      </div>
      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <span className="notification-text">{notification}</span>
              <span className="notification-time">2 hrs ago</span>
            </div>
          ))
        ) : (
          <p className="no-notifications">ไม่มีการแจ้งเตือน</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
