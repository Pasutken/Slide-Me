import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { env } from "./config/env.js";
import * as routes from "./routes/index.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Define Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // or use 'swagger: "2.0"' for older Swagger version
    info: {
      title: "[Slide Me (Customer)] | Group 15 API Document",
      version: "1.0.0",
      description: `
        พวกเรากลุ่ม 15 Slideme Customer สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ 
        คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม เป็นผู้สร้าง Back End API พร้อมจัดทำเอกสารฉบับนี้
        ในโครงงาน [Slide Me (Customer)] Version 1.0.0 ตามมาตรฐาน OpenAPI 3.0 ประกอบด้วย 
  
        • Auth — จำนวน 3 APIs
        • Slide Truck Request — จำนวน 6 APIs
        • GPS — จำนวน 1 API
        • Job — จำนวน 5 APIs
        • Profile — จำนวน 4 APIs
        • Rating — จำนวน 2 APIs
        • Vehicle — จำนวน 1 API
        • Garage — จำนวน 5 APIs
        `,
    },
    servers: [
      {
        url: "http://localhost:5000", // Your API server URL
      },
    ],
    tags: [
      {
        name: "Auth", // Tag for Auth APIs
        description: "APIs related to user authentication and registration",
      },
      {
        name: "Slide Truck Request", // Tag for Slide Truck Request APIs
        description: "APIs related to requesting slide trucks",
      },
      {
        name: "GPS", // Tag for GPS APIs
        description: "APIs for GPS tracking and location services",
      },
      {
        name: "Job", // Tag for Job APIs
        description: "APIs related to managing job requests",
      },
      {
        name: "Profile", // Tag for Profile APIs
        description: "APIs for managing user profiles",
      },
      {
        name: "Rating", // Tag for Rating APIs
        description: "APIs related to user ratings and reviews",
      },
      {
        name: "Vehicle", // Tag for Vehicle APIs
        description: "APIs for vehicle management and tracking",
      },
      {
        name: "Garage", // Tag for Garage APIs
        description: "APIs for managing garage services and vehicles",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // path to the route files (where you define your JSDoc comments)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const app = express();

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  cors({
    origin: env.clientOrigin,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", routes.auth);
app.use("/api/slide-truck-rquest", routes.slideTruckRequest);
app.use("/api/gps", routes.gps);
app.use("/api/job", routes.job);
app.use("/api/profile", routes.profile);
app.use("/api/profile/test", (req, res) => res.json({ message: "test" }));
app.use("/api/ratting", routes.ratting);
app.use("/api/vehicle", routes.vehicle);
app.use("/api/garage", routes.garage);

app.get("/", (req, res) => {
  res.json({
    success: true,
    title: "API Slideme",
    version: "1.0.0",
    roundUpdate: "1",
    updatedAt: "18:07 08/04/2025",
  });
});
