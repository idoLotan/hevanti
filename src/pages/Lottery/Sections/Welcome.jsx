import gift from "../../../assets/images/LotteryImage/gift.png";
import credit from "../../../assets/images/LotteryImage/credit.png";
import iPhone from "../../../assets/images/LotteryImage/iphone.png";
import iPhone2 from "../../../assets/images/LotteryImage/iphone2.png";
import xbox from "../../../assets/images/LotteryImage/xbox.png";

const Welcome = ({ handleNextPage, setUserCode }) => {
  return (
    <div>
      <section className="relative">
      {/* <ArrowBtnLeft  /> */}
        <header className=" absolute -top-96  w-[100%] text-center  text-[64px] font-semibold text-orange-400 md:-top-32">
          ברוך הבא
        </header>
        <div className=" flex h-[600px] w-[1088px] rotate-90  justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:rotate-0">
          <div
            id="left-side"
            className=" pt-5 md:p-5 w-[42rem] md:ml-0 -rotate-90   rounded-2xl border border-indigo-600 bg-neutral-100 md:rotate-0"
          >
            <div className="flex  h-full w-full flex-col items-end justify-start  rounded-br-[46px] rounded-tl-[46px]   text-[14px] ">
              <div className="flex flex-row items-center pr-4 pt-10  ">
            

                <div className="mr-4 w-[393px] text-right"><span className="text-indigo-600 text-xl font-medium leading-normal">שעורי הכנה לשנת הלימודים הקרובה עם המורים של</span><span className="text-indigo-600 text-xl font-semibold leading-normal"> </span><span className="text-orange-400 text-2xl font-semibold leading-normal">הֵבַנְתִּי</span></div>
               
             
              
                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  1
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div className="90 mr-4  text-right " dir="rtl">
                  <span className="text-2xl font-medium text-orange-400">
                    30
                  </span>
                  <span className="text-xl font-medium text-indigo-600 ">
                    {" "}
                    שוברים של{" "}
                  </span>
                  <span className="text-2xl font-medium text-orange-400">
                    90%
                  </span>
                  <span className="text-xl font-medium text-indigo-600">
                    {" "}
                    הנחה לשיעור בודד
                  </span>
                </div>

                <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  2
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div className="200 mr-4  text-center flex justify-center items-center" dir="rtl">
                  <span className="text-2xl font-semibold text-orange-400 m-1">
                    5
                  </span>
                  
                  <span className="text-xl font-medium text-indigo-600">
                
                    שוברים ל "סופר פארם" בשווי 
                  </span>
                  <span className="text-2xl font-semibold text-orange-400 m-2">
                    200₪
                  </span>
             
                </div>

                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  3
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div className="  SonyPlaystation5 mr-4 text-center text-4xl font-semibold text-orange-400">
                  Sony Playstation 5
                </div>

                <div className=" mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  4
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div className="  IphoneSe mr-4 text-center text-4xl font-semibold text-orange-400">
                iPad 10.9
                </div>
                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  5
                </div>
              </div>
            </div>
          </div>

          <div
            id="right-side "
            className="  flex h-full  w-[50%] -rotate-90 flex-col items-center  justify-center md:rotate-0"
          >
            <button
              onClick={handleNextPage}
              className="mb-4 h-14 w-[248px] rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600"
            >
              כניסה עם קוד
            </button>
            <input
              onChange={(e) => setUserCode(e.target.value)}
              dir="rtl"
              placeholder="הקלד קוד"
              className=" mb-10 flex h-14 w-[248px] justify-center rounded-xl border-2 bg-white pr-2 text-center   text-lg font-semibold text-indigo-600"
            />
            <button
              onClick={handleNextPage}
              className="h-14 w-[248px] rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600"
            >
              כניסה
            </button>
            <div className=" absolute bottom-20 md:bottom-10 right-10  ">
              <span className="text-[20px] font-semibold text-orange-400">
                *
              </span>
              <span className="text-[14px] font-semibold text-neutral-100">
                סיכוי כפול לזכות בלוטו
              </span>
            </div>
          </div>
        </div>


      
        <img
          src={gift}
          alt=""
          className="absolute left-[12rem] top-[45rem] h-[280px]  md:bottom-[-4rem] md:left-[-10rem] md:top-[25rem]"
        />
        <img
          src={credit}
          alt=""
          className="absolute  bottom-[-5rem] right-[12rem] hidden md:block"
        />
        <img
          src={iPhone}
          alt=""
          className="absolute left-[-10rem] top-[0rem] hidden h-[352.28px] md:block"
        />
        <img
          src={xbox}
          alt=""
          className="absolute right-[12rem] bottom-[-23rem]  h-[418px] md:bottom-[-5rem] md:right-[-8rem]"
        />
          <img
          src={iPhone2}
          alt=""
          className="absolute md:hidden left-[14rem] top-20   h-[280px] md:bottom-[-5rem] md:right-[-8rem]"
        />
     
      </section>
    </div>
  );
};

export default Welcome;
