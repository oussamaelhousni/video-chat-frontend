import React from "react";
// 3rd party

const Message = ({ message, messageBefore, userId }) => {
  return (
    <div
      className={`pt-4 pb-6 ps-4 pe-8 bg-[#2d3436] w-fit min-w-[20rem] min-h-[2rem] rounded-md flex flex-col relative ${
        message.sender == userId ? "self-end" : ""
      } flex-shrink-0`}
    >
      <p className="text-gray-200">{message.text}</p>
      <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
        {`${new Date(message.createdAt).getHours()}:${new Date(
          message.createdAt
        ).getMinutes()}`}
      </span>
      {!messageBefore && (
        <div
          className={`h-[20px] w-[30px] skew-x-[${
            message.sender === userId ? "-" : ""
          }45deg] bg-[#2d3436] rounded-sm absolute top-0 ${
            message.sender == userId ? "right" : "left"
          }-[-1px]`}
        ></div>
      )}
    </div>
  );
};

export default Message;
