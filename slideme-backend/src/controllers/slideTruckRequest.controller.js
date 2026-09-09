import * as requestService from "../services/slideTruckRequest.service.js";

export default {
  create: async (req, res) => {
    const { uid } = req.user;
    try {
      const data = await requestService.createRequest({
        ...req.body,
        customerId: uid,
      });
      res.status(201).json({
        status: true,
        message: "Created slide truck request",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getAll: async (req, res) => {
    const { uid } = req.user;
    try {
      const data = await requestService.getUserRequests({ uid });
      res.status(200).json({
        status: true,
        message: "Success get all user request.",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const { uid } = req.user;
    try {
      const data = await requestService.getRequestById({
        id,
        customerId: uid,
      });
      res.status(200).json({
        status: true,
        message: `Success get user request id : ${id}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  cancel: async (req, res) => {
    const { id } = req.params;
    try {
      await requestService.cancelRequest({ id });
      res.status(200).json({
        status: true,
        message: `Cancelled slide request id ${id}`,
        data: null,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status, driverId } = req.body; // Ensure that driverId is being passed correctly
    try {
      const data = await requestService.updateRequestStatus({ id, status, driverId });
      res.status(200).json({
        status: true,
        message: `Updated status(${status}) slide request id ${id} with driver id ${driverId}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getJobList: async (req, res) => {
    try {
      const data = await requestService.getJobList();
      res.status(200).json({
        status: true,
        message: "Successfully retrieved job list",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  }, 
};
