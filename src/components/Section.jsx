import React, { useState } from "react";

const Section = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item p-2">
      <div
        className="accordion-title font-bold flex flex-col text-end"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex flex-row justify-between items-end">
        <div className="p-2 ">
          {isActive ? (
            <div
              className="h-0 w-0 
  border-b-[13px] border-l-[10px]
  border-r-[10px] border-b-yellow-500
  border-l-transparent border-r-transparent"
            ></div>
          ) : (
            <div
              className="h-0 w-0 
  border-l-[10px] border-r-[10px]
  border-t-[13px] border-l-transparent
  border-r-transparent border-t-[#555FD9]"
            ></div>
          )}
        </div>
        <div className="">{title}</div>
      
        </div>
       
      
        <div className="h-[2px] w-[100%] bg-[#555FD9]"></div>
      </div>
      {isActive && (
        <div className="accordion-content flex text-end">{content}</div>
      )}
    </div>
  );
};

export default Section;
