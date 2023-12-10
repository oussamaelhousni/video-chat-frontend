import React from "react";

// 3rd party
import { BiLeftArrowAlt } from "react-icons/bi";

const SenderHeader = () => {
  return (
    <div className="p-4 bg-[#1B202D] flex items-center h-[4.5rem] gap-4">
      <BiLeftArrowAlt className="text-white text-2xl cursor-pointer mb-[-3px]" />
      <span className="text-gray-200 text-lg font-semibold">Contact Info</span>
    </div>
  );
};

export default SenderHeader;
