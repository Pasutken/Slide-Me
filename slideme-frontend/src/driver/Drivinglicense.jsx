import "./Drivinglicense.css";
import { useNavigate } from "react-router-dom";

function Drivinglicense() {
  const navigate = useNavigate();

  const handletootppage = () => {
    navigate("/slideMeForm");
  }
  return (
    <div className="drivinglicense-container">
      {/* Header */}
      <div className="drivinglicense-header">
        <h1>SLIDE ME</h1>
        <img
          src="https://img2.pic.in.th/pic/d92a14f1-d889-4a6f-a2b4-bb926c7b8bb1-Photoroom.png"
          alt="Driving License"
          className="drivinglicense-image"
        />
      </div>

      {/* Body */}
      <div className="drivinglicense-body">
        <div className="scan-container">
          <span className="bi bi-camera camera-icon"></span>
          <p>สแกนใบขับขี่ได้ที่นี้</p>
          <button className="scan-button">➤</button>
        </div>

        {/* Checkbox */}
        <div className="checkbox-container">
          <input type="checkbox" id="agreement" className="checkbox-input" />
          <label htmlFor="agreement" className="checkbox-label">
            ฉันยอมรับเงื่อนไขและข้อตกลง
          </label>
        </div>

        {/* Button ดำเนินการต่อ */}
        <button className="continue-button" onClick={handletootppage}>ดำเนินการต่อ</button>
      </div>
    </div>
  );
}

export default Drivinglicense;
