import React from "react";
import gift from "../../assets/images/LotteryImage/gift.png";
import completed1min from "../../assets/images/LotteryImage/completed1-min.png";
import completed2min from "../../assets/images/LotteryImage/completed2-min.png";
import completed3min from "../../assets/images/LotteryImage/completed3-min.png";

const SubmissionCompleted = () => {
  return (
    <section className="relative p-10 ">
   
      <div className=" flex h-[600px] w-[484px] flex-col justify-center rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]">
        <div
          dir="rtl"
          className=" h-20 w-[1188px] text-center text-[80px] font-semibold text-neutral-100 "
        >
          בהצלחה!
        </div>
        <div
          dir="rtl"
          className=" w-[1188px] p-10 text-center text-[64px] font-semibold text-white"
        >
          תודה!
        </div>
        <div className=" text-center text-white text-xl font-semibold">תאריך הגרלה 28.07.2023 - 15.08.2023</div>
      </div>
     
      <img
        src={gift}
        alt=""
        className="absolute  bottom-[-4rem] left-[-10rem] h-[280px]"
      />

      {/* <img
        src={completed1min}
        alt=""
        className="absolute  h-[280px]"
      /> */}

      <img
        src={completed2min}
        alt=""
        className="absolute bottom-[30rem] right-[0rem]  h-[280px]"
      />

      
<img
        src={completed2min}
        alt=""
        className="absolute bottom-[0rem] right-[14rem] rotate-45  h-[280px]"
      />

      <img
        src={completed3min}
        alt=""
        className="absolute  bottom-[30rem] left-[-5rem] h-[280px]"
      />
    </section>
  );
};

export default SubmissionCompleted;


// import React from "react";
// import gift from "../../assets/images/LotteryImage/gift.png";
// import completed1min from "../../assets/images/LotteryImage/completed1-min.png";
// import completed2min from "../../assets/images/LotteryImage/completed2-min.png";
// import completed3min from "../../assets/images/LotteryImage/completed3-min.png";

// const SubmissionCompleted = () => {
//   return (
//     <section className="relative p-10">
//       <div className="flex flex-col items-center justify-center rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px] mx-auto">
//         <div dir="rtl" className="h-20 w-[80%] text-center text-[6rem] font-semibold text-neutral-100">
//           בהצלחה!
//         </div>
//         <div dir="rtl" className="w-[80%] p-10 text-center text-[4rem] font-semibold text-white">
//           תודה!
//         </div>
//         <div className="text-center text-white text-xl font-semibold">תאריך הגרלה 28.07.2023 - 15.08.2023</div>
//       </div>

//       <img src={gift} alt="" className="absolute bottom-[-4rem] left-[-10rem] h-[280px]" />

//       <img src={completed1min} alt="" className="hidden md:block absolute top-[20rem] left-[3rem] h-[280px]" />

//       <img src={completed2min} alt="" className="absolute bottom-[30rem] right-0 h-[280px]" />

//       <img src={completed2min} alt="" className="md:hidden absolute bottom-[0rem] right-[14rem] rotate-45 h-[280px]" />

//       <img src={completed3min} alt="" className="absolute bottom-[30rem] left-[-5rem] h-[280px]" />
//     </section>
//   );
// };

// export default SubmissionCompleted;

