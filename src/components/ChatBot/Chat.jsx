import React from "react";
import { FaRobot } from "react-icons/fa";
import "./chatIcon.css";

const Chat = () => {

  const openChatPage = () => {

    window.open(
      "/chat",
      "_blank"
    );

  };

  return (
    <div className="chat_bot" onClick={openChatPage}>
      <FaRobot />
    </div>
  );
};

export default Chat;