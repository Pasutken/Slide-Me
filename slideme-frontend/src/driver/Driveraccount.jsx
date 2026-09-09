import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Driveraccount.css";

const AccountDriver = () => {
  const { state } = useLocation(); // รับข้อมูลจาก phone_number ที่ส่งมาจากหน้า /register-driver
  const [bankAccountNumber, setBankAccountNumber] = useState(""); // ให้เริ่มต้นเป็นค่าว่าง
  const [bankName, setBankName] = useState(""); // ให้เริ่มต้นเป็นค่าว่าง
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // เพื่อไม่ให้ฟอร์มรีเฟรชหน้า

    // ตรวจสอบว่าทุกข้อมูลที่จำเป็นได้รับการกรอก
    if (!bankAccountNumber || !bankName) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/account-driver", {
        phone_number: state.phone_number, // ส่งเบอร์โทรที่ได้รับจาก state
        bank_account_number: bankAccountNumber,
        bank_name: bankName,
      });

      console.log(response.data); // แสดงข้อมูลตอบกลับจาก backend

      // หากการส่งข้อมูลสำเร็จ, นำทางไปหน้า /slideMeForm
      navigate("/slideMeForm", { state: { phone_number: state.phone_number } });
    } catch (error) {
      console.error("Error saving account information:", error);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    <div className="account-form-container">
      <div className="form-group">
        <label>หมายเลขบัญชีธนาคาร</label>
        <input
          type="text"
          value={bankAccountNumber}
          onChange={(e) => setBankAccountNumber(e.target.value)}
          placeholder="กรอกหมายเลขบัญชีธนาคาร"
        />
      </div>
      <div className="form-group">
        <label>เลือกธนาคาร</label>
        <select
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
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
      <button onClick={handleSubmit}>ตรวจสอบข้อมูล</button>
    </div>
  );
};

export default AccountDriver;