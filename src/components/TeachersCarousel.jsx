// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper";
import joana from "../assets/images/joana.png";
import meir from "../assets/images/meir.png";
import ofir from "../assets/images/ofir.png";
import amit from "../assets/images/amit.png";
import sigal from "../assets/images/sigal.png";

const TeachersCarousel = () => {
  return (
    <div className="  z-10  flex w-max  justify-center md:hidden">
      <div className="m-2 ">
        <div className=" h-[300px] w-[345px] ">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper z-10  rounded-bl-2xl rounded-tr-2xl"
          >
            <SwiperSlide>
              <div className="flex ">
                <img src={joana} />
                <img src={meir} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <img src={ofir} />
                <img src={amit} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="w-[170px]">
                  <img className="" src={sigal} />
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
