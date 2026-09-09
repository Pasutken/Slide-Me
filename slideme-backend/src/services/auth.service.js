import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma.js";
import { jwt } from "../utils/jwt.js";

export const registerUser = async ({
  email,
  password,
  name,
  surname,
  phoneNumber,
  role,
}) => {
  const existing =
    (await prisma.customer.findUnique({ where: { email } })) ||
    (await prisma.driver.findUnique({ where: { email } }));

  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma[role].create({
    data: { email, password: hashed, name, surname, phoneNumber, },
  });

  // ส่งข้อมูล latitude และ longitude ไปใน token
  const token = jwt.sign({ uid: user.id, urole: user.role, latitude: user.latitude, longitude: user.longitude });
  return { token, role, id: user.id };
};

export const loginUser = async ({ email, password }) => {
  // ค้นหาผู้ใช้ในฐานข้อมูล customer หรือ driver
  const user =
    (await prisma.customer.findUnique({ where: { email } })) ||
    (await prisma.driver.findUnique({ where: { email } }));

  if (!user) throw new Error("Invalid credentials");

  // เปรียบเทียบรหัสผ่าน
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  // ตรวจสอบว่า process.env.JWT_SECRET มีค่า
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set in .env");
  }

  // สร้าง token โดยเพิ่ม latitude และ longitude
  const token = jwt.sign(
    { 
      jwt: process.env.JWT_SECRET,
      uid: user.id, 
      urole: user.role, 
      latitude: user.latitude,  // ใช้ latitude
      longitude: user.longitude // ใช้ longitude
    },
    { expiresIn: '1h' }
  );

  return { token };  // ส่งกลับ token
};

export const registerDriver = async ({
  email,
  password,
  name,
  surname,
  phoneNumber,
  role,
  idNumber,
  bank_account_number,
  bank_name,
}) => {
  const existing =
    (await prisma.customer.findUnique({ where: { email } })) ||
    (await prisma.driver.findUnique({ where: { email } }));

  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma[role].create({
    data: { email, password: hashed, name, surname, phoneNumber, idNumber,
      bankAccountNumber: bank_account_number, // เพิ่มหมายเลขบัญชีธนาคาร
      bankName: bank_name, // เพิ่มชื่อธนาคาร
      slideCarService: {
        connect: {
          id: 1, // เชื่อมโยงกับ SlideCarService ที่มีอยู่
        },
      },
      vehicle: {
        connect: {
          id: 1, // เชื่อมโยงกับ Vehicle ที่มีอยู่
        },
      },
    },
  });

  // ส่งข้อมูล latitude และ longitude ไปใน token
  const token = jwt.sign({ id: user.id, urole: user.role, latitude: user.latitude, longitude: user.longitude });
  return { token, urole: user.role, id: user.id };
};