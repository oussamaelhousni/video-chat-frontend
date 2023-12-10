import React from "react";

import { MdArchive } from "react-icons/md";
const ConversationArchive = () => {
  return (
    <div className="w-full px-4 text-white text-2xl flex py-4 gap-4 items-center cursor-pointer hover:bg-[#3D4354]">
      <MdArchive className="text-[#16a085]" />{" "}
      <span className="text-base">Archived</span>
    </div>
  );
};

export default ConversationArchive;
