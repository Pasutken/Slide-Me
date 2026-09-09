import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import profile from "../controllers/profile.controller.js";

const router = Router();

/**
 * @swagger
 * /api/profile/get:
 *   get:
 *     tags:
 *       - Profile
 *     summary: Get the authenticated user's profile
 *     description: Retrieves the profile of the currently authenticated user.
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get("/get", [authenticate], profile.getMyProfile);

/**
* @swagger
* /api/profile/update:
*   post:
*     tags:
*       - Profile
*     summary: Update the authenticated user's profile
*     description: Allows the authenticated user to update their profile details.
*     parameters:
*       - name: profileData
*         in: body
*         description: The new profile data to be updated
*         required: true
*         schema:
*           type: object
*           properties:
*             name:
*               type: string
*               description: The user's first name
*             surname:
*               type: string
*               description: The user's surname
*             email:
*               type: string
*               format: email
*               description: The user's email address
*     responses:
*       200:
*         description: Profile updated successfully
*       400:
*         description: Bad request
*       401:
*         description: Unauthorized access
 */
router.post("/update", [authenticate], profile.updateProfile);

/**
 * @swagger
 * /api/profile/check-driver/{id}:
 *   get:
 *     tags:
 *       - Profile
 *     summary: Get a driver's profile
 *     description: Retrieves the profile of a specific driver by their ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the driver whose profile is to be retrieved
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Driver profile retrieved successfully
 *       404:
 *         description: Driver not found
 *       401:
 *         description: Unauthorized access
 */
router.get("/check-driver/:id", [authenticate], profile.getDriverProfile);

/**
 * @swagger
 * /api/profile/delete:
 *   delete:
 *     tags:
 *       - Profile
 *     summary: Delete the authenticated user's profile
 *     description: Allows the authenticated user to delete their profile.
 *     responses:
 *       200:
 *         description: Profile deleted successfully
 *       401:
 *         description: Unauthorized access
 */
router.delete("/delete", [authenticate], profile.deleteProfile);

export { router };