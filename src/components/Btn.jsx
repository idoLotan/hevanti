import React from "react";

const Btn = ({ text, style }) => {
  return (
    <button className={` rounded-xl ${style} font-bold text-white`}>
      {text}
    </button>
  );
};

export default Btn;
