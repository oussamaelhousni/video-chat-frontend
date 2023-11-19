import React from "react";

const Button = ({ children, className, type, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
      className={
        "bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-[.5rem] transition-colors duration-200 font-normal text-white text-sm font-ubuntu dark:bg-secondary dark:hover:bg-secondary-dark uppercase shadow-sm shadow-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
