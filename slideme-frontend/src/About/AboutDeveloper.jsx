import React from 'react';
import './AboutDeveloper.css';
import Navbar from '../components/Navbar';

const AboutDeveloper = () => {
  const developers = [
    {
      name: 'จารุกิตติ์ โลบไธสง',
      studentId: '66053541',
      image: 'https://img2.pic.in.th/pic/IMG_55440c42dabb29b9e83a.jpg',
    },
    {
      name: 'พศุตม์ ฟักแจ้ง',
      studentId: '66085074',
      image: 'https://img5.pic.in.th/file/secure-sv1/IMG_1561.jpg',
    },
    {
      name: 'ปรมัตถ์ เอื่ยมองค์',
      studentId: '66063709',
      image: 'https://img2.pic.in.th/pic/IMG_6304.jpg',
    },
    {
      name: 'ฆนาการ ศรีเพ็ญ',
      studentId: '66073498',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="about-developer-container">
      <Navbar />
      <h2>Developers</h2>
      <div className="developers">
        {developers.map((developer, index) => (
          <div className="developer-card" key={index}>
            <img src={developer.image} alt={`Developer ${index + 1}`} className="developer-image" />
            <h3>{developer.name}</h3>
            <p>รหัสนักศึกษา: {developer.studentId}</p>
          </div>
        ))}
      </div>
      <div className="footer">
        <p>&copy; Slide Me (Group 15) 2024</p>
      </div>
    </div>
  );
};

export default AboutDeveloper;