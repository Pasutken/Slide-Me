import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');  // เปลี่ยนจาก phone เป็น email
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Function to parse the JWT token and extract the payload
  function parseJwt(token) {
    const base64Url = token.split('.')[1]; // Get the payload part of the token
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    );
    return JSON.parse(jsonPayload);  // Return the decoded payload
  }

  // Handle login request
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });

    // Check if email or password is empty
    if (!email || !password) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('รูปแบบอีเมลไม่ถูกต้อง');
      return;
    }

    // Send login request to API /login
    axios.post('http://localhost:5000/api/auth/login', {
      email: email,  
      password: password,
    })
    .then(response => {
      console.log('Login success:', response.data);  // Show the API response
      if (response.data && response.data.data) {
        const { token } = response.data.data;  // Assuming the response has token and user
        localStorage.setItem('token', JSON.stringify({ token }));

        // Decode the token to get user id and role
        const decoded = parseJwt(token);  // Decode the JWT token
        console.log(decoded.uid);  // Log user id from the token
        console.log(decoded.urole);  // Log user role from the token
        console.log(decoded.latitude);  // Log user latitude from the token
        console.log(decoded.longitude);  // Log user longitude from the token

        // Optionally: Save user id and role to localStorage
        localStorage.setItem('userId', decoded.uid);
        localStorage.setItem('userRole', decoded.urole);
        localStorage.setItem('userLat', decoded.latitude);
        localStorage.setItem('userLng', decoded.longitude);

        navigate('/receive-job');  // Redirect to home page after successful login
      } else {
        setError("ไม่พบข้อมูลผู้ใช้ในระบบ");
      }
    })
    .catch((error) => {
      console.error("Login failed:", error);
      if (error.response) {
         console.error("Response error:", error.response); // Log the error response
         if (error.response.status === 401) {
            setError("รหัสผ่านไม่ถูกต้อง");
         } else if (error.response.status === 404) {
            setError("ไม่พบบัญชีผู้ใช้ในระบบ");
         } else {
            setError("เกิดข้อผิดพลาดบางประการ");
         }
      } else {
         setError("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้");
      }
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://img2.pic.in.th/pic/slideme-logo.png" alt="Slide Me Logo" className="login-logo" />
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"  // Use email type for validation
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="custom-input"
            />
          </div>
          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}  // Toggle between password and text for visibility
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-input"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              <img
                src={showPassword ? "https://img5.pic.in.th/file/secure-sv1/showpass.png" : "https://img2.pic.in.th/pic/hidepass.png"}
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="password-icon"
              />
            </span>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="forgot-password-container">
            <Link to="/forgotpass" className="forgot-password-link">ลืมรหัสผ่าน</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-register">
          หากคุณยังไม่มีบัญชี <Link to="/register-driver" className="register-link">สมัครเลย</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;