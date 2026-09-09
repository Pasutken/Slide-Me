import { prisma } from "../config/prisma.js";

export const createRequest = async ({
  customerId,
  note,
  image,
  latitude,
  longitude,
}) => {
  return await prisma.slideRequest.create({
    data: {
      customerId,
      vehicleId: null,
      driverId: null,
      price: null,
      note,
      image,
      latitude,
      longitude,
      requestTime: new Date(),
      status: "pending",
    },
  });
};

export const getUserRequests = async ({uid}) => {
  return await prisma.slideRequest.findMany({ where: { uid } });
};

export const getRequestById = async ({ id, customerId }) => {
  return await prisma.slideRequest.findUnique({ where: { id, customerId } });
};

export const cancelRequest = async ({ id }) => {
  const data = await prisma.slideRequest.update({
    where: { id },
    data: { status: "cancelled" },
  });

  if (!data) throw new Error(`Can't find slide request id : ${id}`);

  return data;
};

export const updateRequestStatus = async ({ id, status, driverId }) => {
  const parsedId = parseInt(id); // Convert the request ID to an integer
  const parsedDriverId = parseInt(driverId); // Convert driverId to an integer

  // Check if the parsedId and parsedDriverId are valid integers
  if (isNaN(parsedId)) {
    throw new Error(`Invalid ID provided: ${id}`);
  }
  if (isNaN(parsedDriverId)) {
    throw new Error(`Invalid driverId provided: ${driverId}`);
  }

  const data = await prisma.slideRequest.update({
    where: { id: parsedId },
    data: { 
      status,
      driverId: parsedDriverId,  // Pass the parsed driverId as an integer
    },
  });

  if (!data) throw new Error(`Can't update slide request id : ${id}`);

  return data;
};

export const getJobList = async () => {
  return await prisma.slideRequest.findMany({
    where: { status: "pending" },  // ดึงเฉพาะงานที่มีสถานะ pending
    select: {
      id: true,
      note: true,
      latitude: true,
      longitude: true,
      requestTime: true,
    },
  });
};

