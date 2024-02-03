import React from "react";
import { useState, useRef, useEffect } from "react";
// 3rd party
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
// components
import MessagesHeader from "./MessagesHeader";
import MessagesFooter from "./MessagesFooter";
import Message from "./Message";

import { pushNewMessage } from "../../../app/slices/currentConversationSlice";
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
  const dispatch = useDispatch();
  const { messages, conversationId } = useSelector(
    (state) => state.currentConversation
  );

  const { _id: userId } = useSelector((state) => state.auth.user);
  const { socket } = useSelector((state) => state.socket);
  const divRef = useRef(null);

  const scrollToBottom = () => {
    if (divRef.current) {
      console.log("to bottom");
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    socket?.on("message", (message) => {
      dispatch(pushNewMessage(message));
      scrollToBottom();
    });
  }, [socket]);

  //bg-[#151924]
  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-y-hidden">
      <MessagesHeader />
      <div
        className="flex flex-grow flex-col gap-6 p-8 bg-[#151924]  w-full  h-[calc(100%-10rem)] overflow-y-auto"
        ref={divRef}
      >
        {messages?.map((message, index) => {
          return (
            <Message
              message={message}
              messageBefore={messages[index - 1]?.sender === message.sender}
              key={message._id}
              userId={userId}
            />
          );
        })}
      </div>
      <MessagesFooter scrollToBottom={scrollToBottom} />
    </div>
  );
};

export default MessagesList;
