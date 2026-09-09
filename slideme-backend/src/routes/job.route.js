import job from "../controllers/job.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/job/create-bid:
 *   post:
 *     tags:
 *       - Job
 *     summary: Driver makes a bid for a job
 *     description: Allows a driver to make a bid by offering a price for a specific slide truck request.
 *     parameters:
 *       - name: bidData
 *         in: body
 *         description: The bid details from the driver
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             slideRequestId:
 *               type: integer
 *             price:
 *               type: number
 *               format: float
 *     responses:
 *       200:
 *         description: Bid created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 */
router.post(
  "/create-bid",
  [authenticate, permissionRole(["driver"])],
  job.createBid
);

/**
 * @swagger
 * /api/job/accept-bid:
 *   post:
 *     tags:
 *       - Job
 *     summary: Customer accepts a bid
 *     description: Allows a customer to accept a bid for a specific slide truck request.
 *     parameters:
 *       - name: bidData
 *         in: body
 *         description: The bid acceptance details from the customer
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             bidId:
 *               type: integer
 *     responses:
 *       200:
 *         description: Bid accepted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 */
router.post(
  "/accept-bid",
  [authenticate, permissionRole(["customer"])],
  job.acceptBid
);

/**
 * @swagger
 * /api/job/update-status:
 *   post:
 *     tags:
 *       - Job
 *     summary: Update the status of a job
 *     description: Updates the status of a slide truck request job (e.g., complete, pending).
 *     parameters:
 *       - name: statusData
 *         in: body
 *         description: The status update details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             slideRequestId:
 *               type: integer
 *             status:
 *               type: string
 *               enum: [complete, pending]
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 */
router.post("/update-status", [authenticate], job.updateStatus);

/**
 * @swagger
 * /api/job/job-detail/{slideRequestId}:
 *   get:
 *     tags:
 *       - Job
 *     summary: Get the details of a specific job
 *     description: Retrieves the details of a specific slide truck request job using its ID.
 *     parameters:
 *       - name: slideRequestId
 *         in: path
 *         description: ID of the slide truck request job
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job details retrieved successfully
 *       404:
 *         description: Job not found
 *       401:
 *         description: Unauthorized access
 */
router.get("/job-detail/:slideRequestId", [authenticate], job.getJobDetails);

/**
 * @swagger
 * /api/job/job-history:
 *   get:
 *     tags:
 *       - Job
 *     summary: Get the job history of the user
 *     description: Retrieves all the jobs (past and present) for the authenticated user.
 *     responses:
 *       200:
 *         description: Job history retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get("/job-history", [authenticate], job.getJobDetails);

export { router };
