import { Link } from "react-router-dom";
import DriverBottomNavBar from "./DriverBottomNavBar";

function Menu() {
  return (
    <div className="menu1-container">
      <div className="menu-profile-section">
        <div className="menu-profile-icon">
          <img
            src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
            alt="Profile"
          />
        </div>
        <div className="menu-profile-info">
          <div className="menu-profile-name">นายสมชาย </div>
          <div className="menu-profile-status">Gold Member</div>
        </div>
        <span className="menu-arrow">›</span>
      </div>
      <div className="menu-items">
        <Link to={"/notifications"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            การแจ้งเตือน<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/pricetable"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            ค่าจัดส่ง<span className="menu-arrow">›</span>
          </div>
        </Link>
        <div className="menu-item">
          ภาษา<span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          การตั้งค่า<span className="menu-arrow">›</span>
        </div>
        <Link to={"/report"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            รายงาน<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/chat-admin"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            ศูนย์ความช่วยเหลือ<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/aboutdev"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            รายชื่อผู้พัฒนาระบบ<span className="menu-arrow">›</span>
          </div>
        </Link>
      </div>
      <DriverBottomNavBar />
    </div>
  );
}

export default Menu;