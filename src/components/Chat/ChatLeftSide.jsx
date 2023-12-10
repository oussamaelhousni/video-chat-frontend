import React from "react";
import { useState } from "react";
// 3rd party

// components
import ConversationsList from "./Conversation/ConversationsList";

const Lists = new Map([
  ["conversation", <ConversationsList />],
  ["settings", null],
  ["stories", null],
  ["newConversation", null],
]);

const ChatLeftSide = () => {
  const [activeList, setActiveList] = useState("conversation");
  return (
    <div className="bg-[#1B202D] h-full w-[25rem] flex flex-col">
      {Lists.get(activeList)}
    </div>
  );
};

export default ChatLeftSide;
