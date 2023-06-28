import React, { useState } from "react";
import hero from "../assets/images/hero.png";
import subjects from "../assets/images/subjects.png";
import hBar from "../assets/images/h-bar.png";
import subjectsMobile from "../assets/images/subjectsmobile.png";
import about from "../assets/images/about.png";
import aboutMobile from "../assets/images/about-mobile.png";
import howItWorks from "../assets/images/howItWorks.png";
import questions from "../assets/images/questions.png";
import whatsAppImg from "../assets/images/whatsapp-3.png";
import QR from "../assets/images/QR.png";
import NavBar from "../components/NavBar";
import Btn from "../components/Btn";

import teachers from "../assets/images/teachers.png";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Carousel from "../components/Carousel";
import AccordionTW from "../components/AccordionTW";
import MyModal from "../components/MyModal";
import TeachersCarousel from "../components/TeachersCarousel";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggelModal = () => {
    setIsOpen(!isOpen);
  };
  function openWhatsApp() {
    // Replace the phone number and message with your desired values
    var phoneNumber = "+972522113937"; // Enter the phone number with the country code
    var message = "Hello, I have a question.";

    var url =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url);
  }
  return (
    <div>
      {/* <div className="flex flex-col">
        <div className="h-16 w-16 bg-blue-500"></div>
        <div className="h-16 w-16 bg-red-500 md:order-first"></div>
      </div> */}

      <MyModal isShowing={isOpen} onClose={toggelModal}></MyModal>
      <img
        onClick={openWhatsApp}
        src={whatsAppImg}
        className=" fixed bottom-10 right-20    z-30 h-20 w-20"
      ></img>

      <section
        className="section-1 h-[130vh] bg-cover bg-no-repeat md:h-[100vh]"
        id="home"
      >
        <div className="flex items-center justify-end ">
          <NavBar />
        </div>

        <div className=" p-[5vw] ">
          <div className="max-md:w-full">
            <div className="relative flex flex-col justify-around md:flex-row">
              <div className="flex items-end">
                <img
                  src={hero}
                  className="z-0 h-auto  lg:block  lg:h-auto lg:w-[300px] xl:h-auto 2xl:w-[500px] "
                ></img>
                <Carousel></Carousel>
              </div>

              <div className="mt-11 flex flex-col  pt-12">
                <h1 className=" font-montserrat text-right text-[42px] font-bold text-[#2A264D]">
                  <p>התחל\י את המסע ההצלחה</p>
                  <p className="flex items-center justify-end">
                    <svg
                      className="p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="133"
                      height="60"
                      viewBox="0 0 133 60"
                      fill="none"
                    >
                      <path
                        d="M10.4062 17.9141V33.3594H4.07812V17.9141H10.4062ZM65.7891 29.375V47H50.625V41.3281H59.4609V30.5938C59.4609 28.4844 59.3203 26.9766 59.0391 26.0703C58.7578 25.1797 58.2891 24.5469 57.6328 24.1719C56.9766 23.7812 56.0156 23.5859 54.75 23.5859H51.9609V17.9141H55.9453C58.6328 17.9141 60.6406 18.2734 61.9688 18.9922C63.2969 19.7109 64.2656 20.8906 64.875 22.5312C65.4844 24.1719 65.7891 26.4531 65.7891 29.375ZM129.023 30.1484V47H122.672V30.1016C122.672 27.7109 122.164 26.0312 121.148 25.0625C120.133 24.0781 118.367 23.5859 115.852 23.5859H103.969V17.9141H116.25C119.328 17.9141 121.797 18.3281 123.656 19.1562C125.531 19.9844 126.891 21.2969 127.734 23.0938C128.594 24.875 129.023 27.2266 129.023 30.1484ZM110.766 29.3281V47H104.438V29.3281H110.766Z"
                        fill="#555FD9"
                      />
                      <path
                        d="M26.0391 42.3594C25.4141 43.9688 24.4531 45.1484 23.1562 45.8984C21.8594 46.6328 19.9766 47 17.5078 47H15.9141V41.3281H16.3125C17.3906 41.3281 18.25 41.125 18.8906 40.7188C19.5156 40.3125 19.9609 39.6953 20.2266 38.8672C20.4922 38.0234 20.625 36.75 20.625 35.0469V23.5859H16.1719V17.9141H32.4844C36.9844 17.9141 40.2109 18.8672 42.1641 20.7734C44.1328 22.6641 45.1172 25.8047 45.1172 30.1953V47H38.7656V30.2891C38.7656 27.7891 38.2578 26.0469 37.2422 25.0625C36.2266 24.0781 34.5156 23.5859 32.1094 23.5859H26.9531V35.8672C26.9531 38.5703 26.6484 40.7344 26.0391 42.3594ZM98.6953 41.3281V47H71.5781V41.3281H89.25V30.9688C89.25 28.2344 88.7344 26.3203 87.7031 25.2266C86.6875 24.1328 84.9453 23.5859 82.4766 23.5859H72.6797V17.9141H82.5703C87.1328 17.9141 90.4375 18.8672 92.4844 20.7734C94.5469 22.6797 95.5781 25.8047 95.5781 30.1484V41.3281H98.6953Z"
                        fill="#FF7848"
                      />
                      <circle cx="112" cy="52" r="2" fill="#FF7848" />
                      <circle cx="59" cy="52" r="2" fill="#FF7848" />
                      <circle cx="33" cy="34" r="2" fill="#555FD9" />
                      <circle cx="33" cy="52" r="2" fill="#555FD9" />
                      <circle cx="59" cy="58" r="2" fill="#FF7848" />
                      <circle cx="114" cy="58" r="2" fill="#555FD9" />
                      <circle cx="120" cy="58" r="2" fill="#555FD9" />
                      <circle cx="117" cy="52" r="2" fill="#FF7848" />
                      <circle cx="122" cy="52" r="2" fill="#FF7848" />
                    </svg>
                    שלך עם
                  </p>
                </h1>
                <div class="ml-1 mr-1 h-[2px] bg-[#555FD9]"></div>
                <p className="mb-6 max-w-2xl  text-end  font-light text-gray-600 ">
                  שחרר את הפוטנציאל שלך עם הוראה מעולה
                </p>
                <div className="flex justify-end">
                  <div>
                    <a
                      href="#contact"
                      className=" h-[46px] w-[210px] rounded-xl bg-[#555FD9] pb-2 pl-20 pr-20 pt-2 text-[20px] font-bold text-white"
                      aria-current="page"
                    >
                      התחל
                    </a>
                    {/* <Btn
                      text={"התחל"}
                      style={"bg-[#555FD9] w-[210px] h-[46px] text-[20px]"}
                      herf={"#contact"}
                    ></Btn> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full  "></div>
          <div className="relative bottom-4 right-80 flex  justify-end sm:right-0">
            <div className="flex flex-col">
              <img src={QR} className="w-[64px]"></img>
              <div className="text-[#555FD9]">whatsApp</div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative z-20 flex justify-center bg-[#f5f2f0] p-10"
        id="subjects"
      >
        <div className="flex flex-col items-center">
          <img src={subjects} className="hidden w-[80%] md:block"></img>
          <img src={subjectsMobile} className=" md:hidden"></img>
        </div>
      </section>
      <section className="relative" id="about">
        <div className="h-1/2 overflow-hidden">
          <img
            src={about}
            className="hidden h-full w-full object-cover md:block"
          ></img>
          <img
            src={aboutMobile}
            className="h-full w-full object-cover md:hidden"
          ></img>
        </div>
        <div id="teachers" className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img className="hidden md:block md:p-10" src={teachers}></img>
          </div>
          <TeachersCarousel></TeachersCarousel>
        </div>
      </section>
      <section
        className="section-1 relative flex  h-[900px] flex-col  p-3 md:h-[400px] "
        id="contact"
      >
        <h1 className=" text-right text-[35px] font-bold text-[#555FD9]">
          ?מה אתה רוצה להבין
        </h1>
        <h1 className=" text-right text-xl  text-[#2A264D]">
          ספר/י לנו מה את/ה מצפה שנעשה עבורך, ואנחנו נבנה תוכנית מותאמת אישית
        </h1>

        {/* <img src={howItWorks} className="h-[500px] w-[100%]"></img> */}
        <div className="flex w-[100%] items-center justify-center">
          <ContactForm toggelModal={toggelModal}></ContactForm>
        </div>
      </section>
      <section id="questions" className="relative  w-[100%]  p-10">
        <h1 className="pb-6 text-right text-2xl text-[35px] font-bold text-[#555FD9]">
          שאלות נפוצות כלליות
        </h1>
        <AccordionTW></AccordionTW>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Home;
