import "./Datadriver.css";
import { useNavigate } from "react-router-dom";

function Datadriver() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="datadriver-container">
      {/* ส่วนหัว */}
      <div className="datadriver-header">
        <button className="datadriver-back-btn bi bi-arrow-left" onClick={handleGoBack}></button>
        <h2>ข้อมูลผู้ขับ</h2>
      </div>

      {/* โปรไฟล์ผู้ขับ */}
      <div className="datadriver-profile">
        <img
          className="profile-image"
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="โปรไฟล์"
        />
        <div className="profile-info">
          <p className="profile-name">สมชาย</p>
          <p className="profile-license">ทะเบียน: 1กข 1234</p>
          <p className="profile-rating">⭐&nbsp;4.9</p>
        </div>
        <div className="profile-actions">
          <button className="button-icon bi bi-telephone"></button>
          <button className="button-icon bi bi-chat-dots"></button>
        </div>
      </div>

      {/* ส่วนข้อมูลส่วนตัว */}
      <div className="datadriver-section personal-info">
        <h3>ข้อมูลผู้ขับ</h3>
        <div className="info-item">
          <span>ชื่อ:</span> สมชาย ใจดี
        </div>
        <div className="info-item">
          <span>ทะเบียนรถ:</span> 1กข 1234 กรุงเทพ
        </div>
        <div className="info-item">
          <span>วันที่สมัคร:</span> 1 ม.ค. 2565
        </div>
        <div className="info-item">
          <span>รหัสประจำตัว:</span> DR123456
        </div>
      </div>

      {/* ประวัติการขับขี่ */}
      <div className="datadriver-section driving-history">
        <h3>ประวัติการขับขี่</h3>
          <div className="info-item">
            <span>งานที่เสร็จสิ้น:</span> 120 งาน
          </div>
          <div className="info-item">
          <span>ระยะทางขับขี่:</span> 15,000 กม.
          </div>
          <div className="info-item">
          <span>เวลาทำงาน:</span> 500 ชม.
          </div>
          <div className="info-item">
          <span>คะแนนเฉลี่ย:</span> ⭐ 4.9
          </div>
      </div>

      {/* รีวิวจากลูกค้า */}
      <div className="datadriver-section reviews">
        <h3>รีวิวจากลูกค้า</h3>
        <div className="review-item">
          <p>
            <strong>ชนะชัย:</strong> บริการดีเยี่ยม ตรงต่อเวลา
          </p>
          <p>
            <em>เมื่อ 2 วันที่แล้ว</em>
          </p>
        </div>
        <div className="review-item">
          <p>
            <strong>นภัส:</strong> สุภาพและบริการดีมาก
          </p>
          <p>
            <em>เมื่อ 5 วันที่แล้ว</em>
          </p>
        </div>
        <div className="review-item">
          <p>
            <strong>ศุภชัย:</strong> ขับขี่ปลอดภัยและเอาใจใส่ดี
          </p>
          <p>
            <em>เมื่อ 1 สัปดาห์ก่อน</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Datadriver;
