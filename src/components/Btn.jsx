import React from "react";

const Btn = ({ text, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-xl ${style} font-bold text-white`}
    >
      {text}
    </button>
  );
};

export default Btn;
