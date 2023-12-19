import React from "react";

// components
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

const Profile = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#1B202D]">
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
};

export default Profile;
