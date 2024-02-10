import React from "react";

const PreviewModal = ({ children }) => {
  return (
    <div className="fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex justify-center items-center">
      <div className="aspect-square h-[80%] bg-white">{children}</div>
    </div>
  );
};

export default PreviewModal;
