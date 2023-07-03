// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules

import joana from "../assets/images/joana.png";
import meir from "../assets/images/meir.png";
import ofir from "../assets/images/ofir.png";
import amit from "../assets/images/amit.png";
import sigal from "../assets/images/sigal.png";
import { Autoplay, Pagination, Navigation } from "swiper";
 

const TeachersCarousel = () => {

  return (
    <div className="  z-10  flex w-max  justify-center md:hidden">
      <div className="m-2 ">
        <div className=" h-[300px] w-[345px] ">
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
           
           
            className="mySwiper z-10  rounded-bl-2xl rounded-tr-2xl"
          >
            <SwiperSlide>
              <div className="flex ">
                <img src={joana} alt="תמונה של המורה גואנה"   />
                <img src={meir} alt="תמונה של המורה מאיר" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <img src={ofir}alt="תמונה של המורה אופיר" />
                <img src={amit}alt="תמונה של המורה עמית" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="w-[170px]">
                  <img className="" src={sigal} alt="תמונה של המורה סיגל" />
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
