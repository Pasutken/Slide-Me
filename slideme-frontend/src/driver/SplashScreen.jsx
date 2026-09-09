// src/components/SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ตั้งเวลาแสดงหน้า Splash Screen เป็น 2 วินาที
    const timer = setTimeout(() => {
      navigate('/login-driver');
    }, 2000);

    return () => clearTimeout(timer); // ล้าง timer เมื่อคอมโพเนนต์ถูก unmount
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="https://img2.pic.in.th/pic/slideme-logo.png" alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
