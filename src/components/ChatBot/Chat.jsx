import React, { useState, useRef, useEffect } from 'react';
import "./chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message) return;

    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8181/chatGpt/api/version4/chat/chatWithGpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.text();

      setMessages([
        ...newMessages,
        { sender: "bot", text: data }
      ]);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <>
      <div className="chat_bot" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat_box">
          <div className="chat_header">AI Assistant</div>

          <div className="chat_body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "user_msg" : "bot_msg"}
              >
                {msg.sender === "bot" && "🤖 "}
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bot_msg">
                <span className="typing"></span>
                <span className="typing"></span>
                <span className="typing"></span>
              </div>
            )}
  
            <div ref={chatEndRef}></div>
          </div>

          <div className="chat_footer">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;