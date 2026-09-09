import React from 'react';
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import DriverBottomNavBar from './DriverBottomNavBar';
import Navbar from './Navbar';

const CheckDestination = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAU-zXlLCv3bX76fLS4mPEYYIrSOxkAfnA', // แทนที่ด้วย API Key ของคุณ
  });

  const directionsResponse = {
    // ตัวอย่างข้อมูลเส้นทาง สามารถใช้ Google Directions API แทน
    routes: [
      {
        legs: [
          {
            distance: { text: '17.1 กม.', value: 17100 },
            duration: { text: '15 นาที', value: 900 },
            start_address: 'เมเจอร์รังสิต',
            end_address: 'ปลายทาง',
          },
        ],
      },
    ],
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="check-destination-container">
      <Navbar />
      <GoogleMap
        center={{ lat: 13.981, lng: 100.617 }}
        zoom={13}
        mapContainerStyle={{ width: '100%', height: '80vh' }}
      >
        <DirectionsRenderer directions={directionsResponse} />
      </GoogleMap>
      <DriverBottomNavBar />
    </div>
  );
};

export default CheckDestination;