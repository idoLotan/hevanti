import React from "react";
import Btn from "./Btn";

const NavBar = () => {
  return (
    <nav className="w-[100%] min-w-[700px] pl-2">
      <div className=" mx-auto flex  h-[65px]  items-center justify-end ">
        <div className="flex items-center justify-end  ">
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
      <div className="flex w-[100%] justify-center">
        <div class="ml-1 mr-1 h-[2px] w-[100%] bg-[#555FD9]"></div>
      </div>
    </nav>
  );
};

export default NavBar;
