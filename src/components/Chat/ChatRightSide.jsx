import React from "react";
import { useState } from "react";
// components
import MessagesList from "./Messages/MessagesList";
import SenderInfo from "./SenderInfo/SenderInfo";

const ChatRightSide = ({ children }) => {
  const [activeUI, setActiveUi] = useState("senderInfo");
  return (
    <div className="flex-grow h-full lg:w-[80%] bg-green-500 border-l-[1px] border-gray-700 flex flex-col relative overflow-hidden">
      {activeUI === "messageList" && <MessagesList />}
      {activeUI === "senderInfo" && <SenderInfo />}
    </div>
  );
};

export default ChatRightSide;
