import { prisma } from "../config/prisma.js";

export const ProfileService = {
  getMyProfile: async ({ uid, urole }) => {
    return urole === "customer"
      ? prisma.customer.findUnique({ where: { id: uid } })
      : prisma.driver.findUnique({ where: { id: uid } });
  },
  updateProfile: async ({ uid, urole, data }) => {
    return urole === "customer"
      ? prisma.customer.update({ where: { id: uid }, data })
      : prisma.driver.update({ where: { id: uid }, data });
  },
  getDriverProfile: async ({ driverId }) => {
    return prisma.driver.findUnique({
      where: { id: driverId },
      include: {
        vehicle: true,
        slideCarService: true,
      },
    });
  },
  deleteProfile: async ({ uid, urole }) => {
    try {
      const result =
        urole === "customer"
          ? await prisma.customer.delete({ where: { id: uid } }) // ลบข้อมูลจากตาราง customer
          : await prisma.driver.delete({ where: { id: uid } }); // ลบข้อมูลจากตาราง driver
      return result;
    } catch (error) {
      throw new Error("Error deleting profile: " + error.message);
    }
  },
};
