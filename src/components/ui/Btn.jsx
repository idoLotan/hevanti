import React from "react";

const Btn = ({ text, style, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`z-10 rounded-xl ${style} font-bold text-white`}
    >
      {children}
      {text}
    </button>
  );
};

export default Btn;
