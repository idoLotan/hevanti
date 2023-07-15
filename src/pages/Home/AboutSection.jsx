import React from "react";

import oferMobile from "../../assets/images/ofer-mobile.png";
import ofer from "../../assets/images/ofer.png";
import aboutTextContainer from "../../assets/images/about-text-container.png";
import TeachersCarousel from "../../components/ui/TeachersCarousel";

const AboutSection = () => {
  return (
    <div>
      <section className="about-bg relative" id="about">
        <div className="  relative  flex  flex-col   items-center  justify-around  p-1 md:flex-row">
          <div className="Rectangle100 relative  order-1 mb-4   flex  w-[90%] flex-col items-end  rounded-br-[46px] rounded-tl-[46px] bg-[#555FD9] bg-opacity-20 p-2   md:bottom-28  md:w-[760px] md:min-w-[660px]   2xl:bottom-28">
            <div className="flex flex-row items-center p-2  ">
              <div dir="rtl" className=" mr-2">
                בהבנתי המורה והשיעור מותאמים לתלמיד לפי הצרכים והיכולות של
                התלמיד.
              </div>
              <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                1
              </div>
            </div>
            <div className=" flex flex-row items-center p-2">
              <div dir="rtl" className=" mr-2">
                לכול מקצוע ישנן 4 רמות הוראה מותאמות עלות.
              </div>

              <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                2
              </div>
            </div>
            <div className=" flex flex-row items-center p-2">
              <div dir="rtl" className=" mr-2">
                בכול רמה ניתן ללמוד בבית המורה/התלמיד או זום.
              </div>

              <div className="  flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                3
              </div>
            </div>
            <div className=" flex flex-row items-center p-2">
              <div dir="rtl" className=" mr-2">
                ישנה אפשרות להרשם לשעורים משותפים בזום בעלות מופחתת.
              </div>

              <div className="mr-12 flex min-h-[50px] min-w-[50px] items-center justify-center   rounded-full border border-indigo-600 text-[32px] font-semibold text-indigo-600">
                4
              </div>
            </div>
          </div>
          <div className="relative order-2 flex flex-col  items-end  md:order-1 ">
            <div className=" order-2 flex flex-col  items-end justify-center p-5 md:h-auto">
              <img
                alt="ofer"
                className="mr-0 hidden min-w-[270px] rounded-xl md:block  md:h-[450px] md:w-[300px] 2xl:h-[590px] 2xl:w-[386px]"
                src={ofer}
              />
              <img
                alt="ofer"
                className="mr-0 w-[270px] rounded-xl md:hidden  md:h-[450px] md:w-[300px] 2xl:h-[590px] 2xl:w-[386px]"
                src={oferMobile}
              />

              <p>עופר אביטל, הבעלים</p>
            </div>

            <p
              dir="rtl"
              className="oreder-1 about-text-window absolute bottom-3  hidden   h-[185px] w-[615px] p-4 text-right text-[20px] font-medium  leading-loose text-neutral-100   md:right-[340px] md:order-2 md:block md:h-[185px] md:w-[615px] 2xl:h-[185px] 2xl:w-[615px]"
            >
              לפני 28 שנים, בתור סטודנט למדתי מתמטיקה. אחרי סיום התואר וכשעברו
              מספר שנים, פגשתי בסניף מקדונלד בקניון קרית אונו תלמיד לשעבר שמאוד
              שמח לראות אותי ואמר "אתה שינית את חיי. מאז ועד היום מיישם את שיטות
              הלימוד שלי בהבנתי".
            </p>

            <div className="relative right-10 z-10   mb-2 flex h-[120px]  w-[100vw] justify-center md:hidden">
              <img
                src={aboutTextContainer}
                className=" h-22 absolute top-0  z-0 h-[200px] w-[314px]"
              />
              <div class="absolute inset-0 top-20 flex items-center justify-center  bg-opacity-50">
                <h2 class=" h-[200px] w-[314px] p-2 text-white" dir="rtl">
                  לפני 28 שנים, בתור סטודנט למדתי מתמטיקה. אחרי סיום התואר
                  וכשעברו מספר שנים, פגשתי בסניף מקדונלד בקניון קרית אונו תלמיד
                  לשעבר שמאוד שמח לראות אותי ואמר "אתה שינית את חיי. מאז ועד
                  היום מיישם את שיטות הלימוד שלי בהבנתי".
                </h2>
              </div>
            </div>
          </div>
        </div>

     
      </section>
    </div>
  );
};

export default AboutSection;
