import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// เมื่อผู้ใช้เชื่อมต่อ
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  // เมื่อมีการส่งข้อความจาก Customer
  socket.on("messageFromCustomer", (msg) => {
    console.log("Message from Customer: ", msg);
    // ส่งข้อความไปยัง Driver
    socket.broadcast.emit("messageFromCustomer", msg);
  });

  // เมื่อมีการส่งข้อความจาก Driver
  socket.on("messageFromDriver", (msg) => {
    console.log("Message from Driver: ", msg);
    // ส่งข้อความไปยัง Customer
    socket.broadcast.emit("messageFromDriver", msg);
  });

  // เมื่อมีการตัดการเชื่อมต่อ
  socket.on("disconnect", () => {
    console.log("A user disconnected: " + socket.id);
  });
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});