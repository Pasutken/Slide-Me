import { useNavigate } from "react-router-dom";
import React from "react";

function Information() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Informationapp");
  };

  return (
    <div className="infor-title-container">
      <div className="infor-title">
        <h6 className="info-accounts">Account Information</h6>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ cursor: "pointer" }}
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
    </div>
  );
}

export default Information;
