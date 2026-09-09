import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/payment-details"); 
  };

  return (
    <div className="pay-title-container">
      <div className="pay-title">
        <h6>Payment</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={handleClick} 
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

export default Payment;
