import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <button onClick={handleMenuClick} className="menu-icon">
          <img
            src="https://img2.pic.in.th/pic/menu23afabfaab45e5af.png"
            alt="Menu Icon"
            className="navbar-icon"
          />
        </button>
      </div>
      <div className="navbar-logo">
      <img
            src="https://img2.pic.in.th/pic/slideme-logo.png"
            alt="logo"
            className="navbar-logo"
            style={{ width: "45px", height: "45px" }}
          />
      </div>
      <div className="navbar-right">
        <button onClick={handleNotificationClick} className="notification-icon">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/bell15b895250f52cd70.png"
            alt="Notification Icon"
            className="navbar-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;