

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

<div className="flex items-center   ">

<div className="overflow-hidden relative right-[114px]  md:right-[50px] 2xl:bottom-[100px]  z-10 rounded-bl-[56px]  border-opacity-50 rounded-tr-[56px] border-2 border-[#FF7848] lg:block">
      <div className="m-[20px]">
        <div className="2xl:h-[324px]  h-[264px] 2xl:w-[233px] w-[184px]">
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
<svg xmlns="http://www.w3.org/2000/svg"  className="hidden md:block"  width="160" height="61" fill="none"><path d="m47.484 59.13-.099 1.497-.023-.002-.023-.002.145-1.493zM83 6.5l-.904 1.197-.037-.028-.035-.03L83 6.501zM64.68 25.396l-.989 1.129-.04-.036-.038-.038 1.067-1.055zM159.5 9.501l-6.477 16.063-10.673-13.64L159.5 9.5zM47.583 57.633c17.43 1.151 32.041-7.047 39.252-17.685 3.6-5.313 5.32-11.174 4.718-16.759-.597-5.555-3.505-10.993-9.457-15.492l1.808-2.393c6.548 4.949 9.937 11.109 10.632 17.564.692 6.425-1.301 12.984-5.218 18.763-7.825 11.545-23.471 20.215-41.933 18.996l.198-2.994zM82.023 7.64C75.52 2.064 67.45 2.541 63.089 6.09c-2.151 1.749-3.426 4.245-3.27 7.25.157 3.043 1.795 6.82 5.929 11.002l-2.134 2.109c-4.464-4.516-6.584-8.95-6.792-12.956-.209-4.043 1.546-7.433 4.374-9.733 5.597-4.551 15.286-4.824 22.781 1.6L82.024 7.64zM65.67 24.267c19.887 17.427 50.927 14.69 82.329-7.67l1.74 2.445c-31.891 22.708-64.618 26.26-86.047 7.482l1.978-2.257zm-18.33 36.356C37.207 59.643 18.34 59.065.621 49.07l1.474-2.613c17.045 9.616 35.177 10.179 45.533 11.181l-.288 2.986z" fill="#FF7848" fill-opacity=".5"/></svg>

</div>
   
  );
};

export default Carousel;









// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Autoplay, Pagination, Navigation } from "swiper";


// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "../index.css";

// // import required modules

// import wp1 from "../assets/images/wp1.png";
// import wp2 from "../assets/images/wp2.png";
// import wp3 from "../assets/images/wp3.png";
// import wp4 from "../assets/images/wp4.png";
// import wp5 from "../assets/images/wp5.png";

// const Carousel = () => {
//   return (

   
//     <div className="relative right-[114px]  md:right-[50px] 2xl:bottom-[100px]  z-10 rounded-bl-[56px]  border-opacity-50 rounded-tr-[56px] border-2 border-[#FF7848] lg:block">
//       <div className="m-[24px]">
//         <div className=" md:w-[223px]  w-223px">
//           <Swiper 
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
         
           
           
//             className="mySwiper z-10 rounded-bl-2xl  rounded-tr-2xl"
         
//           >
//             <SwiperSlide>
//               <img src={wp1} className=" " alt="תכתובת צ'אט בוואצפ" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={wp2} alt="תכתובת צ'אט בוואצפ" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={wp3} alt="תכתובת צ'אט בוואצפ" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={wp4} alt="תכתובת צ'אט בוואצפ" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src={wp5} alt="תכתובת צ'אט בוואצפ" />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

  