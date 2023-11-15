import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "bg-blue-500 hover:bg-blue-600 rounded-md px-8 py-2 transition-colors duration-200 text-white text-sm font-ubuntu dark:bg-secondary dark:hover:bg-secondary-dark uppercase" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
