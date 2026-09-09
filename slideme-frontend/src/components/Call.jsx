import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Call.css";

function Call() {
  const navigate = useNavigate();
  const handleEndCall = () => {
    navigate(-1);
  }
  // สร้าง state การเปิด/ปิดของไมค์, กล้อง, ลำโพง
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [speakerOn, setSpeakerOn] = useState(true);

  // ฟังก์ชันเล่นเสียง
  const playClickSound = () => {
    const audio = new Audio("./public/click-sound.wav");
    audio.play();
  };

  // สลับสถานะไมค์
  const toggleMic = () => {
    playClickSound(); // เล่นเสียง
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
    <div className="calltummai-containner">
      <div className="calltummai-img">
        <img
          className="profile-call"
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="โปรไฟล์"
        />
        <div className="name">
          <p>สมชาย</p>
        </div>
        <div className="connection">
          <h5>กำลังเชื่อมต่อ...</h5>
        </div>

        <div className="call-button">
          <div>
            <button onClick={toggleMic}>
              <i className={`bi ${micOn ? "bi-mic" : "bi-mic-mute"}`}></i>
            </button>
            <p className="call-button-text">{micOn ? "เปิดไมค์" : "ปิดไมค์"}</p>
          </div>

          <div>
            <button onClick={toggleCamera}>
              <i
                className={`bi ${
                  cameraOn ? "bi-camera-video-off" : "bi bi-camera-video"
                }`}
              ></i>
            </button>
            <p className="call-button-text">
              {cameraOn ? "ปิดกล้อง" : "เปิดกล้อง"}
            </p>
          </div>

          <div>
            <button onClick={toggleSpeaker}>
              <i
                className={`bi ${
                  speakerOn ? "bi-volume-mute" : "bi-volume-up"
                }`}
              ></i>
            </button>
            <p className="call-button-text">
              {speakerOn ? "ปิดลำโพง" : "เปิดลำโพง"}
            </p>
          </div>
        </div>

        <div className="end-call-button" onClick={handleEndCall}>
          <button>
            <i className="bi bi-x-lg"></i>
          </button>
          <p className="call-button-text">วางสาย</p>
        </div>
      </div>
    </div>
  );
}

export default Call;
