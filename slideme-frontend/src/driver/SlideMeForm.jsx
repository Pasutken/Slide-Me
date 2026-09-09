import React from "react";
import { GrTextAlignCenter } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function SlideMeForm() {
  const navigate = useNavigate();
  const handletoOTPeieieiei = () => {
    navigate("/otp-driver");
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>กรอกข้อมูลรถสไลด์</h1>
      <p style={styles.subtitle}></p>
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <div style={styles.labelWithIcon}>
            <DotIcon />
            <label>ยี่ห้อ</label>
          </div>
          <input type="text" placeholder="Isuzu" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <div style={styles.labelWithIcon}>
            <DotIcon />
            <label>รุ่นรถ</label>
          </div>
          <input type="text" placeholder="NPR 150" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <div style={styles.labelWithIcon}>
            <DotIcon />
            <label>ทะเบียน</label>
          </div>
          <input
            type="text"
            placeholder="1กม 1234 กรุงเทพ"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <div style={styles.labelWithIcon}>
            <DotIcon />
            <label>VIN</label>
          </div>
          <input
            type="text"
            placeholder="1HGCM82633A123456"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <div style={styles.labelWithIcon}>
            <DotIcon />
            <label>ถ่ายรูปรถของคุณ</label>
          </div>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={styles.inputFile}
          />
        </div>

        <button style={styles.button} onClick={handletoOTPeieieiei}>
          ดำเนินการต่อ
        </button>
      </div>
    </div>
  );
}

function DotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="#2ea366"
      className="bi bi-dot"
      viewBox="0 0 16 16"
      style={styles.icon}
    >
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "500vh",
    backgroundColor: "#f8f9fa",
  },
  title: {
    color: "#2ea366",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "130px",
    GrTextAlignCenter,
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "85%",
    maxWidth: "350px",
    marginLeft: "-10px",
  },
  inputGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  labelWithIcon: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  input: {
    marginTop: "0.5rem",
    padding: "0.5rem 0",
    fontSize: "1rem",
    border: "none",
    borderBottom: "1px solid #000000",
    outline: "none",
  },
  inputFile: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    border: "none",
    outline: "none",
    padding: "0",
  },
  button: {
    backgroundColor: "#2ea366",
    color: "#fff",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "280px",
    marginTop: "10px",
  },
  icon: {
    color: "#000",
  },
};

export default SlideMeForm;
