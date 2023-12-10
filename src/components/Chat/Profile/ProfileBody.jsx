import React from "react";
import { useState } from "react";
// components
import ProfileInput from "./ProfileInput";
import ChangeProfilePicture from "../../ChangeProfilePicture";
import ProfileInputPassword from "./ProfileInputPassword";

const ProfileBody = () => {
  const [fullName, setFullName] = useState("Oussama Elhousni");
  const [pass, setPassword] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [about, setAbout] = useState("Web developer");

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };

  const changeAbout = (e) => {
    setAbout(e.target.value);
  };

  const onChangePass = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center py-10 gap-12 px-8">
      <ChangeProfilePicture className="mb-16" />
      <ProfileInput
        value={fullName}
        onChange={changeFullName}
        label="fullName"
      />

      <ProfileInput value={about} onChange={changeAbout} label="About" />
      <div className="border-b-[1px] border-gray-700 w-full"></div>
      <ProfileInputPassword value={pass} onChange={onChangePass} />
      <ProfileInputPassword value={pass} onChange={onChangePass} />
      <ProfileInputPassword value={pass} onChange={onChangePass} />
    </div>
  );
};

export default ProfileBody;
