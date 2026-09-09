import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const DetailDriverForm = () => {
  const { state } = useLocation(); // รับข้อมูลจาก phone_number ที่ส่งมาจาก register-driver
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const [idNumber, setIdNumber] = useState(null); // สุ่ม ID Number
  const navigate = useNavigate();

  // ฟังก์ชันสุ่มเลข ID
  const generateRandomID = () => {
    return Math.floor(10000000 + Math.random() * 90000000); // สุ่มตัวเลข 8 หลัก
  };

  useEffect(() => {
    setIdNumber(generateRandomID()); // สุ่ม ID Number เมื่อโหลดหน้า
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, surname, email } = formData;
  
    try {
      // ส่งข้อมูลไปยัง Backend
      const response = await axios.post("http://localhost:5000/detail-driverform", {
        phone_number: state.phone_number, // เบอร์โทรจะถูกส่งมาจากหน้า /register-driver
        name,
        surname,
        id_number: idNumber, // หมายเลข ID ที่สุ่มให้
        email,
      });
  
      console.log(response.data); // ถ้าสำเร็จจะแสดงข้อความจาก Backend
  
      // นำทางไปที่หน้า /account-driver และส่งข้อมูล phone_number ไปที่ state
      navigate("/account-driver", { state: { phone_number: state.phone_number } });
    } catch (error) {
      console.error("Error saving driver details:", error.response ? error.response.data : error);
    }
  };  

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>กรอกข้อมูลส่วนตัว</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ชื่อ</label>
            <input
              type="text"
              name="name"
              placeholder="ชื่อ"
              value={formData.name}
              onChange={handleChange}
              className="custom-input"
              required
            />
          </div>

          <div className="form-group">
            <label>นามสกุล</label>
            <input
              type="text"
              name="surname"
              placeholder="นามสกุล"
              value={formData.surname}
              onChange={handleChange}
              className="custom-input"
              required
            />
          </div>

          <div className="form-group">
            <label>หมายเลข ID</label>
            <input
              type="text"
              name="id_number"
              value={idNumber}
              readOnly
              className="custom-input"
            />
          </div>

          <div className="form-group">
            <label>อีเมล์</label>
            <input
              type="email"
              name="email"
              placeholder="อีเมล์"
              value={formData.email}
              onChange={handleChange}
              className="custom-input"
              required
            />
          </div>

          <button type="submit" className="register-button">
            ดำเนินการต่อ
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailDriverForm;