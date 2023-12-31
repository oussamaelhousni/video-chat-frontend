import { useSelector } from "react-redux";
import { memo } from "react";
// components
import RightPageDefault from "./RightPageDefault";
import MessagesList from "./Messages/MessagesList";
import SenderInfo from "./SenderInfo/SenderInfo";
import StoryPage from "./StoryPage";

// eslint-disable-next-line react-refresh/only-export-components
const ChatRightSide = () => {
  const { currentPage } = useSelector((state) => state.rightPage);
  return (
    <div className="flex-grow h-full lg:w-[80%] bg-green-500 border-l-[1px] border-gray-700 flex flex-col relative overflow-hidden">
      <RightPageDefault />
      {currentPage == "story" && <StoryPage />}
      {currentPage === "messageList" && <MessagesList />}
      {currentPage === "senderInfo" && <SenderInfo />}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ChatRightSide);
