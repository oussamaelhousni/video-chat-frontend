import React from "react";
import { useState } from "react";
// 3rd party
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
// components
import MessagesHeader from "./MessagesHeader";
import MessagesFooter from "./MessagesFooter";
import Message from "./Message";

// fake data
const data = [
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "me" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "him" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "him" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "me" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "him" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "me" },
  { _id: "1", text: "test message", createdAt: Date.now(), sender: "me" },
].map((message) => ({ ...message, _id: uuidv4() }));

const MessagesList = () => {
  const { messages } = useSelector((state) => state.currentConversation);
  return (
    <div className="absolute left-0 top-0 w-full h-full min-h-full">
      <MessagesHeader />
      <div className="flex flex-grow flex-col p-8 bg-[#151924] gap-2 w-full h-full">
        {messages?.map((message, index) => {
          return (
            <Message
              message={message}
              messageBefore={messages[index - 1]?.sender === message.sender}
              key={message._id}
            />
          );
        })}
      </div>
      <MessagesFooter />
    </div>
  );
};

export default MessagesList;
