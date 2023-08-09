import React, { useEffect } from "react";
import gift from "../../../assets/images/LotteryImage/gift.png";
import completed1min from "../../../assets/images/LotteryImage/completed1-min.png";
import completed2min from "../../../assets/images/LotteryImage/completed2-min.png";
import completed3min from "../../../assets/images/LotteryImage/completed3-min.png";
import { useNavigate } from "react-router-dom";

const SubmissionCompleted = () => {
  const navigate = useNavigate()

// useEffect(()=> {
//   setTimeout(()=>{
//     navigate("/home")
//   }, 2000)

// }, [])


  return (
    <section className="relative   ">
   
      <div className="rotate-90 md:rotate-0 flex h-[600px] md:flex-col items-center justify-center rounded-2xl border border-indigo-600 bg-indigo-600 w-[1088px]">
        <div
          dir="rtl"
          className="-rotate-90 md:rotate-0   text-center text-[80px] font-semibold text-[#FF7848] "
        >
          <div>  בהצלחה!</div>
          <div
          dir="rtl"
          className="mt-[-20px] md:rotate-0 text-center text-[64px] font-semibold text-white"
        >
          תודה!
        </div>
   
        </div>
        <div className="-rotate-90 md:rotate-0  absolute  right-40 md:right-[25rem] md:bottom-14  text-center text-white text-xl font-semibold">הודעת וואצפ/ איימייל תשלח</div>
        <div className="-rotate-90 md:rotate-0  absolute  right-40 md:right-[22rem] md:bottom-4  text-center text-white text-xl font-semibold">תאריך הגרלה 28.07.2023 + 15.08.2023</div>
      </div>
     
      <img
        src={gift}
        alt=""
        className="absolute bottom-[-14rem] left-[10rem] md:bottom-[-4rem] md:left-[-10rem] h-[280px]"
      />

      {/* <img
        src={completed1min}
        alt=""
        className="absolute  h-[280px]"
      /> */}

      <img
        src={completed2min}
        alt=""
        className="absolute bottom-[30rem] right-[10rem]  md:right-[0rem] h-[280px]"
      />

      
<img
        src={completed2min}
        alt=""
        className="absolute bottom-[0rem] md:right-[14rem] rotate-45  h-[280px]"
      />

      <img
        src={completed3min}
        alt=""
        className="absolute  left-[10rem] bottom-[30rem] md:left-[-5rem] h-[280px]"
      />
    </section>
  );
};

export default SubmissionCompleted;


