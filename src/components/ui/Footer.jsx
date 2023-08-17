import React from "react";
import logo from "../../assets/images/Group.png";
import clock from "../../assets/images/clock.png";
import email from "../../assets/images/email-f.png";
import facebook from "../../assets/images/facebook-f.png";
import instagram from "../../assets/images/instagram-f.png";
import phone from "../../assets/images/phone-f.png";
import place from "../../assets/images/place.png";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className=" z-50 hidden  justify-between bg-[#2A264D] p-3 font-bold text-white md:flex md:flex-row ">
        <ul className="m-3 md:order-1 ">
          <div>
            <li>
              <a href="tel:+972522113937" className="cursor-pointer p-1">
                +972 52 211 39 37
              </a>
            </li>
            <li>
              <a href="mailto:ofer@shalrom.com" className="cursor-pointer p-1">
                ofer@shalrom.com
              </a>
            </li>
          </div>

          <li>
            <div className="p-1">הרב חיים ימיני 4 </div>
            <div className="p-1">קריית אונו</div>
          </li>
          <li>
            <div className="p-1">06:00-22:00</div>
          </li>
        </ul>

        <img src={logo} className="mt-4 h-12 md:order-3 " alt="logo" />

        <ul className="relative m-3 flex flex-col items-end md:order-2 md:ml-[160px] md:w-[50%] md:flex-row md:items-start md:justify-between ">
          <div className="">
            <li className=" text-right hover:underline md:m-2">
              <a href="#about" aria-current="page">
                אודותינו
              </a>
            </li>
            <li className=" text-right hover:underline md:m-2">
              <a href="#subjects" aria-current="page">
                מקצועות
              </a>
            </li>
          </div>
          <div className="">
            <li className=" text-right hover:underline md:m-2">
              <a href="#questions" className="mb-10 hover:underline">
                איך זה עובד
              </a>
            </li>
            <li className=" text-right hover:underline md:m-2">
              <a href="#contact" className=" mb-10 hover:underline">
                צור קשר
              </a>
            </li>
          </div>
          <div className="">
            <li className=" text-right hover:underline md:m-2">
              <a href="#teachers">המורים שלנו</a>
            </li>
            <li className=" text-right hover:underline md:m-2">
              <div
                onClick={() => {
                  navigate("/accessibility");
                }}
                className="mb-10 hover:underline"
              >
                הצהרת נגישות
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="z-50 flex flex-col items-center justify-center  bg-[#2A264D]  p-3 font-bold text-white md:hidden md:flex-row ">
        <img src={logo} className="mt-4 h-16  " alt="logo" />
        <div className="mb-4 text-center text-xs font-semibold leading-loose text-orange-400">
          שעורים פרטיים
        </div>
        <div className=" border-b border-t  border-b-[#555FD9] border-t-[#555FD9] p-5">
          <h3 className="mb-4 flex w-full justify-center">צור קשר</h3>
          <ul className="flex flex-col">
            <li className="flex items-center">
              <img src={phone} alt="" className="m-2" />
              <a
                href="tel:+972522113937"
                className="cursor-pointer p-1 text-orange-500"
              >
                +972 52 211 39 37
              </a>
            </li>
            <li className="flex items-center justify-center">
              <img src={email} alt="" className="m-2" />
              <a href="mailto:ofer@shalrom.com" className="cursor-pointer p-1">
                ofer@shalrom.com
              </a>
            </li>
            <li>
              <div className="flex items-center  p-1">
                <img src={place} alt="" className="m-2" />

                <div className="p-1">
                  <p>קריית אונו</p>
                  <p>הרב חיים ימיני 4</p>
                </div>
              </div>
            </li>
            <li className="flex  items-center">
              <img src={clock} alt="" className="m-2" />
              <div className="p-1">06:00-22:00</div>
            </li>
          </ul>
          <div className="mt-5 flex justify-around">
            
            <div className="relative cursor-pointer">
            <img src={instagram} alt="" className="z-0" />
            <a
              href="https://www.instagram.com/meveenorg/?igshid=MzRlODBiNWFlZA=="
              className="absolute left-0 top-0 z-10 h-10 w-10 "
            ></a>
            </div>
            <div className="relative cursor-pointer">
            <img src={facebook} alt="" className="z-0" />
            <a
              href="https://www.facebook.com/OferAvital100?mibextid=LQQJ4d"
              className="absolute left-0 top-0 z-10 h-10 w-10 "
            ></a>
            </div>
           
          </div>
        </div>

        <div className="flex w-full justify-between">
          <ul className="m-3 md:order-1 ">
            <div>
              <li className="m-4 text-left hover:underline">
                <a href="#questions" className="mb-10 hover:underline">
                  איך זה עובד
                </a>
              </li>
              <li className=" m-4 text-left hover:underline">
                <a href="#buget" className="mb-10 hover:underline">
                  תקציב
                </a>
              </li>
              <li className=" m-4 text-left hover:underline">
                <a href="#buget" className="mb-10 hover:underline">
                  שאלות נפוצות
                </a>
              </li>
            </div>
          </ul>

          <ul className="relative m-3 flex flex-col items-end md:ml-[160px]  md:w-[50%] md:flex-row md:items-start md:justify-between ">
            <div className="">
              <li className=" m-4 text-right hover:underline">
                <a href="#about" aria-current="page">
                  אודותינו
                </a>
              </li>
              <li className=" m-4 text-right hover:underline">
                <a href="#subjects" aria-current="page">
                  מקצועות
                </a>
              </li>
            </div>
            <div className="">
              {/* <li className=" md:m-4 text-right hover:underline">
            <a href="#questions" className="mb-10 hover:underline">
              איך זה עובד
            </a>
          </li>
          <li className=" md:m-2 text-right hover:underline">
            <a href="#contact" className=" mb-10 hover:underline">
              צור קשר
            </a>
          </li> */}
            </div>
            <div className="">
              <li className=" m-2 text-right hover:underline">
                <a href="#teachers">המורים שלנו</a>
              </li>
              <li className=" m-2 text-right hover:underline"></li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
