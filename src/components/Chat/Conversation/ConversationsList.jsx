import React from "react";
import { useState } from "react";
// 3rd party
import { v4 as uuidv4 } from "uuid";
// components
import ConversationHeader from "./ConversationHeader";
import ConversationSearch from "./ConversationSearch";
import ConversationArchive from "./ConversationArchive";
import Conversation from "./Conversation";

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
  },
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
  },
].map((conversation) => ({ ...conversation, _id: uuidv4() }));

const ConversationsList = () => {
  const [conversations, setConversations] = useState(data);
  return (
    <>
      <ConversationHeader />
      <ConversationSearch />
      <ConversationArchive />
      {conversations.map((conversation) => {
        return (
          <Conversation conversation={conversation} key={conversation._id} />
        );
      })}
    </>
  );
};

export default ConversationsList;
