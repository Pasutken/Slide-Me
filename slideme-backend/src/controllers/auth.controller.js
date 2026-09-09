import * as authService from "../services/auth.service.js";

export default {
  register: async (req, res) => {
    try {
      const data = await authService.registerUser(req.body);
      res.status(201).json({
        status: true,
        message: "Success register.",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null});
    }
  },
  login: async (req, res) => {
    console.log(req.body); // ตรวจสอบข้อมูลที่ได้รับ
    try {
      const data = await authService.loginUser(req.body);
      res.status(200).json({ status: true, message: "Success login.", data });
    } catch (err) {
      console.error("Login error:", err);  // พิมพ์ข้อผิดพลาดใน backend
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },  
  registerDriver: async (req, res) => {
    try {
      const data = await authService.registerDriver(req.body);
      res.status(201).json({
        status: true,
        message: "Success register.",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null});
    }
  },
};