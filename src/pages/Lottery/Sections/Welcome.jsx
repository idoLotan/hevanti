import gift from "../../../assets/images/LotteryImage/gift.png";
import credit from "../../../assets/images/LotteryImage/credit.png";
import iPhone from "../../../assets/images/LotteryImage/iphone.png";
import iPhone2 from "../../../assets/images/LotteryImage/iphone2.png";
import xbox from "../../../assets/images/LotteryImage/xbox.png";
import x from "../../../assets/images/LotteryImage/x.png";
import v from "../../../assets/images/LotteryImage/v.png";
import { useState } from "react";
import { codes, codesGeneral } from "../../../data/codes";


const Welcome = ({ handleNextPage, setUserCode, userCode, setIsScout }) => {
  const [enterWithCode, setEnterWithCode] = useState(false);
  const [codeValid, setCodeValid] = useState(true);
  const [userClicked, setUserClicked] = useState(false);



  const validateCode = (code) => {
    if (!enterWithCode) {
      handleNextPage();
      return;
    }

    const validate = codesGeneral.includes(code);
    console.log(validate);
    setCodeValid(validate);
    setUserClicked(true);

    if (validate) {
      setTimeout(() => {
        handleNextPage();
      }, 2000);
    }
  };

  const handleEnterWithCode = () => {
    setEnterWithCode(true);
  };

  return (
    <div>
      <section className="relative">
        {/* <ArrowBtnLeft  /> */}
        <header className=" absolute -top-96  w-[100%] text-center  text-[64px] font-semibold text-orange-400 md:-top-32">
        ברוכים הבאים
        </header>

        <div className=" flex h-[600px] w-[1088px] rotate-90  justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:rotate-0">
          <div
            id="left-side"
            className=" md:w-[50%] w-[42rem]  -rotate-90 rounded-2xl border border-indigo-600   bg-neutral-100 pt-5 md:ml-0 md:rotate-0 md:p-5"
          >
            <div className="flex  h-full w-full flex-col items-end justify-start  rounded-br-[46px] rounded-tl-[46px]   text-[14px] ">
              <div className="flex flex-row items-center pr-4 pt-10  ">
                <div className="mr-4 w-[393px] text-right">
                  <span className="text-xl font-medium leading-normal text-indigo-600">
                    שעורי הכנה לשנת הלימודים הקרובה עם המורים של
                  </span>
                  <span className="text-xl font-semibold leading-normal text-indigo-600">
                  </span>
                  <span className="text-2xl font-semibold leading-normal text-orange-400">
                    הֵבַנְתִּי
                  </span>
                </div>

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
                    שוברים של
                  </span>
                  <span className="text-2xl font-medium text-orange-400">
                    90%
                  </span>
                  <span className="text-xl font-medium text-indigo-600">
                    הנחה לשיעור בודד
                  </span>
                </div>

                <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  2
                </div>
              </div>
              <div className=" flex flex-row items-center pr-4 pt-10">
                <div
                  className="200 mr-4  flex items-center justify-center text-center"
                  dir="rtl"
                >
                  <span className="m-1 text-2xl font-semibold text-orange-400">
                    5
                  </span>

                  <span className="text-xl font-medium text-indigo-600">
                    שוברים ל "סופר פארם" בשווי
                  </span>
                  <span className="m-2 text-2xl font-semibold text-orange-400">
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
            {enterWithCode ? (
              <div className=" relative mb-5 flex h-14 w-[248px] justify-center rounded-xl border-2 bg-white pr-2 text-center text-lg font-semibold   text-[#2A264D] text-opacity-80 focus:outline-none focus:ring-transparent">
                <input
                  onChange={(e) => setUserCode(e.target.value)}
                  dir="rtl"
                  placeholder={`${codeValid ? "הקלד קוד" : "הקלד קוד נכון"}`}
                  className="text-center focus:outline-none focus:ring-transparent"
                />
                {userClicked && (
                  <div>
                    {codeValid ? (
                      <img
                        src={v}
                        className={` absolute right-1 top-4 h-5 `}
                        alt=""
                      />
                    ) : (
                      <img
                        src={x}
                        className={` absolute right-1 top-4 h-5`}
                        alt=""
                      />
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleEnterWithCode}
                className="mb-5 h-14 w-[248px] cursor-pointer rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600"
              >
                כניסה עם קוד
              </button>
            )}

            <button
              onClick={() => validateCode(userCode)}
              className="h-14 w-[248px] cursor-pointer rounded-xl border-2 bg-white p-2 text-center text-2xl font-semibold text-indigo-600"
            >
              כניסה
            </button>
            <div className=" absolute bottom-20 right-10 md:bottom-10  ">
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
          className="absolute bottom-[-23rem] right-[12rem]  h-[418px] md:bottom-[-5rem] md:right-[-8rem]"
        />
        <img
          src={iPhone2}
          alt=""
          className="absolute left-[14rem] top-20 h-[280px]   md:bottom-[-5rem] md:right-[-8rem] md:hidden"
        />
      </section>
    </div>
  );
};

export default Welcome;
