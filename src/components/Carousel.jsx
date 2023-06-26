// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper";
import wp1 from "../assets/images/wp1.png";
import wp2 from "../assets/images/wp2.png";
import wp3 from "../assets/images/wp3.png";
import wp4 from "../assets/images/wp4.png";
import wp5 from "../assets/images/wp5.png";

const Carousel = () => {
  return (
    <div className="h-[264px] w-[184px] rounded ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={wp1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wp2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wp3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wp4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wp5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
