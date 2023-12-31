import React from "react";
import { useState, memo } from "react";
import { useSelector } from "react-redux";
// 3rd party

// components
import ConversationsList from "./Conversation/ConversationsList";
import StoriesList from "./Story/StoriesList";
import Profile from "./Profile/Profile";
import ArchiveList from "./Archive/ArchiveList";

const Lists = new Map([
  ["settings", <Profile />],
  ["stories", <StoriesList />],
  ["newConversation", null],
  ["archive", <ArchiveList />],
  ["null", null],
]);

const ChatLeftSide = () => {
  const { currentPage } = useSelector((state) => state.leftPage);
  return (
    <div className="bg-[#1B202D] h-full w-[25rem] flex flex-col overflow-auto relative">
      <ConversationsList />
      {Lists.get(currentPage)}
    </div>
  );
};

export default memo(ChatLeftSide);
