import React from "react";
import { useState } from "react";

// 3rd party
import { MdModeEdit } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

const ProfileInput = ({ value, label, onChange }) => {
  const [edit, setEdit] = useState(true);
  console.log("vaue", value);
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={label}
        className="text-blue-500 uppercase mb-4 font-semibold"
      >
        {label}
      </label>
      <div className="flex text-white items-center gap-4">
        {edit && <div className="h-[2rem] flex-grow">{value}</div>}
        {!edit && (
          <input
            value={value}
            onChange={onChange}
            id={label}
            className="h-[2rem] flex-grow bg-transparent border-gray-700 border-b-[1px]
            py-4 focus:outline-none"
          />
        )}
        <span>
          {!edit && (
            <GiCheckMark
              className="cursor-pointer"
              onClick={() => setEdit(!edit)}
            />
          )}
          {edit && (
            <MdModeEdit
              className="cursor-pointer"
              onClick={() => setEdit(!edit)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default ProfileInput;
