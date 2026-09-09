import { Router } from "express";
import auth from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registers a new user
 *     description: Allows a user to register by providing their details.
 *     parameters:
 *       - name: user
 *         in: body
 *         description: User registration details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             name:
 *               type: string
 *             surname:
 *               type: string
 *             phoneNumber:
 *               type: string
 *             role:
 *               type: string
 *               enum: [customer, driver]
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post("/register", auth.register);

/**
 * @swagger
 * /api/auth/register-driver:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registers a new driver
 *     description: Allows a driver to register by providing their details.
 *     parameters:
 *       - name: driver
 *         in: body
 *         description: Driver registration details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             name:
 *               type: string
 *             surname:
 *               type: string
 *             phoneNumber:
 *               type: string
 *             idNumber:
 *               type: string
 *             role:
 *               type: string
 *               enum: [customer, driver]
 *             slideCarServiceId:
 *               type: integer
 *             vehicleId:
 *               type: integer
 *             bank_account_number:
 *               type: string
 *             bank_name:
 *               type: string
 *     responses:
 *       200:
 *         description: Driver registered successfully
 *       400:
 *         description: Bad request
 */
router.post("/register-driver", auth.registerDriver);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a user
 *     description: Allows a user to login by providing their email and password.
 *     parameters:
 *       - name: credentials
 *         in: body
 *         description: User login credentials
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized - Invalid credentials
 */
router.post("/login", auth.login);

export { router };