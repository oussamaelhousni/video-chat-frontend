import React from "react";
import Button from "../../Button";
const ProfileInputPassword = ({ value, onChangePass }) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={"password"}
        className="text-blue-500 uppercase mb-4 font-semibold"
      >
        {"Password"}
      </label>
      <div className="flex flex-col text-white items-center gap-4">
        <input
          value={value.password}
          onChange={onChangePass}
          name="password"
          id={"password"}
          placeholder="password"
          className="h-[2rem] flex-grow bg-transparent border-gray-700 border-b-[1px] w-full
            py-4 focus:outline-none"
        />
        <input
          placeholder="Confirm Password"
          value={value.password}
          onChange={onChangePass}
          name="password"
          id={"password"}
          className="h-[2rem] flex-grow bg-transparent border-gray-700 border-b-[1px]
            py-4 focus:outline-none w-full"
        />
        <Button className="self-start rounded-none shadow-none">
          Change password
        </Button>
      </div>
    </div>
  );
};

export default ProfileInputPassword;
