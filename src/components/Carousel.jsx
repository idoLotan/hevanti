// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules

import wp1 from "../assets/images/wp1.png";
import wp2 from "../assets/images/wp2.png";
import wp3 from "../assets/images/wp3.png";
import wp4 from "../assets/images/wp4.png";
import wp5 from "../assets/images/wp5.png";

const Carousel = () => {
  return (

 
    <div className="relative right-[114px]  md:right-[60px] top-10 z-10 rounded-bl-xl rounded-tr-xl border-2 border-[#FF7848] lg:block">
      <div className="m-2">
        <div className="h-[264px] w-[184px]">
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
         
           
           
            className="mySwiper z-10 rounded-bl-2xl  rounded-tr-2xl"
         
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
  );
};

export default Carousel;

  