import React from "react";

// 3rd party
import { IoVideocam } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

const ConversationHeader = () => {
  return (
    <div className="p-4 bg-[#1B202D] flex justify-between items-center">
      <img
        src="https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk"
        className="aspect-square object-cover w-[2.5rem] rounded-full cursor-pointer"
        alt="profile"
      />

      <div className="flex items-center gap-6">
        <span className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100">
          <IoVideocam />
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
