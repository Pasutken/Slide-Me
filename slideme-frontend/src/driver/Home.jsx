import React from "react";
import Navbar from "./Navbar";
import MapView from "./MapView";
import DriverBottomNavBar from "./DriverBottomNavBar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <MapView />
      <div className="action-buttons">
      
        <button
          className="action-btn call"
          onClick={() => navigate("/call-driver")}
        >
          <img
            src="https://img5.pic.in.th/file/secure-sv1/call2a608874f06be4da.png"
            alt="Call"
          />
          <span>โทร</span>
        </button>
        <button
          className="action-btn chat"
          onClick={() => navigate("/chat-driver")}
        >
          <img
            src="https://img2.pic.in.th/pic/chat96a103a3a0de24a4.png"
            alt="Chat"
          />
          <span>แชท</span>
        </button>
        <button
          className="action-btn details"
          onClick={() => navigate("/jobdetail")}
        >
          <img
            src="https://img5.pic.in.th/file/secure-sv1/resume85e2b79064e1cada.png"
            alt="Details"
          />
          <span>รายละเอียดงาน</span>
        </button>
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default Home;
