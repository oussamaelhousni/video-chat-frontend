import React from "react";
import { useState, memo } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { abortMessage } from "../../../app/slices/currentConversationSlice";
const MessageMediaUploader = ({ message }) => {
  const dispatch = useDispatch();
  const onAbort = () => {
    const aborter = message.aborter;
    dispatch(abortMessage({ id: message.id }));
    aborter.abort();
  };
  return (
    <div className="bg-gray-500 min-w-[10rem] min-h-[15rem] max-h-[20rem] max-w-[20rem] rounded-md p-1 relative self-end">
      {message?.type === "image" && (
        <img
          src={message?.url}
          className="block w-full h-full object-cover"
          alt="upload image"
        />
      )}
      {message?.type === "video" && (
        <video
          src={message?.url}
          className="block w-full h-full object-cover"
          alt="upload image"
        />
      )}
      <div className="w-full top-0 left-0 absolute h-full bg-black bg-opacity-20"></div>
      {message?.isLoading && (
        <div
          className="w-[3rem] h-[3rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center bg-gray-900 rounded-full bg-opacity-60 cursor-pointer"
          onClick={onAbort}
        >
          <div className="absolute top-[50%-5rem] left-[50%-1.5rem] rounded-full border-green-600 border-e-2 animate-spin w-full h-full"></div>
          <RxCross2 className="text-white text-2xl font-bold" />
        </div>
      )}

      {message?.isCanceled && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center bg-red-900 bg-opacity-50  px-4 py-2 rounded-full select-none">
          <span className="text-white">canceled</span>
        </div>
      )}
    </div>
  );
};

export default memo(MessageMediaUploader);
