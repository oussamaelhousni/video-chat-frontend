import React from "react";
// redux
import { useDispatch } from "react-redux";
import { setPage } from "../../../app/slices/leftSideSlice";
// 3rd party
import { BiLeftArrowAlt } from "react-icons/bi";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-[#1B202D] flex items-center h-[4.5rem] gap-4">
      <BiLeftArrowAlt
        className="text-white text-2xl cursor-pointer mb-[-3px]"
        onClick={() => dispatch(setPage("null"))}
      />
      <span className="text-gray-200 text-lg font-semibold">Settings</span>
    </div>
  );
};

export default ProfileHeader;
