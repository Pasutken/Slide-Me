import React, { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลจาก localStorage
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser) {
      setUserInfo(storedUser);  // เก็บข้อมูลใน state
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไปที่ backend เพื่ออัปเดตข้อมูลผู้ใช้
    axios.post('http://localhost:5000/detailform', userInfo)
      .then(response => {
        console.log('User Info Updated:', response.data);
        // อัปเดตข้อมูลใน localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch(error => {
        console.error('Error updating info:', error);
      });
  };

  return (
    <div className="account-container">
      <h1 className="acc-information">Account Information</h1>

      {userInfo ? (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={userInfo.surname}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      ) : (
        <p>ข้อมูลผู้ใช้ไม่พบ</p>
      )}
    </div>
  );
};

export default Profile;