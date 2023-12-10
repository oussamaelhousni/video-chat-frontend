import React from "react";

import { IoVideocam } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

const MessagesHeader = () => {
  return (
    <div className="p-4 bg-[#1B202D] flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img
          src="https://fastly.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
          className="aspect-square object-cover w-[2.5rem] rounded-full cursor-pointer"
          alt="profile"
        />
        <h3 className="font-semibold text-white">Oussama Elhousni</h3>
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
