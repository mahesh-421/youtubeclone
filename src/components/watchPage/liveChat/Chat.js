import React from "react";

import profilePic from "../../../assets/profile.png";

const Chat = ({ chat }) => {
  const { name, message } = chat;
  return (
    <div className="flex mt-2.5 pl-1">
      <img className="h-9 " src={profilePic} alt="Profile" />
      <div className="pl-2">
        <p className="font-bold">{name}</p>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Chat;
