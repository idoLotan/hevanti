import React, { useState } from "react";
import esc from "../../assets/images/esc.png";
import logo from "../../assets/images/Group.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHBar() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="w-[100%] min-w-[700px] pl-2">
      <div className="relative mx-auto ml-[110px] mr-20 flex h-[65px]  items-center justify-start border-0 border-[#555FD9]  border-opacity-50 md:justify-end md:border-b-2 2xl:ml-[235px]  2xl:mr-[150px] ">
        {isOpen && (
          <div className="fixed  right-0  top-0 z-50 flex h-[100vh] w-[100vw] flex-row items-start justify-between bg-[#2A264D] p-5 text-white">
            <img
              src={esc}
              className="p-3"
              onClick={handleHBar}
              role="button"
            ></img>
            <ul className="flex flex-col items-end font-medium">
          
              <li className="p-3" role="button" onClick={handleHBar}>
                <a
                  href="#subjects"
                  className="rounded-full  px-3 	 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  מקצועות
                </a>
              </li>



              <li className="p-3" role="button" onClick={handleHBar}>
                <a
                  href="#about"
                  className=" rounded-full px-3 py-2 text-lg   transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  אודותינו
                </a>
              </li>

              <li className="p-3" role="button" onClick={handleHBar}>
                <a
                  href="#teachers"
                  className="rounded-full px-3 py-2 text-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  המורים שלנו
                </a>
              </li>

              <li className="p-3" role="button" onClick={handleHBar}>
                <a
                  href="#questions"
                  className=" rounded-full px-3 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                  aria-current="page"
                >
                  איך זה עובד
                </a>
              </li>
              <li className="p-3" role="button" onClick={handleHBar}>
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          onClick={handleHBar}
          className="fixed left-4 z-40 block  sm:hidden"
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
        >
          <line
            x1="1.5"
            y1="-1.5"
            x2="30.5"
            y2="-1.5"
            transform="matrix(1 0.000147656 -6.04879e-05 1 0 3.99707)"
            stroke="#FF7848"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="1.5"
            y1="15.0011"
            x2="22.5"
            y2="15.0011"
            stroke="#FF7848"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="1.5"
            y1="27.5"
            x2="14.5"
            y2="27.5"
            stroke="#FF7848"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

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

        <img
          src={logo}
          className="absolute right-[-60px] mt-2 h-12 md:relative md:right-0 md:hidden"
        ></img>
      </div>
      <img
        src={logo}
        className="absolute top-0 m-4 hidden h-12  md:right-0  md:block "
      ></img>
    </nav>
  );
};

export default NavBar;
