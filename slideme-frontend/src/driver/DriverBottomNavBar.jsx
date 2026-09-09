import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverBottomNavBar.css';

const DriverBottomNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="driver-bottom-navbar">
      <button className="nav-button" onClick={() => navigate('/receive-job')}>
        <img src="https://img5.pic.in.th/file/secure-sv1/job-creation.png" alt="รับงาน" />
        <span>รับงาน</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/home-driver')}>
        <img src="https://img2.pic.in.th/pic/accepted.png" alt="งานปัจจุบัน" />
        <span>งานปัจจุบัน</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/history')}>
        <img src="https://img2.pic.in.th/pic/history15811cb8693c0087.png" alt="History" />
        <span>ประวัติ</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/prodriver')}>
        <img src="https://img5.pic.in.th/file/secure-sv1/user0d6854e84a6b9e29.png" alt="Profile" />
        <span>โปรไฟล์</span>
      </button>
    </div>
  );
};

export default DriverBottomNavBar;