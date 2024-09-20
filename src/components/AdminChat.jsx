import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function AdminChat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const roomId = "user_123"; // Same room ID as the user

  useEffect(() => {
    // Join the same room as the user
    socket.emit("joinRoom", roomId);

    // Listen for messages from the user
    socket.on("chatMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("chatMessage", { roomId, message, sender: "admin" });
      setMessage(""); // Clear input
    }
  };

  return (
    <div>
      <h3>Chat with User in Room: {roomId}</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AdminChat;
