import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const RegisterDriver = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = {
        email: email,
        password: password,
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        idNumber: idNumber,
        role: "driver", // ระบุ role ว่าเป็น driver
        slideCarServiceId: 1, // เพิ่ม slideCarServiceId
        vehicleId: 1, // เพิ่ม vehicleId
        bank_account_number: bankAccountNumber, // เพิ่มหมายเลขบัญชีธนาคาร
        bank_name: bankName, // เพิ่มชื่อธนาคาร
      };

      console.log("Data being sent to backend:", data); // ตรวจสอบข้อมูลที่ส่ง

      const response = await axios.post("http://localhost:5000/api/auth/register-driver", data);
      console.log(response.data); // ตรวจสอบข้อมูลที่ได้รับจาก backend
      alert("สมัครสมาชิกสำเร็จ");
      navigate("/login-driver"); // เปลี่ยนเส้นทางไปยังหน้า login
    } catch (error) {
      console.error("Error registering driver:", error);
      alert("เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">สมัครสมาชิก Driver</h2>
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
            type="text"
            placeholder="หมายเลขบัตรประชาชน"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
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
        <div className="form-group">
          <input
            type="text"
            placeholder="หมายเลขบัญชีธนาคาร"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            className="custom-input"
            required
          />
        </div>
        <div className="form-group">
          <select
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="custom-input"
            required
          >
            <option value="">เลือกธนาคาร</option>
            <option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</option>
            <option value="ธนาคารกสิกรไทย">ธนาคารกสิกรไทย</option>
            <option value="ธนาคารไทยพาณิชย์">ธนาคารไทยพาณิชย์</option>
            <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
            <option value="ธนาคารทหารไทย">ธนาคารทหารไทย</option>
            <option value="ธนาคารยูโอบี">ธนาคารยูโอบี</option>
            <option value="ธนาคารออมสิน">ธนาคารออมสิน</option>
            <option value="ธนาคารอาคารสงเคราะห์">ธนาคารอาคารสงเคราะห์</option>
            <option value="ธนาคารไทยเครดิต">ธนาคารไทยเครดิต</option>
          </select>
        </div>
        <button onClick={handleRegister} className="register-button">
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default RegisterDriver;
