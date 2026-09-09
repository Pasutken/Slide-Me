import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SlideMeForm.css';

const SlideMeForm = () => {
  const { state } = useLocation(); // รับข้อมูลจาก state ที่ส่งมาจากหน้า AccountDriver

  const [vehBrand, setVehBrand] = useState('');
  const [vehModel, setVehModel] = useState('');
  const [vehLicense, setVehLicense] = useState('');
  const [vehVin, setVehVin] = useState('');
  const [vehicleImage, setVehicleImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('vehicle_image', vehicleImage);
    formData.append('veh_brand', vehBrand);
    formData.append('veh_model', vehModel);
    formData.append('veh_license', vehLicense);
    formData.append('veh_vin', vehVin);
    formData.append('phone_number', state.phone_number);  // ส่ง phone_number ด้วย
  
    // ตรวจสอบค่าที่ส่งไป
    console.log([...formData]);
  
    try {
      const response = await axios.post('http://localhost:5000/slideMeForm', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);  // ถ้าสำเร็จจะแสดงข้อความจาก Backend
  
      navigate('/otp-driver', { 
        state: { 
          phone_number: state?.phone_number,
          veh_brand: vehBrand, 
          veh_model: vehModel,
          veh_license: vehLicense,
          veh_vin: vehVin,
          vehicle_image: response.data.image 
        } 
      });
  
    } catch (error) {
      console.error('Error saving vehicle data:', error);
    }
  };  

  return (
    <div className="vehicle-form-container">
      <h2>กรอกรายละเอียดรถของคุณ</h2>
      <div className="form-group">
        <label>ยี่ห้อรถ</label>
        <input
          type="text"
          value={vehBrand}
          onChange={(e) => setVehBrand(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>รุ่นรถ</label>
        <input
          type="text"
          value={vehModel}
          onChange={(e) => setVehModel(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>ทะเบียนรถ</label>
        <input
          type="text"
          value={vehLicense}
          onChange={(e) => setVehLicense(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>VIN</label>
        <input
          type="text"
          value={vehVin}
          onChange={(e) => setVehVin(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>รูปภาพรถ</label>
        <input
          type="file"
          onChange={(e) => setVehicleImage(e.target.files[0])}
          required
        />
      </div>

      <button onClick={handleSubmit}>บันทึกข้อมูล</button>
    </div>
  );
};

export default SlideMeForm;