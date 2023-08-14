// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/index.css";
import joana from "../../assets/images/joana.png";
import meir from "../../assets/images/meir.png";
import ofir from "../../assets/images/ofir.png";
import amit from "../../assets/images/amit.png";
import sigal from "../../assets/images/sigal.png";
import { Autoplay, Pagination, Navigation } from "swiper";

const TeachersCarousel = () => {
  return (
    <div className="  z-10  flex w-max  justify-center lg:hidden">
      <div className="m-2 ">
        <div className=" h-[330px] w-[100vw] ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper z-10   rounded-bl-2xl rounded-tr-2xl "
          >
            <SwiperSlide>
              <div className="flex justify-center  section-1 h-full">
                <div className="m-5 flex w-[150px] h-[150px] flex-col ">
                  <img src={joana} className="" alt="תמונה של המורה גואנה" />
                  <h2 className="text-[#555FD9] text-[20px] leading-8  font-semibold">ג'יואנא</h2>
                  <h3 className="font-[#2A264D] text-[14px] ">ג'יואנא, מנהלת תחום מתמטיקה 8 שנות ניסיון</h3>
                </div>
                <div className="m-5 flex w-[150px] h-[150px] flex-col">
                  <img src={meir} className="" alt="תמונה של המורה גואנה" />
                  <h2 className="text-[#555FD9] text-[20px] leading-8  font-semibold">מאיר</h2>
                  <h3  className="font-[#2A264D] text-[14px] ">מאיר, מנהל תחום פיזיקה 18 שנה</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="flex justify-center section-1 h-full">
                <div className="m-5 flex w-[150px] h-[150px] flex-col ">
                  <img src={ofir} className="" alt="תמונה של המורה אופיר" />
                  <h2 className="text-[#555FD9] text-[20px] leading-8  font-semibold">אופיר</h2>
                  <h3 className="font-[#2A264D] text-[14px] ">אופיר מלמדת לשון, פיזיקה, אנגלית, סטטיסטיקה,פסיכולוגיה, אזרחות 5 שנות ניסיון</h3>
                </div>
                <div className="m-5 flex w-[150px] h-[150px] flex-col">
                  <img src={amit} className="" alt="תמונה של המורה עמית" />
                  <h2 className="text-[#555FD9] text-[20px] leading-8  font-semibold">עמית</h2>
                  <h3  className="font-[#2A264D] text-[14px] ">מנהל תחום מדעי המחשב, 9 שנות ניסיון</h3>
                </div>
               
              </div>
             
            </SwiperSlide>
            <SwiperSlide>
             
              <div className="flex justify-center section-1 h-full">
                <div className="m-5 flex w-[150px] h-[150px] flex-col ">
                  <img src={sigal} className="" alt="תמונה של המורה סיגל" />
                  <h2 className="text-[#555FD9] text-[20px] leading-8  font-semibold">סיגל</h2>
                  <h3 className="font-[#2A264D] text-[14px] ">סיגל, מנהלת תחום אנגלית, 6 שנות נסיון</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeachersCarousel;
