import React from "react";

import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";

const MessagesFooter = () => {
  return (
    <div className="absolute h-[4.5rem] w-full bg-[#1B202D] bottom-0 left-0 flex items-center px-4 gap-4">
      <div className="text-xl text-white flex gap-4">
        <HiOutlinePlus className="cursor-pointer" />
        <FaRegFaceLaugh className="cursor-pointer" />
      </div>

      <div className="h-[2rem] relative bg-[#3D4354] m-4 rounded-md w-full">
        <input
          type="text"
          className="absolute top-0 left-0 w-full h-full bg-transparent focus:outline-none font-ubuntu ps-4 text-white text-sm"
          placeholder="Search"
        />
      </div>

      <div className="text-xl text-white">
        <BiSolidSend className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagesFooter;
