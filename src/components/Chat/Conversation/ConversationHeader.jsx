import React from "react";
import { useDispatch } from "react-redux";
// redux actions
import { setPage } from "../../../app/slices/leftSideSlice";
// 3rd party
import { FaHistory } from "react-icons/fa";

import { IoIosChatboxes } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { GiTorpedo } from "react-icons/gi";

const ConversationHeader = () => {
  const dispatch = useDispatch();

  const toPage = (page) => {
    console.log("to page");
    return () => dispatch(setPage(page));
  };

  return (
    <div className="p-4 bg-[#1B202D] flex justify-between items-center h-[4.5rem]">
      <img
        src="https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk"
        className="aspect-square object-cover w-[2.5rem] rounded-full cursor-pointer"
        alt="profile"
        onClick={toPage("settings")}
      />

      <div className="flex items-center gap-6">
        <span
          className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100"
          onClick={toPage("stories")}
        >
          <FaHistory />
        </span>

        <span className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100">
          <IoIosChatboxes />
        </span>

        <span className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100">
          <HiDotsVertical />
        </span>
      </div>
    </div>
  );
};

export default ConversationHeader;
