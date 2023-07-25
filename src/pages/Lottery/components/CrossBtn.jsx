import React from "react";

const CrossBtn = ({title, onClick}) => {
  return (
    <div className="flex flex-col items-center " onClick={onClick}>
      <div className=" relative h-14 w-14 rounded-full border-4 cursor-pointer border-orange-400">
        <div className=" absolute left-[1.4rem] top-2">
          <div className="absolute h-8 w-1 transform rounded bg-orange-400 "></div>
          <div className="absolute h-8 w-1 rotate-90 transform rounded bg-orange-400"></div>
        </div>
      </div>
      <div className=" w-[109px] text-center text-base font-semibold text-indigo-600">
       {title}
      </div>
    </div>
  );
};

export default CrossBtn;
