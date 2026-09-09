import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DriverBottomNavBar from "./DriverBottomNavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ReceiveJob.css";

const ReceiveJob = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const handleselectjob = async (jobId) => {
    try {
      // Get the token and driverId from localStorage
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const driverId = localStorage.getItem("userId");  // Retrieve driverId from localStorage

      if (!token || !driverId) {
        console.error("No token or driverId found in localStorage");
        return;
      }

      // Send status update with driverId
      await axios.post(
        `http://localhost:5000/api/slide-truck-rquest/update_status/${jobId}`,
        { status: "in_progress", driverId },  // Send driverId with the status update
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      // Once status is updated, navigate to the bidding page and pass slideRequestId as state
      navigate('/biding-driver', { state: { slideRequestId: jobId } }); // Passing slideRequestId as state
    } catch (error) {
      console.error("Error updating job status", error);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"))?.token;

        if (!token) {
          console.error("No token found in localStorage");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/slide-truck-rquest/job_list",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        setJobs(response.data.data);
      } catch (error) {
        console.error("Error fetching job list", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="receive-job-container">
      <Navbar />
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job-card" key={index} onClick={() => handleselectjob(job.id)}>
            <div className="job-header">
              <span className="job-distance">{job.requestTime}</span>
            </div>
            <div className="job-body">
              <div className="job-location">
                <span className="job-icon">🟢</span>
                <span className="job-text">{job.note}</span>
              </div>
              <div className="job-location">
                <span className="job-icon">📍</span>
                <span className="job-text">{job.latitude}, {job.longitude}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default ReceiveJob;