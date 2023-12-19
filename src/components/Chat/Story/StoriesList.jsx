import React from "react";

// components
import Story from "./Story";
import StoryListHeader from "./StoryListHeader";

const fakeData = [
  {
    nbrOfStories: 5,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
  {
    nbrOfStories: 4,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Anas elhousni",
  },
  {
    nbrOfStories: 4,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Tasnime elhousni",
  },
  {
    nbrOfStories: 2,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
  {
    nbrOfStories: 2,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
  {
    nbrOfStories: 2,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
  {
    nbrOfStories: 2,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
  {
    nbrOfStories: 2,
    image:
      "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
    fullName: "Oussama elhousni",
  },
];

const myStory = {
  nbrOfStories: 5,
  image:
    "https://fastly.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk",
  fullName: "My status",
};

const StoriesList = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-full bg-[#1B202D]">
      <StoryListHeader className="mb-6" />
      <h5 className="text-green-600 text-md font-ubuntu px-4 uppercase font-semibold">
        my Status
      </h5>
      <Story {...myStory} />
      <h5 className="text-green-600 text-md font-ubuntu px-4 uppercase font-semibold mt-6">
        RECENT
      </h5>
      {fakeData.map((story) => {
        return <Story {...story} />;
      })}
      <h5 className="text-green-600 text-md font-ubuntu px-4 uppercase font-semibold mt-6">
        Viewed
      </h5>
      {fakeData.map((story) => {
        return <Story {...story} />;
      })}

      <div className="flex justify-between items-center py-4">
        <h5 className="text-green-600 text-md font-ubuntu px-4 uppercase font-semibold">
          Muted
        </h5>
        <span className="text-green-600 text-md font-ubuntu px-4 uppercase cursor-pointer">
          SHOW
        </span>
      </div>
    </div>
  );
};

export default StoriesList;
