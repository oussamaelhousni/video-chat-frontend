import React from "react";
// 3rd party

// components
import ChatContainer from "../components/Chat/ChatContainer";
import ChatLeftSide from "../components/Chat/ChatLeftSide";
import ChatRightSide from "../components/Chat/ChatRightSide";

const ChatUi = () => {
  return (
    <ChatContainer>
      <ChatLeftSide />
      <ChatRightSide />
    </ChatContainer>
  );
};

export default ChatUi;
