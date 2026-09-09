import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import vehicleController from "../controllers/vehicle.controller.js";

const router = Router();

/**
 * @swagger
 * /api/vehicle/get-vehicle:
 *   get:
 *     tags:
 *       - Vehicle
 *     summary: Get the vehicle details of the driver
 *     description: Allows a driver to view the details of their own vehicle (one-to-one relationship).
 *     responses:
 *       200:
 *         description: Vehicle details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 vehicleId:
 *                   type: integer
 *                   description: ID of the vehicle
 *                 vehicleBrand:
 *                   type: string
 *                   description: Brand of the vehicle
 *                 vehicleModel:
 *                   type: string
 *                   description: Model of the vehicle
 *                 vehicleYear:
 *                   type: integer
 *                   description: Year of the vehicle
 *                 licensePlate:
 *                   type: string
 *                   description: License plate number
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Vehicle not found or driver does not own a vehicle
 */
router.get("/get-vehicle", [authenticate, permissionRole(['driver'])], vehicleController.info);

export { router };
