import React from "react";

// components
import MessagesList from "./Messages/MessagesList";
const ChatRightSide = ({ children }) => {
  return (
    <div className="flex-grow h-full lg:w-[80%] bg-green-500 border-l-[1px] border-gray-700 flex flex-col relative overflow-hidden bg-green-700">
      <MessagesList />
    </div>
  );
};

export default ChatRightSide;
