import React from "react";
import { useState } from "react";
// 3rd party

// components
import ConversationsList from "./Conversation/ConversationsList";
import Profile from "./Profile/Profile";
const Lists = new Map([
  ["conversation", <ConversationsList />],
  ["settings", <Profile />],
  ["stories", null],
  ["newConversation", null],
]);

const ChatLeftSide = () => {
  const [activeList, setActiveList] = useState("settings");
  return (
    <div className="bg-[#1B202D] h-full w-[25rem] flex flex-col overflow-auto">
      {Lists.get(activeList)}
    </div>
  );
};

export default ChatLeftSide;
