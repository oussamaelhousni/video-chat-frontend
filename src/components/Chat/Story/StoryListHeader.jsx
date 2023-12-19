import React from "react";

// redux

// 3rd party
import { BiLeftArrowAlt } from "react-icons/bi";
import toPage from "../../../utils/toPage";

const StoryListHeader = ({ className }) => {
  return (
    <div
      className={`p-4 bg-[#1B202D] flex items-center h-[4.5rem] gap-4 ${className}`}
    >
      <BiLeftArrowAlt
        className="text-white text-2xl cursor-pointer mb-[-3px]"
        onClick={toPage("null")}
      />
      <span className="text-gray-200 text-lg font-semibold">Stories</span>
    </div>
  );
};

export default StoryListHeader;
