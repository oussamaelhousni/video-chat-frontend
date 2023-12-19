import React from "react";
import { BiConversation } from "react-icons/bi";

const RightPageDefault = () => {
  return (
    <div className="w-full h-full bg-[#151924] flex items-center justify-center text-white flex-col gap-8 text-center">
      <BiConversation className="text-8xl text-gray-500" />
      <p className="text-2xl text-gray-500 font-ubuntu">
        Click on one of the conversations to start chatting
      </p>
    </div>
  );
};

export default RightPageDefault;
