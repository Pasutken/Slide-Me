import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calldriver.css";

function Calldriver() {
  // สร้าง state การเปิด/ปิดของไมค์, กล้อง, ลำโพง
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [speakerOn, setSpeakerOn] = useState(true);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }

  // ฟังก์ชันเล่นเสียง
  const playClickSound = () => {
    const audio = new Audio("./public/click-sound.wav");
    audio.play();
  };

  // สลับสถานะไมค์
  const toggleMic = () => {
    playClickSound();
    setMicOn(!micOn);
  };

  // สลับสถานะกล้อง
  const toggleCamera = () => {
    playClickSound();
    setCameraOn(!cameraOn);
  };

  // สลับสถานะลำโพง
  const toggleSpeaker = () => {
    playClickSound();
    setSpeakerOn(!speakerOn);
  };

  return (
    <div className="calllaaass-screen-container">
      <div className="calllaaass-screen-wrapper">
        <div className="calllaaass-screen-profile">
          <img
            className="calllaaass-screen-profile-pic"
            src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
            alt="โปรไฟล์"
          />
          <div className="calllaaass-screen-name">
            <p>น้องแดน</p>
          </div>
          <div className="calllaaass-screen-connection-status">
            <h5>กำลังเชื่อมต่อ...</h5>
          </div>
        </div>

        <div className="calllaaass-screen-buttons">
          <div>
            <button onClick={toggleMic}>
              <i className={`bi ${micOn ? "bi-mic" : "bi-mic-mute"}`}></i>
            </button>
            <p className="calllaaass-screen-button-label">
              {micOn ? "เปิดไมค์" : "ปิดไมค์"}
            </p>
          </div>

          <div>
            <button onClick={toggleCamera}>
              <i
                className={`bi ${
                  cameraOn ? "bi-camera-video-off" : "bi bi-camera-video"
                }`}
              ></i>
            </button>
            <p className="calllaaass-screen-button-label">
              {cameraOn ? "ปิดกล้อง" : "เปิดกล้อง"}
            </p>
          </div>

          <div>
            <button onClick={toggleSpeaker}>
              <i
                className={`bi ${speakerOn ? "bi-volume-mute" : "bi-volume-up"}`}
              ></i>
            </button>
            <p className="calllaaass-screen-button-label">
              {speakerOn ? "ปิดลำโพง" : "เปิดลำโพง"}
            </p>
          </div>
        </div>

        <div className="calllaaass-screen-end-button">
          <button onClick={handleBackClick}>
            <i className="bi bi-x-lg"></i>
          </button>
          <p className="calllaaass-screen-button-label">วางสาย</p>
        </div>
      </div>
    </div>
  );
}

export default Calldriver;
