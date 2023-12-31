import { useSelector } from "react-redux";
import { memo } from "react";
import Search from "./Search";
const ChatContainer = ({ children }) => {
  const { socket } = useSelector((state) => state.socket);
  socket?.emit("init", { userId: 12 });
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="flex relative w-full h-full lg:w-[80%] m-auto lg:h-[94%] bg-red-500 rounded-lg overflow-hidden">
        <Search />
        {children}
      </div>
    </div>
  );
};

export default memo(ChatContainer);
