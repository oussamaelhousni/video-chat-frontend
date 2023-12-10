import React from "react";

// 3rd party
import {
  MdPhoneCallback,
  MdPhoneMissed,
  MdVideocam,
  MdVideocamOff,
} from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const conversation = {
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
};

const Conversation = ({ conversation }) => {
  return (
    <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
      <img
        src={conversation.profilePicture}
        alt="profile image"
        className="aspect-square h-[3.5rem] rounded-full"
      />
      <div className="flex-grow h-full">
        <div className="flex justify-between items-center text-white">
          <h3 className=" font-semibold">{conversation.fullName}</h3>
          <span className="text-sm">
            {`${new Date(conversation.createdAt).getHours()}:${new Date(
              conversation.createdAt
            ).getMinutes()}`}
          </span>
        </div>
        <div className="text-[14px] text-gray-300">
          {conversation.type === "voiceCall" && !conversation.isAnswered && (
            <>
              <MdPhoneMissed className="inline-flex mt-[-3px] me-1 text-red-500 items-center" />
              Missed voice call
            </>
          )}

          {conversation.type === "voiceCall" && conversation.isAnswered && (
            <>
              <MdPhoneCallback className="inline-flex mt-[-3px] me-1 text-green-500 items-center" />
              Voice call
            </>
          )}
          {conversation.type === "videoCall" && !conversation.isAnswered && (
            <>
              <MdVideocamOff className="inline-flex mt-[-3px] me-1 text-red-500 items-center" />
              Missed video call
            </>
          )}

          {conversation.type === "videoCall" && conversation.isAnswered && (
            <>
              <MdVideocam className="inline-flex mt-[-3px] me-1 text-green-500 items-center" />
              video call
            </>
          )}

          {conversation.type === "text" &&
            !conversation.isDelivered &&
            conversation.sender === "you" && (
              <>
                <IoMdCheckmark className="inline-flex mt-[-3px] me-1 text-gray-500 items-center" />
                {conversation.message.text[0].toUpperCase() +
                  conversation.message.text.slice(1)}
              </>
            )}

          {conversation.type === "text" &&
            conversation.isDelivered &&
            conversation.sender === "you" && (
              <>
                {conversation.isSeen ? (
                  <IoCheckmarkDoneOutline className="inline-flex mt-[-3px] me-1 text-gray-500 items-center" />
                ) : (
                  <IoCheckmarkDoneOutline className="inline-flex mt-[-3px] me-1 text-blue-500 items-center" />
                )}
                {conversation.message.text[0].toUpperCase() +
                  conversation.message.text.slice(1)}
              </>
            )}
          {conversation.type === "text" && conversation.sender !== "you" && (
            <>
              {conversation.message.text[0].toUpperCase() +
                conversation.message.text.slice(1)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
