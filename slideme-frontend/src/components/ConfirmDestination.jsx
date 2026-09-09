// src/components/ConfirmDestination.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ConfirmDestination.css';
import Navbar from './Navbar';
import MapView from './MapView';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmDestination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { garageId } = location.state || {}; // รับ garageId ที่ส่งมา

  const [garageName, setGarageName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (garageId) {
      axios.get(`http://localhost:5000/api/garage/get/${garageId}`)
        .then((res) => {
          if (res.data.status) {
            setGarageName(res.data.data.name || 'ไม่พบชื่ออู่');
          } else {
            setGarageName('ไม่พบข้อมูล');
          }
        })
        .catch((err) => {
          console.error('Error fetching garage:', err);
          setGarageName('เกิดข้อผิดพลาด');
        })
        .finally(() => setLoading(false));
    } else {
      setGarageName('ไม่มีข้อมูลปลายทาง');
      setLoading(false);
    }
  }, [garageId]);  

  const handleConfirmClick = () => {
    navigate('/choosetowtruck');
  };

  return (
    <div className="confirm-destination-container">
      <Navbar />
      <div className="mapview-container">
        <MapView />
        <div className="gray-overlay">
          <div className="confirm-box">
            <div className="confirm-destination-header">
              <div className="drag-bar" />
            </div>
            <div className="location-info">
              <div className="location-item">
                <span className="icon green-circle">🟢</span>
                <div className="text">
                  <div className="label">ตำแหน่งจุดรับ</div>
                  <div className="name">ตำแหน่งปัจจุบัน</div>
                </div>
              </div>
              <div className="location-separator" />
              <div className="location-item">
                <span className="icon black-circle">📍</span>
                <div className="text">
                  <div className="label">ตำแหน่งจุดส่ง</div>
                  <div className="name">
                    {loading ? 'กำลังโหลด...' : garageName}
                  </div>
                </div>
              </div>
            </div>
            <button className="confirm-button" onClick={handleConfirmClick}>
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDestination;