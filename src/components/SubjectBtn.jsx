import React from "react";

const SubjectBtn = ({children,  subject,  }) => {


  return     <div role="button" onClick={() => handleSubjectChange("physics")}    className="h-[119px] cursor-pointer flex-col m-3 pt-3 flex items-center group justify-center w-[181px] border-2 border-[#FF7848] hover:border-[#555FD9]">

          <div>{children}</div>;
      </div>
};

export default SubjectBtn;
