import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toPage from "../../utils/toPage";

const StoryPage = () => {
  return (
    <div className="fixed w-screen h-screen bg-black text-white left-0 top-0 justify-center items-center flex">
      <FaArrowLeft
        className="absolute left-[30px] top-[30px] text-2xl text-gray-300 cursor-pointer"
        onClick={toPage("null", false)}
      />
      <div className="w-[90%] sm:w-[80%] lg:w-[30%] h-[90%] bg-gray-600 relative">
        <div className="top-[95%] left-1/2 -translate-x-1/2 absolute  flex gap-2">
          <FaEye className="text-white text-2xl" /> 30
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
