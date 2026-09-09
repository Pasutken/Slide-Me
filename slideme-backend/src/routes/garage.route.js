import { Router } from "express";
import garageController from "../controllers/garage.controller.js";

const router = Router();

/**
 * @swagger
 * /api/garages/getall:
 *   get:
 *     tags:
 *       - Garage
 *     summary: Get a list of all garages
 *     description: Retrieves a list of all the available garages.
 *     responses:
 *       200:
 *         description: List of all garages retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/getall', garageController.getGarages);

/**
 * @swagger
 * /api/garages/get/{id}:
 *   get:
 *     tags:
 *       - Garage
 *     summary: Get details of a specific garage
 *     description: Retrieves the details of a specific garage by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the garage to be retrieved
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Garage details retrieved successfully
 *       404:
 *         description: Garage not found
 *       500:
 *         description: Internal server error
 */
router.get('/get/:id', garageController.getGarage);

/**
 * @swagger
 * /api/garages/create:
 *   post:
 *     tags:
 *       - Garage
 *     summary: Create a new garage
 *     description: Creates a new garage with the provided details.
 *     parameters:
 *       - name: garageData
 *         in: body
 *         description: The data to create a new garage
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             address:
 *               type: string
 *             phone_number:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       201:
 *         description: Garage created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/create', garageController.createGarage);

/**
 * @swagger
 * /api/garages/update/{id}:
 *   put:
 *     tags:
 *       - Garage
 *     summary: Update a specific garage's details
 *     description: Updates the details of a specific garage by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the garage to be updated
 *         required: true
 *         schema:
 *           type: integer
 *       - name: garageData
 *         in: body
 *         description: The data to update the garage
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             address:
 *               type: string
 *             phone_number:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Garage updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Garage not found
 *       500:
 *         description: Internal server error
 */
router.put('/update/:id', garageController.updateGarage);

/**
 * @swagger
 * /api/garages/delete/{id}:
 *   delete:
 *     tags:
 *       - Garage
 *     summary: Delete a specific garage
 *     description: Deletes a specific garage by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the garage to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Garage deleted successfully
 *       404:
 *         description: Garage not found
 *       500:
 *         description: Internal server error
 */
router.delete('/delete/:id', garageController.deleteGarage);

export { router };