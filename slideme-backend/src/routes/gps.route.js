import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import gps from "../controllers/gps.controller.js";

const router = Router();

/**
 * @swagger
 * /api/gps/get-vehicle/{id}:
 *   get:
 *     tags:
 *       - GPS
 *     summary: Get the current location of the driver
 *     description: Retrieves the current location (latitude and longitude) of the driver for a specific slide truck request.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the slide truck request to fetch the driver location
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Current location of the driver
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 latitude:
 *                   type: number
 *                   format: float
 *                 longitude:
 *                   type: number
 *                   format: float
 *       404:
 *         description: Slide truck request not found
 *       401:
 *         description: Unauthorized access
 */
router.get("/get-vehicle/:id", [authenticate], gps.getCurrentLocationDriver);

export { router };