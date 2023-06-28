import React from "react";
import Btn from "./Btn";
import hBar from "../assets/images/h-bar.png";
const NavBar = () => {
  return (
    <nav className="w-[100%] min-w-[700px] pl-2">
      <div className=" mx-auto flex  h-[65px]  items-center justify-start  md:justify-end ">
       
        <img src={hBar} className="p-3 block  md:hidden fixed left-0"></img>
    
       
        <div className=" items-center justify-end hidden md:block ">
          <ul className="flex flex-row font-medium">
            <li>
              <a
                href="#subjects"
                className="rounded-full px-3	 py-2 text-lg text-[#2A264D] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                aria-current="page"
              >
                מקצועות
              </a>
            </li>

            <li>
              <a
                href="#about"
                className=" rounded-full px-3 py-2 text-lg text-[#2A264D]  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                aria-current="page"
              >
                אודותינו
              </a>
            </li>

            <li>
              <a
                href="#teachers"
                className="rounded-full px-3 py-2 text-lg text-[#2A264D] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                aria-current="page"
              >
                המורים שלנו
              </a>
            </li>

            <li>
              <a
                href="#questions"
                className=" rounded-full px-3 py-2 text-lg text-[#2A264D] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                aria-current="page"
              >
                איך זה עובד
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" rounded-full px-3 py-2 text-lg text-[#2A264D] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                aria-current="page"
              >
                צור קשר
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[100%] justify-center hidden md:block">
        <div class="ml-1 mr-1 h-[2px] w-[100%] bg-[#555FD9]"></div>
      </div>
    </nav>
  );
};

export default NavBar;
