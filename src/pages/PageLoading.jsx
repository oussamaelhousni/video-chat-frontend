import React from "react";
import { RotatingLines } from "react-loader-spinner";
const PageLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <RotatingLines
        strokeColor="#fff"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default PageLoading;
