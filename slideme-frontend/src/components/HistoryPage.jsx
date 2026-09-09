import React from "react";
import { useNavigate } from "react-router-dom";
import "./HistoryPage.css";
import { GiPositionMarker } from "react-icons/gi";
import { PiMapPinArea } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { PiCalendarBlankLight } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";

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

  const handleBack = () => navigate(-1);

  return (
    <div className="history-container">
      {/* ปุ่มย้อนกลับ */}
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

      <section className="date-filter">
        <div className="select-container" style={{ position: "relative" }}>
          <select style={{ paddingRight: "30px" }}>
            <option value="Nov 29, 2024">Nov 29, 2024</option>
            <option value="Nov 28, 2024">Nov 28, 2024</option>
            <option value="Nov 27, 2024">Nov 27, 2024</option>
          </select>
          <IoChevronDown
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#2EA366",
            }}
          />
        </div>
      </section>

      <div className="history-list">
        {historyData.map((item, index) => (
          <div key={index} className="history-item">
            <p>
              <PiMapPinArea style={{ color: "#2EA366", marginRight: "8px" }} />
              จุดเริ่มต้น: {item.location}
            </p>
            <p>
              <GiPositionMarker style={{ marginRight: "8px" }} />
              จุดปลายทาง: {item.area}
            </p>
            <p>
              <PiCalendarBlankLight style={{ marginRight: "8px" }} />
              วันที่: {item.date}
            </p>
            <p className="price">
              <MdOutlinePriceChange style={{ marginRight: "8px" }} />
              {item.price}
            </p>
            <div className="status-container">
              <span className={`status-btn ${item.status.toLowerCase().replace(" ", "-")}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;