// services/garage.service.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllGarages = async () => {
  return await prisma.garage.findMany();
};

export const getGarageById = async (id) => {
  return await prisma.garage.findUnique({
    where: { id: parseInt(id) },
  });
};

export const createGarage = async (data) => {
  return await prisma.garage.create({ data });
};

export const updateGarage = async (id, data) => {
  return await prisma.garage.update({
    where: { id: parseInt(id) },
    data,
  });
};

export const deleteGarage = async (id) => {
  return await prisma.garage.delete({
    where: { id: parseInt(id) },
  });
};