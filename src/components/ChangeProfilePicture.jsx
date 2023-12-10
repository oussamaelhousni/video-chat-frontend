import React from "react";
import { FaCamera } from "react-icons/fa";

const ChangeProfilePicture = ({ className }) => {
  return (
    <div className={"relative w-[10rem] h-[10rem] group " + className}>
      <img
        src="https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk"
        alt=""
        className="aspect-square object-cover rounded-full cursor-pointer absolute top-0 left-0 w-full"
      />
      <label
        htmlFor="file"
        className="absolute top-0 left-0 w-full h-full rounded-full bg-black opacity-0 z-10 group-hover:opacity-50 flex flex-col justify-center items-center cursor-pointer"
      >
        <FaCamera className="text-xl text-white" />
        <span className="text-white text-[.90rem]">Change Profile Picture</span>
      </label>
      <input type="file" id="file" className="hidden" />
    </div>
  );
};

export default ChangeProfilePicture;
