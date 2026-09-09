// controllers/garage.controller.js
import * as garageService from "../services/garage.service.js";

const garageController = {
  getGarages: async (req, res) => {
    try {
      const garages = await garageService.getAllGarages();
      res.status(200).json({ status: true, data: garages });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  },

  getGarage: async (req, res) => {
    try {
      const garage = await garageService.getGarageById(req.params.id);
      if (!garage) {
        return res.status(404).json({ status: false, message: "Garage not found" });
      }
      res.status(200).json({ status: true, data: garage });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  },

  createGarage: async (req, res) => {
    try {
      const newGarage = await garageService.createGarage(req.body);
      res.status(201).json({ status: true, data: newGarage });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  },

  updateGarage: async (req, res) => {
    try {
      const updated = await garageService.updateGarage(req.params.id, req.body);
      res.status(200).json({ status: true, data: updated });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  },

  deleteGarage: async (req, res) => {
    try {
      await garageService.deleteGarage(req.params.id);
      res.status(200).json({ status: true, message: "Garage deleted" });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export default garageController;