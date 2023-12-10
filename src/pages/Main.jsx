import React from "react";

import { IoVideocam } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { MdArchive } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdPhoneMissed } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";

const Main = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="flex relative w-full h-full lg:w-[80%] m-auto lg:h-[94%] bg-red-500 rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="bg-[#1B202D] h-full w-[23rem] flex flex-col">
          {/* Header */}
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

          {/* Search */}
          <div className="relative bg-[#3D4354] m-4 h-[2.8rem] rounded-md">
            <MdSearch className="absolute text-xl left-[11px] top-[10px] text-white" />
            <RxCross1 className="absolute text-lg right-[11px] top-[10px] text-white" />
            <input
              type="text"
              className="absolute w-full h-full bg-transparent focus:outline-none font-ubuntu ps-10 text-white text-sm"
              placeholder="Search"
            />
          </div>

          {/* Archive*/}
          <div className="w-full px-4 text-white text-2xl flex py-4 gap-4 items-center cursor-pointer hover:bg-[#3D4354]">
            <MdArchive className="text-[#16a085]" />{" "}
            <span className="text-base">Archived</span>
          </div>

          {/* chat */}
          <div className="flex-grow overflow-y-auto chat">
            <div className="pt-3 pb-2 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full border-b-[0.2px] border-gray-700">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>

            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkSharp className="inline-flex me-1 text-gray-300" />
                  hello world
                </div>
              </div>
            </div>

            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Tasnime Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <MdPhoneMissed className="inline-flex me-1 text-red-500 flex items-center" />
                  Missed voice call
                </div>
              </div>
            </div>

            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Mohammed jabourri</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300 flex items-center">
                  <MdKeyboardVoice className="inline-flex me-1 text-green-500" />
                  0:14
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Douib Elmehdi</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>

            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center h-[4.5rem] gap-4 hover:bg-[#3D4354]">
              <img
                src="https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
                alt="profile image"
                className="aspect-square h-[3.5rem] rounded-full"
              />
              <div className="flex-grow h-full">
                <div className="flex justify-between items-center text-white">
                  <h3 className=" font-semibold">Oussama Elhousni</h3>
                  <span className="text-sm">20:20</span>
                </div>
                <div className="text-[14px] text-gray-300">
                  <IoCheckmarkDone className="inline-flex me-1 text-blue-300" />
                  hello world
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Right side*/}
        <div className="flex-grow h-full lg:w-[80%] bg-green-500 border-l-[1px] border-gray-700 flex flex-col relative overflow-hidden">
          {/* Header */}
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

          {/* Chat messages */}
          <div className="flex flex-grow flex-col p-8 bg-[#151924] gap-2">
            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
              <div className="h-[20px] w-[30px] skew-x-[45deg] bg-[#2d3436] rounded-sm absolute top-0 left-[-1px]"></div>
            </div>

            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
            </div>

            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
            </div>

            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
            </div>

            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative self-end">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
              <div className="h-[20px] w-[30px] skew-x-[-45deg] bg-[#2d3436] rounded-sm absolute top-0 right-[-1px]"></div>
            </div>

            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative self-end">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
            </div>
            <div className="p-4 bg-[#2d3436] w-fit min-w-[10rem] min-h-[2rem] rounded-md flex flex-col relative self-end">
              <p className="text-gray-200">text text text</p>
              <span className="text-[12px] absolute right-2 bottom-1 text-gray-200">
                20:20
              </span>
            </div>
          </div>

          {/* Send messages*/}
          <div className="absolute h-[4.5rem] w-full bg-[#1B202D] bottom-0 left-0 flex items-center px-4 gap-4">
            <div className="text-xl text-white flex gap-4">
              <HiOutlinePlus className="cursor-pointer" />
              <FaRegFaceLaugh className="cursor-pointer" />
            </div>

            <div className="h-[2rem] relative bg-[#3D4354] m-4 rounded-md w-full">
              <input
                type="text"
                className="absolute top-0 left-0 w-full h-full bg-transparent focus:outline-none font-ubuntu ps-4 text-white text-sm"
                placeholder="Search"
              />
            </div>

            <div className="text-xl text-white">
              <BiSolidSend className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
