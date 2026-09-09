import { useState, useEffect } from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [user, setUser] = useState(null);

  // ดึงข้อมูลผู้ใช้จาก localStorage เมื่อหน้าโหลด
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo')); // ดึงข้อมูลจาก localStorage
    if (storedUser) {
      setUser(storedUser); // เก็บข้อมูลใน state
    }
  }, []);

  const navigate = useNavigate();

  // ฟังก์ชันสำหรับการ logout
  const handleLogout = () => {
    localStorage.removeItem('userInfo');  // ลบข้อมูลผู้ใช้จาก localStorage
    navigate('/login');
  };

  return (
    <div className="menu1-container">
      <div className="menu-profile-section">
        <div className="menu-profile-icon">
          {/* แสดงรูปโปรไฟล์ ถ้าผู้ใช้มีรูปโปรไฟล์ */}
          <img
            src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="menu-profile-info">
          <div className="menu-profile-name">
            {user ? `${user.name} ${user.surname}` : 'ไม่พบข้อมูลผู้ใช้'}
          </div>
          <div className="menu-profile-status">Gold Member</div>
        </div>
        <span className="menu-arrow">›</span>
      </div>

      <div className="menu-items">
        {/* รายการเมนู */}
        <div className="menu-item">
          <span>การแจ้งเตือน</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>ค่าจัดส่ง</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>ภาษา</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>การตั้งค่า</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>รายงาน</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>ศูนย์ความช่วยเหลือ</span>
          <span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          <span>รายชื่อผู้พัฒนาระบบ</span>
          <span className="menu-arrow">›</span>
        </div>
      </div>

      {/* เพิ่มปุ่ม Logout ที่ด้านล่างสุด */}
      <div className="menu-item">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Menu;