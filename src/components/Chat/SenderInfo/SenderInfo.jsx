import React from "react";

// components
import SenderHeader from "./SenderHeader";
import SenderContact from "./SenderContact";
const SenderInfo = () => {
  return (
    <div className="h-full w-full absolute left-0 top-0">
      <SenderHeader />
      <SenderContact />
    </div>
  );
};

export default SenderInfo;
