import React from "react";
import { useNavigate } from "react-router-dom";
import "./HistoryPage.css";
import { GiPositionMarker } from "react-icons/gi";
import { PiMapPinArea } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { PiCalendarBlankLight } from "react-icons/pi";

function HistoryPage() {
  const navigate = useNavigate();

  const historyData = [
    {
      date: "Nov 15, 2024",
      location: "อู่รถปทุม",
      area: "ใกล้ฟิวเจอร์ปาร์ครังสิต",
      price: "1,500 บาท",
      status: "Order Confirm",
    },
    {
      date: "Nov 15, 2024",
      location: "A space บางนา",
      area: "ใกล้ BTS รามอินทรา 3",
      price: "3,200 บาท",
      status: "Order Completed",
    },
    {
      date: "Nov 15, 2024",
      location: "เมืองทองธานี",
      area: "บางใหญ่",
      price: "1,800 บาท",
      status: "Order Completed",
    },
    {
      date: "Nov 17, 2024",
      location: "ม.รังสิต",
      area: "บางใหญ่",
      price: "2,800 บาท",
      status: "Order Completed",
    },
    {
      date: "Nov 17, 2024",
      location: "ม.ศรีปทุม",
      area: "ชลบุรี",
      price: "1,800 บาท",
      status: "Order Cancelled",
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="history-container">
      <button onClick={handleBack} className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <title>Back</title>
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </button>

      <h2>ประวัติการใช้บริการ</h2>
      <div className="calendarrrrrrrrr-container">
      <select className="calendar-container">
        <option>Nov 29, 2024</option>
      </select>
      </div>

      <div className="history-list">
        {historyData.map((item, index) => (
          <div key={index} className="history-item">
            <p>
              <PiMapPinArea className="icon" />
              จุดเริ่มต้น: {item.location}
            </p>
            <p>
              <GiPositionMarker className="icon" />
              จุดปลายทาง: {item.area}
            </p>
            <p>
              <PiCalendarBlankLight className="icon" />
              วันที่: {item.date}
            </p>
            <div className="money-container">
              <p className="money">
                <MdOutlinePriceChange className="icon" />
                {item.price}
              </p>
            </div>
            <div className="status-container">
              <button className={`status-btn ${item.status.toLowerCase().replace(" ", "-")}`}>
                {item.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;