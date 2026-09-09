import React from "react";
import { useNavigate } from "react-router-dom";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bottom-navbar">
      <button
        className="Homeiconneiei"
        onClick={() => handleNavigate("/home")}
      >
        <img
          src="https://img5.pic.in.th/file/secure-sv1/home-icon-silhouette.png"
          alt="Home Icon"
          className="navbar-icon"
        />
      </button>
      <button
        className="Historyiconneiei"
        onClick={() => handleNavigate("/history")}
      >
        <img
          src="https://img2.pic.in.th/pic/history15811cb8693c0087.png"
          alt="History Icon"
          className="navbar-icon"
        />
      </button>
      <button
        className="Profileiconneiei"
        onClick={() => handleNavigate("/profile")}
      >
        <img
          src="https://img5.pic.in.th/file/secure-sv1/user0d6854e84a6b9e29.png"
          alt="Profile Icon"
          className="navbar-icon"
        />
      </button>
    </div>
  );
};

export default BottomNavBar;