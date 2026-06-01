import React, { useState, useEffect, useRef } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaPaperclip,
  FaUser
} from "react-icons/fa";

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
      image: fileURL
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
            message
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

        <div className="sidebar_top">

          <h2>Smart Medi AI</h2>

          <p>
            Your intelligent healthcare assistant.
            Upload reports, ask health-related
            questions, and chat instantly with AI.
          </p>

        </div>

        <div className="sidebar_bottom">

          <h4>Features</h4>

          <p>✔ AI Healthcare Chat</p>
          <p>✔ Upload Medical Reports</p>
          <p>✔ Fast Responses</p>
          <p>✔ User Friendly Experience</p>

        </div>

      </div>

      {/* CHAT CONTAINER */}

      <div className="chat_container">

        {/* HEADER */}

        <div className="chat_header">

          <div className="chat_header_left">

            <div className="bot_logo">
              <FaRobot />
            </div>

            <div>
              <h2>Smart Medi Assistant</h2>
              <p>Online Now</p>
            </div>

          </div>

        </div>

        {/* BODY */}

        <div className="chat_body">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`message ${msg.sender}`}
            >

              <div className="message_content">

                <div className="avatar">

                  {msg.sender === "user"
                    ? <FaUser />
                    : <FaRobot />
                  }

                </div>

                <div className="message_text">

                  {msg.text}

                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="upload"
                      className="chat_image"
                    />
                  )}

                </div>

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

          <div className="footer_container">

            <label className="icon_btn upload_btn">

              <FaPaperclip />

              <input
                type="file"
                hidden
                onChange={handleFileUpload}
              />

            </label>

            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button
              className="icon_btn send_btn"
              onClick={sendMessage}
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChatPage;