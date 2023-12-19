import React from "react";
import { useSelector } from "react-redux";

// components
import RightPageDefault from "./RightPageDefault";
import MessagesList from "./Messages/MessagesList";
import SenderInfo from "./SenderInfo/SenderInfo";

const ChatRightSide = ({ children }) => {
  const { currentPage } = useSelector((state) => state.rightPage);
  return (
    <div className="flex-grow h-full lg:w-[80%] bg-green-500 border-l-[1px] border-gray-700 flex flex-col relative overflow-hidden">
      <RightPageDefault />
      {currentPage === "messageList" && <MessagesList />}
      {currentPage === "senderInfo" && <SenderInfo />}
    </div>
  );
};

export default ChatRightSide;
