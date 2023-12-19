import React from "react";

//3rd party
import { v4 as uuidv4 } from "uuid";

// components
import ArchiveHeader from "./ArchiveHeader";
import Conversation from "../Conversation/Conversation";

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

const ArchiveList = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-full bg-[#1B202D]">
      <ArchiveHeader />
      {data.map((conversation) => {
        return (
          <Conversation conversation={conversation} key={conversation._id} />
        );
      })}
    </div>
  );
};

export default ArchiveList;
