import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// redux actions
import { setPage } from "../../../app/slices/leftSideSlice";
import { openPopup } from "../../../app/slices/popupSlice";
import { getFriendRequests } from "../../../app/slices/addFriendsSlice";
// 3rd party
import { FaHistory } from "react-icons/fa";

import { GoMultiSelect } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import { IoIosChatboxes } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";

const ConversationHeader = () => {
  const { requests, count } = useSelector((state) => state.addFriends);
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

  useEffect(() => {
    dispatch(getFriendRequests());
  }, []);

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
          onClick={toPage("notifications")}
        >
          <div className="relative">
            {count > 0 && (
              <div className="aspect-square w-[15px] h-[15px] flex justify-center items-center rounded-full bg-red-500 top-[-8px] right-[-8px] text-[8px] absolute">
                {count}
              </div>
            )}
            <IoMdNotifications />
          </div>
        </span>
        <span
          className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100"
          onClick={toPage("stories")}
        >
          <FaHistory />
        </span>

        <span
          className="cursor-pointer text-white text-xl hover:text-gray-300 transition-colors duration-100"
          onClick={() => dispatch(openPopup("search"))}
        >
          <MdPersonSearch />
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
