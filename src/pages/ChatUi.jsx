import { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
// 3rd party
import { io } from "socket.io-client";
// components
import { setSocket } from "../app/slices/socketSlice";
import ChatContainer from "../components/Chat/ChatContainer";
import ChatLeftSide from "../components/Chat/ChatLeftSide";
import ChatRightSide from "../components/Chat/ChatRightSide";

import { addNewFriend, removeFriend } from "../app/slices/addFriendsSlice";
// eslint-disable-next-line react-refresh/only-export-components
const ChatUi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("http://127.0.0.1:8080");
    socket.on("connect", () => {
      console.log("connected");
      dispatch(setSocket(socket));

      // 1 - add notification when a user send a requests
      socket.on("notification", (notification) => {
        dispatch(addNewFriend(notification));
      });
      // 2 - remove notification when user cancel his request
      socket.on("removeNotification", (userId) => {
        console.log("remove", userId);
        dispatch(removeFriend(userId));
      });
    });

    return () => {
      socket.close();
      dispatch(setSocket(null));
    };
  }, [dispatch]);

  return (
    <ChatContainer>
      <ChatLeftSide />
      <ChatRightSide />
    </ChatContainer>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ChatUi);
