import React from "react";
import gift from "../../assets/images/LotteryImage/gift.png";
import credit from "../../assets/images/LotteryImage/credit.png";
import iPhone from "../../assets/images/LotteryImage/iphone.png";
import xbox from "../../assets/images/LotteryImage/xbox.png";

const Welcome = () => {
  return (
    <div>
      <section className="relative p-10 ">
        <header className="  text-center text-[64px] font-semibold text-orange-400">
          ברוך הבא
        </header>
        <div className=" flex h-[600px] w-[484px] justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]">
          <div
            id="left-side"
            className="  h-full   w-[50%] rounded-2xl border border-indigo-600 bg-neutral-100"
          >
            <div className="flex h-full w-full flex-col items-end justify-start  rounded-br-[46px] rounded-tl-[46px] p-10    text-[14px] ">
              <div className="flex flex-row items-center pr-4 pt-10  ">
                <div className=" mr-4 w-[393px] text-right text-xl font-medium leading-normal text-indigo-600">
                  שעורי ההכנה לשנת הלימודים הקרובה, חווית אאאהה מובטחת עם המורים
                  של הֵבַנְתִּי
                </div>
                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  1
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div className="90 mr-4  text-right">
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
                <div className="200 mr-4  text-center">
                  <span className="text-2xl font-semibold text-orange-400">
                    5
                  </span>
                  <span className="text-xl font-medium text-indigo-600">
                    {" "}
                    שוברים ל "סופר פארם" בשווי "
                  </span>
                  <span className="text-2xl font-semibold text-orange-400">
                    200₪
                  </span>
                  <span className="text-xl font-medium text-indigo-600">"</span>
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
                  iPhone SE
                </div>
                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  5
                </div>
              </div>
            </div>
          </div>

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
        <img
          src={gift}
          alt=""
          className="absolute  bottom-[-4rem] left-[-10rem] h-[280px]"
        />
        <img
          src={credit}
          alt=""
          className="absolute  bottom-[-5rem] right-[12rem]"
        />
        <img
          src={iPhone}
          alt=""
          className="absolute left-[-10rem] top-[0rem] h-[352.28px]"
        />
        <img
          src={xbox}
          alt=""
          className="absolute  bottom-[-5rem] right-[-8rem] h-[418px]"
        />
      </section>
    </div>
  );
};

export default Welcome;
