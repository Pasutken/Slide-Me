import React from "react";
import Navbar from "./Navbar";
import DriverBottomNavBar from "./DriverBottomNavBar";
import "./Jobdetail.css";

const JobDetail = () => {
  const jobData = {
    contactName: "นรวัฒน์ ดูดีมีชัย",
    contactNumber: "095xxxxxxx",
    distance: "18 km 26 นาที",
    from: {
      locationName: "เมเจอร์ รังสิต",
      address: "เมเจอร์ ซีนีเพล็กซ์ ฟิวเจอร์พาร์ค รังสิตซอย พหลโยธิน 94 ตำบล ประชาธิปัตย์ ปทุมธานี",
    },
    to: {
      locationName: "อู่ศรีปทุม",
      address: "มหาวิทยาลัยศรีปทุม ถนน พหลโยธิน แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร",
    },
    vehicleType: "รถสไลด์",
    fare: "1,500.00",
    paymentNote:
      "กรุณาเก็บค่าบริการกับลูกค้าโดยตรงในกรณีที่มีปัญหาการจ่ายเงิน ติดต่อฝ่ายประสานงานโดยตรง",
  };

  return (
    <div className="job-detail-container">
      <Navbar />
      <div className="job-detail-content">
        <div className="card">
          <p>
            <strong>ข้อมูลผู้ติดต่อ:</strong> {jobData.contactName}
          </p>
          <p>
            <strong>เบอร์มือถือ:</strong> {jobData.contactNumber}
          </p>
        </div>
        <div className="card">
          <h3>{jobData.distance}</h3>
          <div className="location">
            <div className="from">
              <div className="icon-with-text">
                <span className="location-icons">🟢</span>
                <p>
                  <span className="location-title">{jobData.from.locationName}</span>
                  <br />
                  {jobData.from.address}
                </p>
              </div>
            </div>
            <div className="connector">
              <div className="dotted-line"></div>
            </div>
            <div className="to">
              <div className="icon-with-text">
                <span className="location-icons">📍</span>
                <p>
                  <span className="location-title">{jobData.to.locationName}</span>
                  <br />
                  {jobData.to.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            <strong>ประเภทการให้บริการ:</strong> {jobData.vehicleType}
          </p>
        </div>
        <div className="card">
          <p className="fare">
            <strong>ค่ารับบริการ </strong>
            {jobData.fare} บาท
          </p>
          <p className="payment-note">{jobData.paymentNote}</p>
        </div>
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default JobDetail;