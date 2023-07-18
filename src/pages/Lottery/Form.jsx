import React from "react";

const Form = () => {
  return (
    <div>
      {" "}
      <section className="relative p-10 ">
        <header className="  text-center text-[64px] font-semibold text-orange-400">
          ברוך הבא
        </header>
        <div className=" flex h-[600px] w-[484px] justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]">
       

          <div
            id="right-side "
            className="flex h-full w-[50%] flex-col  items-center justify-center"
          >
            <button className="mb-4 h-14 w-[248px] rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600">
              כניסה עם קוד
            </button>
            <input
              dir="rtl"
              placeholder="הקלד קוד"
              className="mb-10 h-14 w-[248px] rounded-xl border-2 bg-white pr-2  text-right text-2xl font-semibold text-indigo-600"
            />
            <button className="h-14 w-[248px] rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600">
              כניסה
            </button>
          </div>
        </div>
   
      </section>
    </div>
  );
};

export default Form;
