import React from "react";
// 3rd party

const Message = ({ message, messageBefore }) => {
  return (
    <div
      className={`p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative ${
        message.sender == "him" ? "self-end" : ""
      }`}
    >
      <p className="text-gray-200">{message.text}</p>
      <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
        {`${new Date(message.createdAt).getHours()}:${new Date(
          message.createdAt
        ).getMinutes()}`}
      </span>
      <div
        className={`h-[20px] w-[30px] skew-x-[${
          message.sender === "him" ? "-" : ""
        }45deg] bg-[#2d3436] rounded-sm absolute top-0 ${
          message.sender == "him" ? "right" : "left"
        }-[-1px]`}
      ></div>
    </div>
  );
};

export default Message;
