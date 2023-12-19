import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// redux actions
import { setPage } from "../../../app/slices/leftSideSlice";
// 3rd party
import { FaHistory } from "react-icons/fa";

import { GoMultiSelect } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import { IoIosChatboxes } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { GiTorpedo } from "react-icons/gi";

const ConversationHeader = () => {
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);

  const togglePopup = () => {
    setPopUp((state) => !state);
  };

  const toPage = (page) => {
    return () => {
      setPopUp(false);
      dispatch(setPage(page));
    };
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

        <span className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100 relative">
          <HiDotsVertical onClick={togglePopup} />
          {popUp && (
            <ul className="absolute min-w-[200px] bg-[#222f3e] rounded-sm top-[30px] left-0 -translate-x-[100%] z-10 shadow shadow-gray-700">
              <li className="text-white text-sm font-ubuntu uppercase text-left px-4 py-3  hover:bg-[#576574] min-w-full flex items-center">
                <GoMultiSelect className="inline-flex me-2 text-[20px]" />
                select chats
              </li>
              <li
                className="text-white text-sm font-ubuntu uppercase text-left px-4 py-3  hover:bg-[#576574]"
                onClick={toPage("settings")}
              >
                <IoSettingsSharp className="inline-flex me-2 text-[20px]" />
                Settings
              </li>
              <li className="text-white text-sm font-ubuntu uppercase text-left px-4 py-3  hover:bg-[#576574]">
                <MdLogout className="inline-flex me-2 text-[20px]" />
                Logout
              </li>
            </ul>
          )}
        </span>
      </div>
    </div>
  );
};

export default ConversationHeader;
