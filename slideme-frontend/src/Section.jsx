import React from "react";

function Section({ title, hasDropdown, options = [], isDescription }) {
  return (
    <div style={{ marginBottom: "5px", width: "100%" }}>
      <label
        style={{
          fontWeight: "bold",
          display: "block",
          marginBottom: "0",  
          marginTop: "0",     
        }}
      >
        {title}
      </label>

      {hasDropdown ? (
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          <select
            style={{
              width: "100%",
              maxWidth: "350px",
              padding: "5px", 
              marginTop: "3px",  
              border: "1px solid #2EA366",
              borderRadius: "4px",
              backgroundColor: "#fff",
              color: "#333",
              textAlign: "left",
              marginLeft: "10px",
              appearance: "none",
              paddingRight: "30px", 
              marginBottom: "2px",
            }}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              left: "323",
              top: "18px",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <path
              fillRule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
            />
          </svg>
        </div>
      ) : isDescription ? (
        <textarea
          style={{
            width: "100%",
            maxWidth: "350px",
            height: "100px",
            padding: "6px",   
            marginTop: "3px", 
            border: "1px solid #2EA366",
            borderRadius: "4px",
            resize: "vertical",
            marginLeft: "10px",
            marginBottom: "-50px",  
          }}
          rows="4"
          placeholder="Enter description here"
        ></textarea>
      ) : (
        <input
          type="text"
          style={{
            width: "100%",
            maxWidth: "350px",
            padding: "6px",   
            marginTop: "3px", 
            border: "1px solid #2EA366",
            borderRadius: "4px",
            marginLeft: "10px",
            marginBottom: "0px",  
          }}
          placeholder={`Enter ${title}`}
        />
      )}
    </div>
  );
}


export default Section;
