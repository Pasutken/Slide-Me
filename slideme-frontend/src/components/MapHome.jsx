// src/components/MapView.jsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './MapHome.css';

const MapView = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({
    lat: parseFloat(localStorage.getItem('userLat')) || 13.779837, // ดึงค่าจาก localStorage หรือใช้ค่าเริ่มต้น
    lng: parseFloat(localStorage.getItem('userLng')) || 100.639980, // ดึงค่าจาก localStorage หรือใช้ค่าเริ่มต้น
  });
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAU-zXlLCv3bX76fLS4mPEYYIrSOxkAfnA', // ใส่ API Key ของคุณที่นี่
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleDestinationClick = () => {
    navigate('/destination'); // นำทางไปหน้า /destination
  };

  useEffect(() => {
    const userLat = localStorage.getItem('userLat');
    const userLng = localStorage.getItem('userLng');

    if (userLat && userLng) {
      setPosition({
        lat: parseFloat(userLat),
        lng: parseFloat(userLng),
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map-view">
      <div className="search-container">
        <div className="search-item">
          <span className="icon">🟢</span>
          <span className="text">ตำแหน่งปัจจุบัน</span>
        </div>
        <div className="search-item" onClick={handleDestinationClick}>
          <span className="icon">🔍</span>
          <span className="text">เลือกจุดหมายปลายทาง</span>
        </div>
      </div>

      <GoogleMap
        center={position}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={onLoad}
      >
        <Marker position={position} />
      </GoogleMap>
    </div>
  );
};

export default MapView;