import React from "react";
import logo from "../../assets/images/Group.png";

const Footer = () => {
  return (
    <footer className="flex   justify-between bg-[#2A264D] p-3 font-bold text-white md:flex-row">
      <ul className="m-3 md:order-1 ">
        <div>
          <li>
            <a href="tel:+972522113937" className="cursor-pointer p-1">
              +972 52 211 39 37
            </a>
          </li>
          <li>
            <a href="mailto:ofer@sharlom.com" className="cursor-pointer p-1">
              ofer@sharlom.com
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

      <ul className="relative m-3 flex flex-col items-end md:ml-[160px] md:order-2 md:w-[50%] md:flex-row md:items-start md:justify-between ">
        <div className="">
          <li className=" md:m-2 text-right hover:underline">
            <a href="#about" aria-current="page">
              אודותינו
            </a>
          </li>
          <li className=" md:m-2 text-right hover:underline">
            <a href="#subjects" aria-current="page">
              מקצועות
            </a>
          </li>
        </div>
        <div className="">
          <li className=" md:m-2 text-right hover:underline">
            <a href="#questions" className="mb-10 hover:underline">
              איך זה עובד
            </a>
          </li>
          <li className=" md:m-2 text-right hover:underline">
            <a href="#contact" className=" mb-10 hover:underline">
              צור קשר
            </a>
          </li>
        </div>
        <div className="">
          <li className=" md:m-2 text-right hover:underline">
            <a href="#teachers">המורים שלנו</a>
          </li>
          <li className=" md:m-2 text-right hover:underline">
            <a href="/accessibility" className="mb-10 hover:underline">
              הצהרת נגישות
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
