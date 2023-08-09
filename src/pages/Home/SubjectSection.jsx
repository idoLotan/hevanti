import React from "react";
import { handleKeyPress } from "../../helper";
import tounge from "../../assets/images/tounge.png";
import physics from "../../assets/images/physics.png";
import psychometric from "../../assets/images/psychometric.png";
import computer from "../../assets/images/computer.png";
import chemistry from "../../assets/images/chemistry.png";
import abc from "../../assets/images/abc.png";
import math from "../../assets/images/math.png";

const SubjectSection = ({setSubjects}) => {
  const handleSubjectChange = (subject) => {
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [subject]: !prevSubjects[subject],
    }));
  };


  const scrollToSection = () => {
    const section = document.getElementById("contact");
    section.scrollIntoView({ behavior: "smooth" });
      };
    


  return (
    <section
      className="group relative z-20 flex justify-center bg-[#f5f2f0] p-10"
      tabindex="0"
      id="subjects"
      onClick={scrollToSection}
      role="button"
    >
      <a href="#" className="group-clicked"></a>
      <div className="flex flex-row items-center md:flex-col">
        <div className="flex flex-col md:flex-row">
          <div
            role="button"
            onClick={() => handleSubjectChange("physics")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px]   cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
            <img src={physics} className="h-12" alt="" />
           
            <h2 className="p-3 text-[#FF7848] ">פיסיקה</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("math")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
           
            <img src={math} className="h-12" alt="" />
            <h2 className="p-3 text-[#555FD9] group-hover:text-[#FF7848]">
              מתמטיקה
            </h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("english")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
      
            <img src={abc} className="h-12"alt="" />
            <h2 className="p-3 text-[#FF7848] ">אנגלית</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("chemistry")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
          
               
          <img src={chemistry} className="h-12" alt="" />
            <h2 className="p-3 text-[#555FD9] group-hover:text-[#FF7848]">
              כימיה
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div
            role="button"
            onClick={() => handleSubjectChange("computerScience")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
        
          <img src={computer} className="h-12" alt="" />
            <h2 className="p-3 text-[#555FD9] group-hover:text-[#FF7848]">
              מדעי המחשב
            </h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("tongue")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
          
          <img src={tounge} className="h-11" alt="" />
            <h2 className="p-3 text-[#FF7848] ">לשון</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("psychometric")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >

          
            <img src={psychometric} alt=""  className="h-12" />
            <h2 className="p-3 text-[#555FD9] group-hover:text-[#FF7848]">
              פסיכומטרי
            </h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("biology")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
            <svg
              role="presentation"
              width="40"
              height="74"
              viewBox="0 0 50 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00001 9.50029C3 15.0002 10.6372 24.1914 19.6929 25.2258C28.7487 26.2602 34.0001 28.9774 35.6393 35.2436C36.8308 39.7984 36.9972 45.0566 30.9056 52.0515C24.814 59.0465 25.9295 67.1071 27.5783 71.0521"
                stroke="#555FD9"
                strokeWidth="3"
                stroke-linecap="square"
              />
              <path
                d="M21.5 2.50004C23.5 6.50004 25.0231 18.1782 19.3971 25.3492C13.7711 32.5203 12.0154 38.1664 15.323 43.7352C17.7272 47.7831 21.3522 51.5956 30.6097 52.175C39.8672 52.7543 43.0002 55.0002 48.0005 65.5001"
                stroke="#555FD9"
                strokeWidth="3"
                stroke-linecap="square"
              />
              <path
                d="M7.62104 19.1492L22.9995 12.0005M14.2846 38.6081L32.8263 30.858M17.5824 46.498L36.1242 38.7479M43.0152 58.1117L26.4995 65.5006"
                stroke="#555FD9"
                strokeWidth="3"
              />
            </svg>

            <h2 className="p-3 text-[#FF7848] ">ביולוגיה</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectSection;
