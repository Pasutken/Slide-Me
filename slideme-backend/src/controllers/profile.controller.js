import { ProfileService } from "../services/profile.service.js";

export default {
  getMyProfile: async (req, res) => {
    const { uid, urole } = req.user;
    console.log("User ID:", uid);
    console.log("User Role:", urole);

    if (!uid || !urole) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid user data" });
    }
    try {
      const data = await ProfileService.getMyProfile({ uid, urole });
      res.status(200).json({
        status: true,
        message: "Success get user profile.",
        data,
      });
    } catch (err) {
      console.error("Error fetching profile data:", err);
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  updateProfile: async (req, res) => {
    const { uid, urole } = req.user;
    try {
      const data = await ProfileService.updateProfile({
        uid,
        urole,
        data: req.body,
      });
      res.status(200).json({
        status: true,
        message: `Updated profile.`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getDriverProfile: async (req, res) => {
    try {
      const data = await ProfileService.getDriverProfile({
        driverId: req.params.id,
      });
      res.status(200).json({
        status: true,
        message: `Get driver profile.`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  deleteProfile: async (req, res) => {
    try {
      console.log("Request User:", req.user); // Debug req.user
  
      const { uid, urole } = req.user; // ดึง uid และ urole จาก req.user
      const result = await ProfileService.deleteProfile({ uid, urole }); // เรียกใช้ Service
      console.log("Delete Result:", result); // Debug result
  
      if (!result) {
        return res.status(404).json({ status: false, message: "User not found" });
      }
  
      res.status(200).json({ status: true, message: "Profile deleted successfully" });
    } catch (error) {
      console.error("Error deleting profile:", error);
      res.status(500).json({ status: false, message: "Failed to delete profile" });
    }
  },
};
