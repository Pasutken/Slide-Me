import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
    console.log(`Rating selected: ${value}`);
  };

  const submitRating = () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    navigate("/tip"); // เปลี่ยนเส้นทางไปยังหน้าอื่น
  };

  return (
    <div className="form-container">
      <div className="form-img">
        <img
          className="profile"
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="โปรไฟล์"
        />
        <div className="name">
          <p>สมชาย</p>
        </div>
        <div className="position-container">
          <h6>ให้คะแนนคนขับกันเถอะ</h6>
        </div>
        <div className="text">
          <p>คนขับรถสไลด์บริการคุณดีไหม?</p>
        </div>
      </div>

      {/* ดาวให้คะแนน */}
      <div className="star">
        <ul className="avaliacao">
          {[1, 2, 3, 4, 5].map((value) => (
            <li
              key={value}
              className={`star-icon ${value <= rating ? "ativo" : ""}`}
              data-avaliacao={value}
              onClick={() => handleStarClick(value)}
            ></li>
          ))}
        </ul>
      </div>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="driver-details">
        <p>
          <strong>ทะเบียนรถ:</strong> 1กข 1234
        </p>
        <p>
          <strong>คะแนนสะสม:</strong> ⭐ 4.9
        </p>
        <p>
          <strong>งานที่เสร็จสมบูรณ์:</strong> 120 งาน
        </p>
      </div>

      {/* แสดงความคิดเห็นของคุณ */}
      <div className="comment">
        <textarea
          className="details"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="แสดงความคิดเห็นของคุณ"
        ></textarea>
      </div>

      {/* ปุ่มดำเนินการต่อ */}
      <button className="form-btn" onClick={submitRating}>ดำเนินการต่อ</button>
    </div>
  );
}

export default Form;