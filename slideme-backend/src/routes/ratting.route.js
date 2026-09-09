import ratting from "../controllers/ratting.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/ratting/rate-driver:
 *   post:
 *     tags:
 *       - Rating
 *     summary: Submit a rating for a driver
 *     description: Allows a customer to submit a rating for a driver, including a comment.
 *     parameters:
 *       - name: ratingData
 *         in: body
 *         description: The rating details submitted by the customer
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             driverId:
 *               type: integer
 *             customerId:
 *               type: integer
 *             rating:
 *               type: number
 *               format: float
 *               description: The rating score, e.g., 1-5
 *             comment:
 *               type: string
 *               description: A comment about the driver
 *     responses:
 *       200:
 *         description: Rating submitted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 */
router.post("/rate-driver", [authenticate], ratting.rateDriver);

/**
 * @swagger
 * /api/ratting/driver-avg/{id}:
 *   get:
 *     tags:
 *       - Rating
 *     summary: Get the average rating of a driver
 *     description: Retrieves the average rating of a specific driver by their ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the driver whose average rating is to be fetched
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Average rating of the driver
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 averageRating:
 *                   type: number
 *                   format: float
 *                   description: The average rating score of the driver
 *       404:
 *         description: Driver not found
 *       401:
 *         description: Unauthorized access
 */
router.get("/driver-avg/:id", [authenticate], ratting.getDriverAverageRating);

export { router };
