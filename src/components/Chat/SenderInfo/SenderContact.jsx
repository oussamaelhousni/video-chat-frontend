import React from "react";
import { MdContentCopy } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { RiDeleteBinFill } from "react-icons/ri";

const SenderContact = ({ sender }) => {
  return (
    <div className="bg-[#1B202D] w-full h-full py-12 px-8 flex flex-col">
      <div className="flex flex-col items-center gap-8">
        <img
          src="https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk"
          alt="Sender profile"
          className="w-[15rem] aspect-square object-cover block rounded-full"
        />
        <p className="flex flex-col items-center text-white gap-3">
          <span className="text-4xl">Oussama Elhousni</span>
          <span className="text-md text-[#a4b0be]">
            oussamaelhousnioe@gmail.com{" "}
            <MdContentCopy className="ms-2 inline-flex text-white text-xl cursor-pointer" />
          </span>
        </p>
        <ul className="flex flex-col gap-4 mt-32">
          <li className="text-red-500 text-xl flex items-center gap-2 font-semibold hover:bg-gray-800 p-3 cursor-pointer">
            <ImBlocked className="inline-flex" />
            Block Oussama Elhousni
          </li>
          <li className="text-red-500 text-xl flex items-center gap-2 font-semibold hover:bg-gray-800 p-3 cursor-pointer">
            {" "}
            <RiDeleteBinFill className="inline-flex" />
            Delete chat with Oussama Elhousni
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SenderContact;
