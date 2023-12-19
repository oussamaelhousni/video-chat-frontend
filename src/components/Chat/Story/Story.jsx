import React from "react";

const Story = ({ nbrOfStories, image, fullName }) => {
  const dashLength = (2 * Math.PI * 23) / (nbrOfStories * 2); // Total circumference / number of dashes
  const dashArray = `${dashLength} ${dashLength}`;
  return (
    <div className="flex items-center py-4 px-4 gap-4">
      <div className="relative h-[60px] w-[60px] cursor-pointer">
        <svg
          width={60}
          height={60}
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <circle
            fill="none"
            stroke={"green"}
            cx={30}
            cy={30}
            r={27}
            strokeWidth={3}
            strokeDasharray={dashArray}
          ></circle>
        </svg>
        <img
          src={image}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full opacity-90 "
          alt=""
        />
      </div>
      <h3 className="text-white text-lg font-semibold">{fullName}</h3>
    </div>
  );
};

export default Story;
