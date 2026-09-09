import { Router } from "express";
import slideTruckRequest from "../controllers/slideTruckRequest.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/slideTruckRequest/create:
 *   post:
 *     tags:
 *       - Slide Truck Request
 *     summary: Create a slide truck request
 *     description: Allows a customer to create a request to call a slide truck.
 *     parameters:
 *       - name: requestData
 *         in: body
 *         description: The data for creating a new slide truck request
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             vehicleId:
 *               type: integer
 *             driverId:
 *               type: integer
 *             requestTime:
 *               type: string
 *               format: date-time
 *             price:
 *               type: number
 *               format: float
 *             note:
 *               type: string
 *             image:
 *               type: string
 *             latitude:
 *               type: number
 *               format: float
 *             longitude:
 *               type: number
 *               format: float
 *     responses:
 *       200:
 *         description: Slide truck request created successfully
 *       400:
 *         description: Bad request
 */
router.post("/create", [authenticate], slideTruckRequest.create);

/**
 * @swagger
 * /api/slideTruckRequest/get_all:
 *   get:
 *     tags:
 *       - Slide Truck Request
 *     summary: Get all slide truck requests for a customer
 *     description: Retrieves all the slide truck requests made by the authenticated customer.
 *     responses:
 *       200:
 *         description: List of all slide truck requests
 *       401:
 *         description: Unauthorized
 */
router.get("/get_all", [authenticate], slideTruckRequest.getAll);

/**
 * @swagger
 * /api/slideTruckRequest/get_one/{id}:
 *   get:
 *     tags:
 *       - Slide Truck Request
 *     summary: Get details of a specific slide truck request
 *     description: Retrieves the details of a specific slide truck request using its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the slide truck request
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the slide truck request
 *       404:
 *         description: Request not found
 */
router.get("/get_one/:id", [authenticate], slideTruckRequest.getOne);

/**
 * @swagger
 * /api/slideTruckRequest/cancel/{id}:
 *   post:
 *     tags:
 *       - Slide Truck Request
 *     summary: Cancel a slide truck request
 *     description: Cancels a specific slide truck request by updating its status to "cancelled".
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the slide truck request to be cancelled
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Request cancelled successfully
 *       404:
 *         description: Request not found
 */
router.post("/cancel/:id", [authenticate], slideTruckRequest.cancel);

/**
 * @swagger
 * /api/slideTruckRequest/update_status/{id}:
 *   post:
 *     tags:
 *       - Slide Truck Request
 *     summary: Update the status of a slide truck request
 *     description: Updates the status of a slide truck request.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the slide truck request to be updated
 *         required: true
 *         schema:
 *           type: integer
 *       - name: status
 *         in: body
 *         description: New status for the slide truck request
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               enum: [pending, in_progress, completed, cancelled]
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Bad request
 */
router.post("/update_status/:id", [authenticate], slideTruckRequest.updateStatus);

/**
 * @swagger
 * /api/slideTruckRequest/job_list:
 *   get:
 *     tags:
 *       - Slide Truck Request
 *     summary: Get a list of jobs for the slide truck request system
 *     description: Retrieves a list of available jobs for the slide truck service.
 *     responses:
 *       200:
 *         description: List of jobs available
 */
router.get("/job_list", [authenticate], slideTruckRequest.getJobList);

export { router };