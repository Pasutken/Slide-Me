import { jwt } from "../utils/jwt.js"; // Ensure this is correctly imported
import dotenv from 'dotenv'; // If you're using dotenv for environment variables

dotenv.config(); // Ensure that your environment variables are loaded

export const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ status: false, message: "Unauthorized" ,data:null});
  }

  const token = authHeader.split(" ")[1];
  try {
    const { uid, urole } = jwt.verify(token);
    req.user = { uid, urole };
    next();
  } catch (err) {
    return res.status(401).json({status: false, message: "Invalid token",data:null });
  }
};