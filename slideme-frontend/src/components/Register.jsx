// Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async () => {
    try {
      const data = {
        email: email,
        password: password,
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        role: 'customer', // เพิ่ม role เป็น customer หรือ driver ตามที่ต้องการ
      };
  
      console.log('Data being sent to backend:', data); // ตรวจสอบข้อมูลที่ส่ง
  
      const response = await axios.post('http://localhost:5000/api/auth/register', data);
      console.log(response.data);  // ตรวจสอบข้อมูลที่ได้รับจาก backend
      alert('สมัครสมาชิกสำเร็จ');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };  

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">สมัครสมาชิก</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="อีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="ชื่อ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="นามสกุล"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="เบอร์โทรศัพท์"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <button onClick={handleRegister} className="register-button">ยืนยัน</button>
      </div>
    </div>
  );
};

export default Register;