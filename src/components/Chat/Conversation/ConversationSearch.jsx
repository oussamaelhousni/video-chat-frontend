import React from "react";

// 3rd party
import { MdSearch } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const ConversationSearch = () => {
  return (
    <div className="relative bg-[#3D4354] m-4 h-[2.5rem] rounded-md">
      <MdSearch className="absolute text-xl left-[11px] top-[10px] text-white" />
      <RxCross1 className="absolute text-lg right-[11px] top-[10px] text-white" />
      <input
        type="text"
        className="absolute w-full h-full bg-transparent focus:outline-none font-ubuntu ps-10 text-white text-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default ConversationSearch;
