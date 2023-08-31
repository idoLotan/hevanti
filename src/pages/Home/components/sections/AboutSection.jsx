import React, { useEffect } from "react";
import TeachersCarousel from "components/ui/TeachersCarousel";
import oferMobile from "assets/images/ofer-mobile.png";
import arrow from "assets/images/arrow.png";
import lines from "assets/images/lines.png";
import star from "assets/images/star.png";
import message from "assets/images/message.png";
import ofer from "assets/images/ofer.png";
import aboutTextContainer from "assets/images/about-text-container.png";
import aboutTextWindow from "assets/images/about-text-window.png";
import { useInView } from "react-intersection-observer";
// import TeachersCarousel from "../../../../components/ui/TeachersCarousel";

const AboutSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div>
      <section
        ref={ref}
        className={` about-bg  relative md:h-[38rem] 2xl:h-[48rem]`}
        id="about"
      >
        <div
          className={`  relative  flex  flex-col   items-center  justify-around  p-6 md:flex-row`}
        >
          <div className="md:scale-90 2xl:scale-100">
            <div
              className={`${
                inView ? "block" : "md:hidden"
              } relative order-1  mb-4 flex w-[90%] animate-fade-right   flex-col  items-end rounded-br-[46px] rounded-tl-[46px]  bg-[#555FD9] bg-opacity-20 p-2 text-[14px] md:bottom-28    md:h-[280px]   md:w-[560px] md:text-[16px] 2xl:bottom-28   2xl:min-w-[660px]`}
            >
              <img
                className="absolute  left-[-3rem] top-[-2rem] hidden w-12 md:block"
                src={lines}
              />
              <img
                className="absolute left-[40rem] hidden  w-8 md:block 2xl:left-[50rem]"
                src={message}
              />
              <img
                className="absolute  bottom-[-10rem] left-0 w-7 hidden md:block"
                src={star}
              />

              <div className="flex flex-row items-center md:p-2  ">
                <div dir="rtl" className=" mr-2">
                  בהבנתי המורה והשיעור מותאמים לתלמיד לפי הצרכים והיכולות של
                  התלמיד.
                </div>
                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  1
                </div>
              </div>
              <div className=" flex flex-row items-center md:p-2">
                <div dir="rtl" className=" mr-2">
                  לכול מקצוע ישנן 4 רמות הוראה מותאמות עלות.
                </div>

                <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  2
                </div>
              </div>
              <div className=" flex flex-row items-center md:p-2">
                <div dir="rtl" className=" mr-2">
                  השעורים מתקיימים בזום\בבית התלמיד\בבית המורה.
                </div>

                <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  3
                </div>
              </div>
              <div className=" flex flex-row items-center md:p-2">
                <div dir="rtl" className=" mr-2">
                  ישנה אפשרות להרשם לשעורים משותפים בזום בעלות מופחתת.
                </div>

                <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                  4
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-2 flex flex-col  items-end  md:order-1 ">
            <div className=" order-2 flex flex-col  items-end justify-center p-5 md:h-auto">
              <img
                alt="ofer"
                className={`${
                  inView ? "block" : "md:hidden"
                } mr-0 hidden min-w-[270px] animate-fade-left rounded-xl md:block  md:h-[450px] md:w-[300px] 2xl:h-[590px] 2xl:w-[386px]`}
                src={ofer}
              />
              <img
                alt="ofer"
                className=" mr-0 w-[270px] rounded-xl md:hidden  md:h-[450px] md:w-[300px] 2xl:h-[590px] 2xl:w-[386px]"
                src={oferMobile}
              />

              <p>עופר אביטל, הבעלים של הבנתי</p>
            </div>

            <div
              className={`${
                inView ? "block" : "md:hidden"
              } oreder-1 absolute bottom-3  hidden  h-[185px]    w-[615px] animate-fade-left p-4 text-right  text-[20px] font-medium   leading-loose text-neutral-100 md:right-[240px] md:order-2 md:block  md:w-[545px] 2xl:right-[340px] 2xl:h-[185px] 2xl:w-[615px]`}
            >
              <img
                alt="ofer"
                className="absolute left-[-10rem] top-[0rem] w-24  2xl:top-[-5rem]"
                src={arrow}
              />

              <p
                dir="rtl"
                className="absolute right-5 p-5 md:text-[16px] 2xl:text-[18px]"
              >
                לפני 28 שנים, בתור סטודנט למדתי מתמטיקה. אחרי סיום התואר וכשעברו
                מספר שנים, פגשתי בסניף מקדונלד בקניון קרית אונו תלמיד לשעבר
                שמאוד שמח לראות אותי ואמר "אתה שינית את חיי. מאז ועד היום מיישם
                את שיטות הלימוד שלי בהבנתי".
              </p>
              <img src={aboutTextWindow} alt="about Text Window" className="" />
            </div>

            <div className="relative right-10 z-10   mb-2 flex h-[120px]  w-[100vw] justify-center md:hidden">
              <img
                src={aboutTextContainer}
                className=" h-22 absolute top-0  z-0 h-[200px] w-[314px]"
              />
              <div class="absolute inset-0 top-20 flex items-center justify-center  bg-opacity-50">
                <p class=" h-[200px] w-[314px] p-2 text-white" dir="rtl">
                  לפני 28 שנים, בתור סטודנט למדתי מתמטיקה. אחרי סיום התואר
                  וכשעברו מספר שנים, פגשתי בסניף מקדונלד בקניון קרית אונו תלמיד
                  לשעבר שמאוד שמח לראות אותי ואמר "אתה שינית את חיי. מאז ועד
                  היום מיישם את שיטות הלימוד שלי בהבנתי".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
