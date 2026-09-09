import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Navbar from "./Navbar";
import BottomNavBar from "./BottomNavBar";
import "./ChatCustomer.css";

const socket = io("http://localhost:3000");

const ChatCustomer = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("message");
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      const message = { sender: "customer", text: input };
      socket.emit("message", message); // Send message to server
      setInput(""); // Clear input after sending
    }
  };

  return (
    <div className="chat-container">
      <Navbar />
      <div className="chat-header">
        <h3>Chat with Driver</h3>
      </div>
      <div className="chat-messages1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message1 ${
              msg.sender === "customer" ? "customer" : "driver"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default ChatCustomer;
