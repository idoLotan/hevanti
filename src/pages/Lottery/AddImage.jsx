import React from "react";
import CrossBtn from "./CrossBtn";

const AddImage = () => {
  return (
    <div>
      <section className="relative p-10 ">
        
        {/* <header className="  text-center text-[64px] font-semibold text-orange-400">
          ברוך הבא
        </header> */}
        <header className=" w-[992px] text-center text-[40px] font-semibold leading-[64px] text-orange-400">
          שתף/שתפי את התמונות עם חולצות המותג שלנו/ או חולצות שבט און
        </header>
        <div className=" flex  h-[600px] w-[484px] justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]">
          <div
            id="right-side "
            className="flex flex-row h-full w-[50%]   items-center justify-center"
          >
              <CrossBtn title={"title"}></CrossBtn>
            <div className="Rectangle11 flex h-[392px] w-[304px] flex-col items-center justify-center rounded-xl bg-neutral-100">
            <CrossBtn title={"title"}></CrossBtn>
            </div>

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddImage;
