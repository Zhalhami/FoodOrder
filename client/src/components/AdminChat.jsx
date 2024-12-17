import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// Connect to the server
const socket = io("http://localhost:5000");

function AdminChat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const roomId = "user_123"; // Use a constant room ID for simplicity

  useEffect(() => {
    // Join the chat room
    socket.emit("joinRoom", roomId);

    // Listen for incoming chat messages
    socket.on("chatMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off("chatMessage");
    };
  }, [roomId]);

  // Send a chat message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) { // Ensure message is not just whitespace
      socket.emit("chatMessage", { roomId, message, sender: "admin" });
      setMessage(""); // Clear input after sending
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
