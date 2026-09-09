// Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';

function Profile() {
  const [userProfile, setUserProfile] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))?.token;
    console.log("Token:", token); // Log the token to check if it's being retrieved correctly

    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }

    axios.get('http://localhost:5000/api/profile/get', {
      headers: {
        authorization: `Bearer ${token}`,  // Ensure that token is properly included in the header
      },
      })
      .then((response) => {
        if (response.data.status) {
          setUserProfile(response.data.data); // Set profile data
        } else {
          setError("Failed to fetch profile data");
        }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("An error occurred while fetching profile data");
      });
  }, [navigate]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    const token = JSON.parse(localStorage.getItem("token"))?.token;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/profile/update",
        userProfile,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        alert("Profile updated successfully");
        setEditMode(false); // Exit edit mode
      } else {
        setError("Failed to update profile");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("An error occurred while updating profile");
    }
  };

  const handleDelete = async () => {
    const token = JSON.parse(localStorage.getItem("token"))?.token;

    try {
      const response = await axios.delete("http://localhost:5000/api/profile/delete", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status) {
        alert("Profile deleted successfully");
        navigate("/login"); // Redirect to login or another page
      } else {
        setError("Failed to delete profile");
      }
    } catch (err) {
      console.error("Error deleting profile:", err);
      setError("An error occurred while deleting profile");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  if (!userProfile) {
    console.log(!userProfile); // Log the userProfile state
    return (
      <div className="profile-container">
        {error && <div className="error-message">{error}</div>}
        <div>Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Navbar />
        <div className="profile-container">
          <h2>Profile Information</h2>
          {editMode ? (
            <div className="profile-card">
              <label>
                <strong>First Name:</strong>
                <input
                  type="text"
                  name="name"
                  value={userProfile.name || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                <strong>Surname:</strong> {/* เปลี่ยนจาก Last Name เป็น Surname */}
                <input
                  type="text"
                  name="surname" // เปลี่ยน name เป็น surname
                  value={userProfile.surname || ""} // เปลี่ยนจาก lastName เป็น surname
                  onChange={handleChange}
                />
              </label>
              <label>
                <strong>Email:</strong>
                <input
                  type="email"
                  name="email"
                  value={userProfile.email || ""}
                  onChange={handleChange}
                />
              </label>
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <div className="profile-card">
              <p>
                <strong>First Name:</strong> {userProfile.name}
              </p>
              <p>
                <strong>Surname:</strong> {userProfile.surname} {/* เปลี่ยนจาก Last Name เป็น Surname */}
              </p>
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
              <p>
                <strong>Role:</strong> {userProfile.role}
              </p>
              <button className="edit-btn" onClick={handleEdit}>
                Edit Profile
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                Delete Profile
              </button>
            </div>
          )}
        </div>
      <BottomNavBar />
    </div>
  );
}

export default Profile;
