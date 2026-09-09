import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma.js";

// ฟังก์ชันการเปรียบเทียบรหัสผ่าน
function comparePassword(raw, hashed) {
  return bcrypt.compare(raw, hashed);
}

// ฟังก์ชันการเข้าสู่ระบบ
export async function login(email, password) {
  const customer = await prisma.customer.findUnique({ where: { email } });
  if (customer && comparePassword(password, customer.password)) {
    return { role: "customer", user: customer };
  }

  const driver = await prisma.driver.findUnique({ where: { email } });
  if (driver && comparePassword(password, driver.password)) {
    return { role: "driver", user: driver };
  }

  return false; // ถ้าไม่พบผู้ใช้ หรือรหัสผ่านไม่ตรง
}