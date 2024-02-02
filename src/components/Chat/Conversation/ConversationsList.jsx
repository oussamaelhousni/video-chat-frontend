import React from "react";
import { useState, useEffect } from "react";
// 3rd party
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
// components
import ConversationHeader from "./ConversationHeader";
import ConversationSearch from "./ConversationSearch";
import ConversationArchive from "./ConversationArchive";
import Conversation from "./Conversation";
// actions
import { getConversations } from "../../../app/slices/conversationsSlice";
// fake data
const data = [
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "voiceCall",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "voiceCall",
    isAnswered: false,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  } /* ,
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "videoCall",
    isAnswered: false,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "videoCall",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "him",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: false,
    createdAt: Date.now(),
  }, */,
].map((conversation) => ({ ...conversation, _id: uuid4() }));

const ConversationsList = () => {
  const dispatch = useDispatch();
  const { _id: userId } = useSelector((state) => state.auth.user);
  const { conversations, isLoading, isError, error } = useSelector(
    (state) => state.conversations
  );

  useEffect(() => {
    dispatch(getConversations());
  }, []);

  return (
    <>
      <ConversationHeader />
      <ConversationSearch />
      <ConversationArchive />
      {conversations.map((conversation) => {
        return (
          <Conversation
            conversation={conversation}
            key={conversation._id}
            userId={userId}
          />
        );
      })}
    </>
  );
};

export default ConversationsList;
