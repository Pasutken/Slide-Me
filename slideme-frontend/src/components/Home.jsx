// src/components/Home.jsx
import React from "react";
import Navbar from "./Navbar";
import BottomNavBar from "./BottomNavBar";
import MapHome from "./MapHome";
import "./Home.css";

const Home = () => {

  return (
    <div className="home-container">
      <Navbar />
      <MapHome /> {/* MapHome จะเรียก log ของตัวเอง */}
      <BottomNavBar />
    </div>
  );
};

export default Home;
