import React, { useState } from "react";
import Btn from "./Btn";
import hBar from "../assets/images/h-bar.png";
import esc from "../assets/images/esc.png";
import logo from "../assets/images/logo.png";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHBar() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="w-[100%] min-w-[700px] pl-2">
      <div className=" relative mx-auto  flex h-[65px] items-center justify-start  md:justify-end ">
        {isOpen && (
          <div className="absolute  right-0  top-0 z-50 flex h-[100vh]   w-[100vw] flex-row items-start justify-between bg-[#2A264D] p-5 text-white">
            <img src={esc} className="p-3" onClick={handleHBar}></img>
            <ul className="flex flex-col font-medium">
              <li className="p-3" onClick={handleHBar}>
                <a
                  href="#subjects"
                  className="rounded-full  px-3 	 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  מקצועות
                </a>
              </li>

              <li className="p-3" onClick={handleHBar}>
                <a
                  href="#about"
                  className=" rounded-full px-3 py-2 text-lg   transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  אודותינו
                </a>
              </li>

              <li className="p-3" onClick={handleHBar}>
                <a
                  href="#teachers"
                  className="rounded-full px-3 py-2 text-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  המורים שלנו
                </a>
              </li>

              <li className="p-3" onClick={handleHBar}>
                <a
                  href="#questions"
                  className=" rounded-full px-3 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  איך זה עובד
                </a>
              </li>
              <li className="p-3" onClick={handleHBar}>
                <a
                  href="#contact"
                  className=" rounded-full px-3 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  צור קשר
                </a>
              </li>
            </ul>
          </div>
        )}

        <img
          src={hBar}
          onClick={handleHBar}
          className="fixed left-3 z-0 block  sm:hidden"
        ></img>

        <div className=" hidden items-center justify-end md:block ">
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
        <img src={logo} alt="" className="absolute right-0 md:relative" />
      </div>

      <div className=" hidden w-[100%] justify-center md:block">
        <div class="ml-1 mr-1 h-[2px] w-[100%] bg-[#555FD9]"></div>
      </div>
    </nav>
  );
};

export default NavBar;
