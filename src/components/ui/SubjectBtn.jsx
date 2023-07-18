import React from "react";

const SubjectBtn = ({ children, subject }) => {
  return (
    <div
      role="button"
      onClick={() => handleSubjectChange("physics")}
      className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
    >
      <div>{children}</div>;
    </div>
  );
};

export default SubjectBtn;
