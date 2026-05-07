import React, { useState, useRef, useEffect } from "react";
import "./chatPage.css";

const ChatPage = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  // FILE UPLOAD
  const handleFileUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    const newMessage = {
      sender: "user",
      text: file.name,
      file: fileURL
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  // SEND MESSAGE
  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const res = await fetch(
        "http://localhost:8181/chatGpt/api/version4/chat/chatWithGpt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: message
          })
        }
      );

      const data = await res.text();

      const botMessage = {
        sender: "bot",
        text: data
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Server Error"
        }
      ]);

      console.log(error);
    }

    setLoading(false);
    setMessage("");
  };

  return (

    <div className="chat_page">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>AI Assistant</h2>

        <p>
          Upload reports or chat with AI
        </p>

      </div>

      {/* CHAT AREA */}

      <div className="chat_container">

        {/* HEADER */}

        <div className="chat_header">
          🤖 Smart AI Chatbot
        </div>

        {/* BODY */}

        <div className="chat_body">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`message ${msg.sender}`}
            >

              <div className="message_text">

                {msg.text}

                {msg.file && (
                  <div>
                    <a
                      href={msg.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Report
                    </a>
                  </div>
                )}

              </div>

            </div>

          ))}

          {loading && (
            <div className="typing">
              AI is typing...
            </div>
          )}

          <div ref={chatEndRef}></div>

        </div>

        {/* FOOTER */}

        <div className="chat_footer">

          <label className="upload_btn">
            📎
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          </label>

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatPage;