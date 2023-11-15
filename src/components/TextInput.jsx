import React from "react";
const TextInput = ({ placeholder, onChange, label, value, className = "" }) => {
  return (
    <div className="flex relative">
      <input
        id="input"
        placeholder={placeholder}
        value={value}
        className={"input peer" + " " + className}
        onChange={onChange}
      />
      <label htmlFor="input" className="label">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
