import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Private.css';

function Private() {
  const navigate = useNavigate();

  const questions = [
    { text: "ข้อมูลส่วนตัวจะถูกเก็บอย่างไร", icon: true, content: "ข้อมูลส่วนตัวมักจะถูกเข้ารหัสเพื่อป้องกันการเข้าถึงจากบุคคลที่ไม่ได้รับอนุญาต" },
    { text: "ถ้าข้อมูลถูกเปิดเผย จะทำอย่างไร", icon: true, content: "ใแจ้งผู้ใช้หรือผู้ที่ได้รับผลกระทบทันที หากเกิดเหตุการณ์ที่ข้อมูลถูกเปิดเผย" },
    { text: "ข้อมูลย้ายรถยนต์จะถูกเก็บอย่างไร", icon: true, content: "ข้อมูลจะถูกเก็บในฐานข้อมูลที่มีความปลอดภัยสูงโดยคนเก็บข้อมูล" },
    { text: "ความปลอดภัยของข้อมูลรถ", icon: true, content: "การยืนยันตัวตนสองขั้นตอนเพื่อเพิ่มความปลอดภัยในการเข้าถึงข้อมูลส่วนตัวของลูกค้า" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="payment-details-container">
      <button
        onClick={() => navigate(-1)} 
        className="back-button"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
          style={{ color: "#2Ea366", marginTop: "10px", marginLeft: "10px" }}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>

      <h6>Privacy and Security</h6>
      {questions.map((question, index) => (
        <div
          key={index}
          className={`question-item ${openIndex === index ? "open" : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #2ea366",
            borderRadius: openIndex === index ? "4px" : "8px",
            marginBottom: "20px",
            padding: openIndex === index ? "8px" : "16px",
            transition: "all 0.3s ease",
            marginLeft: "20px",
            width: "350px",
          }}
        >
          <p
            onClick={() => toggleQuestion(index)}
            className="question-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              cursor: "pointer",
              margin: 0,
              width: "100%",
            }}
          >
            {question.text}
            {question.icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'}`}
                viewBox="0 0 16 16"
                style={{
                  marginLeft: "auto",
                }}
              >
                <path
                  d={openIndex === index
                    ? "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" 
                    : "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"} // Plus icon
                />
              </svg>
            )}
          </p>

          <div
            style={{
              height: openIndex === index ? "70px" : "0",
              overflow: openIndex === index ? "visible" : "hidden",
              padding: openIndex === index ? "10px 10px 20px" : "0 10px",
              paddingBottom: openIndex === index ? "0.5px" : "0", 
              borderTop: openIndex === index ? "1px solid #ccc" : "none",
              borderRadius: openIndex === index ? "0 0 4px 4px" : "8px",
              backgroundColor: "#f9f9f9",
              transition: "all 0.3s ease",
              display: "flex", 
              justifyContent: "start", 
              alignItems: "center", 
            }}
          >
            {openIndex === index && <p>{question.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Private;
