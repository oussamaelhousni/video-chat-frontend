import React from "react";
import { useSelector } from "react-redux";
//3rd party
import { v4 as uuid4 } from "uuid";
import { useDispatch } from "react-redux";
// components
import NotificationHeader from "./NotificationHeader";

// redux
import { removeFriend } from "../../../app/slices/addFriendsSlice";
import {
  acceptFriendRequest,
  declineFriendRequest,
} from "../../../app/slices/friendRequestsSlice";
import { IoMdPersonAdd } from "react-icons/io";
import { BsPersonCheckFill } from "react-icons/bs";
import { TbUserCancel } from "react-icons/tb";

const data = [
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "voiceCall",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "voiceCall",
    isAnswered: false,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "videoCall",
    isAnswered: false,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "videoCall",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "him",
    isSeen: true,
    isDelivered: true,
    createdAt: Date.now(),
  },
  {
    _id: "1",
    fullName: "Tasnime Elhousni",
    profilePicture:
      "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g",
    message: { text: "this a message" },
    type: "text",
    isAnswered: true,
    sender: "you",
    isSeen: true,
    isDelivered: false,
    createdAt: Date.now(),
  },
].map((conversation) => ({ ...conversation, _id: uuid4() }));

const Notification = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex items-center justify-between p-4 bg-[#2d3436] border-b border-[black]">
      <div className="flex items-center">
        <img
          src={
            data.profilePicture
              ? data.profilePicture
              : "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
          }
          className="aspect-square w-[2.4rem] rounded-full"
          alt=""
        />
        <h3 className="text-white ms-4 font-ubuntu text-md font-semibold">
          {data.fullName}
        </h3>
      </div>
      <div className="flex gap-4">
        <button
          className="p-3 font-ubuntu capitalize text-white text-sm rounded-sm flex justify-center items-center border-none outline-none hover:opacity-90"
          onClick={() => {
            console.log("accept");
            dispatch(acceptFriendRequest(data._id));
            dispatch(removeFriend(data._id));
          }}
        >
          <IoMdPersonAdd className="inline-block text-lg text-green-600 " />
        </button>

        <button
          className="p-3 font-ubuntu capitalize text-white text-sm rounded-sm flex justify-center items-center border-none outline-none hover:opacity-90"
          onClick={() => {
            console.log("cancel");
            dispatch(declineFriendRequest(data._id));
            dispatch(removeFriend(data._id));
          }}
        >
          <TbUserCancel className="inline-block text-lg text-red-500 " />
        </button>
      </div>
    </li>
  );
};
const NotificationsList = () => {
  const { requests } = useSelector((state) => state.addFriends);
  return (
    <div className="absolute top-0 left-0 w-full min-h-full bg-[#1B202D]">
      <NotificationHeader />
      {requests.map((data) => {
        return <Notification data={data} />;
      })}
    </div>
  );
};

export default NotificationsList;
