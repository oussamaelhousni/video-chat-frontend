import React from "react";

// 3rd party
import { IoVideocam } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

import toPage from "../../../utils/toPage";
import { useSelector } from "react-redux";

const MessagesHeader = () => {
  const { receiver } = useSelector((state) => state.currentConversation);
  return (
    <div className="p-4 bg-[#1B202D] flex justify-between items-center">
      <div
        className="flex gap-2 items-center"
        onClick={toPage("senderInfo", false)}
      >
        <img
          src={
            receiver?.profilePicture ||
            "https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?resize=400x0"
          }
          className="aspect-square object-cover w-[2.5rem] rounded-full cursor-pointer"
          alt="profile"
        />
        <h3 className="font-semibold text-white">{receiver?.fullName}</h3>
      </div>

      <div className="flex items-center gap-6">
        <span className="cursor-pointer text-green-400 text-xl hover:text-gray-300 transition-colors duration-100">
          <IoVideocam />
        </span>

        <span className="cursor-pointer text-green-400 text-xl hover:text-gray-300 transition-colors duration-100">
          <IoMdCall />
        </span>

        <span className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100">
          <HiDotsVertical />
        </span>
      </div>
    </div>
  );
};

export default MessagesHeader;
