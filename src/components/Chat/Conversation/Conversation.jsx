import React from "react";

// 3rd party
import {
  MdPhoneCallback,
  MdPhoneMissed,
  MdVideocam,
  MdVideocamOff,
} from "react-icons/md";

import { useDispatch } from "react-redux";

import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import toPage from "../../../utils/toPage";
import { getCurrentConversationMessage } from "../../../app/slices/currentConversationSlice";
import { setCurrentConversation } from "../../../app/slices/currentConversationSlice";
const Conversation = ({ conversation, userId }) => {
  const dispatch = useDispatch();

  // remember toPage returns a function that will shows the passed in component
  const toMessageList = toPage("messageList", false);

  // fetch messages of current Active chat
  const onClickHandler = () => {
    dispatch(getCurrentConversationMessage(conversation._id));
    dispatch(setCurrentConversation(conversation._id));
    toMessageList();
  };

  return (
    <div
      className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]"
      onClick={(e) => {
        toMessageList();
        onClickHandler(conversation._id);
      }}
    >
      <img
        src={
          conversation.profilePicture ||
          "https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?resize=400x0"
        }
        alt="profile image"
        className="aspect-square h-[3.5rem] rounded-full"
      />
      <div className="flex-grow h-full">
        <div className="flex justify-between items-center text-white">
          <h3 className=" font-semibold">{conversation.user.fullName}</h3>
          <span className="text-sm">
            {`${new Date(
              conversation.lastMessage?.updatedAt || conversation.createdAt
            ).getHours()}:${new Date(conversation.createdAt).getMinutes()}`}
          </span>
        </div>
        <div className="text-[14px] text-gray-300">
          {conversation.lastMessage?.type === "voiceCall" &&
            !conversation.lastMessage?.isAnswered && (
              <>
                <MdPhoneMissed className="inline-flex mt-[-3px] me-1 text-red-500 items-center" />
                Missed voice call
              </>
            )}

          {conversation.lastMessage?.type === "voiceCall" &&
            conversation.lastMessage?.isAnswered && (
              <>
                <MdPhoneCallback className="inline-flex mt-[-3px] me-1 text-green-500 items-center" />
                Voice call
              </>
            )}
          {conversation.lastMessage?.type === "videoCall" &&
            !conversation.lastMessage?.isAnswered && (
              <>
                <MdVideocamOff className="inline-flex mt-[-3px] me-1 text-red-500 items-center" />
                Missed video call
              </>
            )}

          {conversation.lastMessage?.type === "videoCall" &&
            conversation.lastMessage?.isAnswered && (
              <>
                <MdVideocam className="inline-flex mt-[-3px] me-1 text-green-500 items-center" />
                video call
              </>
            )}

          {conversation.lastMessage?.type === "text" &&
            !conversation.lastMessage?.isDelivered &&
            conversation.lastMessage?.sender === userId && (
              <>
                <IoMdCheckmark className="inline-flex mt-[-3px] me-1 text-gray-500 items-center" />
                {conversation.lastMessage?.text[0]?.toUpperCase() +
                  conversation.lastMessage?.text?.slice(1)}
              </>
            )}

          {conversation.lastMessage?.type === "text" &&
            conversation.lastMessage?.isDelivered &&
            conversation.lastMessage?.sender === userId && (
              <>
                {conversation.lastMessage?.isSeen ? (
                  <IoCheckmarkDoneOutline className="inline-flex mt-[-3px] me-1 text-gray-500 items-center" />
                ) : (
                  <IoCheckmarkDoneOutline className="inline-flex mt-[-3px] me-1 text-blue-500 items-center" />
                )}
                {conversation.lastMessage?.text[0].toUpperCase() +
                  conversation.lastMessage?.text.slice(1)}
              </>
            )}
          {conversation.lastMessage?.type === "text" &&
            conversation.lastMessage?.sender !== userId && (
              <>
                {conversation.lastMessage?.text[0].toUpperCase() +
                  conversation.lastMessage?.text.slice(1)}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
