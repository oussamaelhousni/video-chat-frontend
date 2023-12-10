import React from "react";

const ChatContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="flex relative w-full h-full lg:w-[80%] m-auto lg:h-[94%] bg-red-500 rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ChatContainer;
