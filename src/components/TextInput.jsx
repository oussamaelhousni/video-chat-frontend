import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
const TextInput = ({
  placeholder,
  onChange,
  name,
  label,
  value,
  type = "text",
  eye,
  className = "",
}) => {
  const [show, setShow] = useState(true);
  const onClick = (e) => setShow(!show);
  return (
    <div className="flex relative">
      <input
        id="input"
        type={eye && show ? "password" : type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={"input peer" + " " + className}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <label htmlFor="input" className="label">
        {label}
      </label>
      {eye && (
        <FaEye
          className="text-primary text-md absolute right-[10px] top-[14px] cursor-pointer"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default TextInput;
