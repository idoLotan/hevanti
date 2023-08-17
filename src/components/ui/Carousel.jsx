// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "assets/images/arrow.png";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../assets/index.css";

// import required modules

import wp1 from "../../assets/images/wp1.png";
import wp2 from "../../assets/images/wp2.png";
import wp3 from "../../assets/images/wp3.png";
import wp4 from "../../assets/images/wp4.png";
import wp5 from "../../assets/images/wp5.png";


const Carousel = () => {
  return (
    <div className="flex items-center">
      {/* relative right-[114px]  md:right-[50px] 2xl:bottom-[100px]  */}
      <div className="z-10 ml-[-60px]  relative top-20 overflow-hidden rounded-bl-[56px] rounded-tr-[56px] border-2 border-[#FF7848] border-opacity-50 md:ml-[-40px] lg:block">
        <div className="m-[20px]">
          <div className="h-[264px]  w-[184px] 2xl:h-[324px] 2xl:w-[233px]">
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
              className="mySwiper z-10  rounded-bl-2xl  rounded-tr-2xl"
            >
              <SwiperSlide>
                <img src={wp1} className=" " alt="תכתובת צ'אט בוואצפ" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={wp2} alt="תכתובת צ'אט בוואצפ" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={wp3} alt="תכתובת צ'אט בוואצפ" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={wp4} alt="תכתובת צ'אט בוואצפ" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={wp5} alt="תכתובת צ'אט בוואצפ" />
              </SwiperSlide>   
            </Swiper>
          </div>
        </div>
      </div>
      <img src={arrow} className="w-28 hidden md:block -rotate-45 m-10 relative top-40" alt="" />
    </div>
  );
};

export default Carousel;
