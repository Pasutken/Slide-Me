// src/components/MapView.jsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './MapView.css';

const MapView = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ lat: 13.989015971552709, lng: 100.61575933224323 }); // ตำแหน่งเริ่มต้น
  const [directions, setDirections] = useState(null); // เก็บข้อมูลเส้นทาง
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAU-zXlLCv3bX76fLS4mPEYYIrSOxkAfnA', // ใส่ API Key ของคุณ
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleDestinationClick = () => {
    navigate('/destination'); // นำทางไปหน้า /destination
  };

  useEffect(() => {
    if (isLoaded && map) {
      const origin = position; // ตำแหน่งเริ่มต้น
      const destination = {
        lat: 13.85600682383675, lng: 100.58578256895566 }; // จุดหมายปลายทาง (ตัวอย่างเป็นกรุงเทพฯ)

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [isLoaded, map]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map-view">
      <GoogleMap
        center={position}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={onLoad}
      >
        <Marker position={position} />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default MapView;