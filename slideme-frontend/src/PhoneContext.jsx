// PhoneContext.jsx
import React, { createContext, useContext, useState } from 'react';

// สร้าง Context สำหรับเบอร์โทรศัพท์
const PhoneContext = createContext();

// Custom hook สำหรับใช้ Context
export function usePhone() {
  return useContext(PhoneContext);
}

// PhoneProvider สำหรับให้ข้อมูลเบอร์โทรศัพท์กับคอมโพเนนต์ที่ใช้
export function PhoneProvider({ children }) {
  const [phoneNumber, setPhoneNumber] = useState(''); // เก็บข้อมูลเบอร์โทร

  return (
    <PhoneContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
}