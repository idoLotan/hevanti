import React, { useState } from "react";
import hero from "../../assets/images/hero-min.png";
import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";
import Carousel from "../../components/ui/Carousel";
import MyModal from "../../components/ui/MyModal";
import ContactBtn from "../../components/ui/ContactBtn";
import AboutSection from "./components/sections/AboutSection";
import SubjectSection from "./components/sections/SubjectSection";
import ContantSection from "./components/sections/ContantSection";
import TeachersSection from "./components/sections/TeachersSection";
import QuestionsSection from "./components/sections/QuestionsSection";
import { useNavigate } from "react-router-dom";
import LessonsSection from "./components/sections/LessonsSection";

function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState({
    chemistry: false,
    math: false,
    physics: false,
    english: false,
    computerScience: false,
    biology: false,
    psychometric: false,
    tongue: false,
    ils150: false,
    ils200: false,
    ils250: false,
    vip: false,
  
  });

  const toggelModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-page ">
      <ContactBtn></ContactBtn>

      <MyModal isShowing={isOpen} onClose={toggelModal}></MyModal>

      <section
        className="section-1 bg-cover bg-no-repeat pb-2 md:h-[100vh]"
        id="home"
      >
        <div className="flex items-center justify-end ">
          <NavBar />
        </div>
     
        <div className="">
          <div className="max-md:w-full">
            <div className="relative flex flex-col items-center justify-center md:flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" mr-4 hidden md:block"
                width="40"
                height="40"
                fill="none"
              >
                <path
                  d="M21.35 32.857H17.3L8.3 38v-5.143H2V2h36v11.314M9.2 10.685h5.4M9.2 17.2H20"
                  stroke="#555FD9"
                  stroke-opacity=".15"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="m24.5 28.057 5.4 5.429L38 21.543"
                  stroke="#555FD9"
                  stroke-opacity=".15"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="mb-20 flex items-center">
                <img
                  alt="תמונת מרכזית מורה עוזרת לתלמיד"
                  src={hero}
                  className="z-0 mr-[-50px] h-auto w-[250px] md:mt-[31px]  lg:block   lg:h-auto lg:w-[310px] xl:h-auto 2xl:w-[518px] "
                ></img>

                <Carousel></Carousel>
              </div>

              <div className="mb-10 flex flex-col md:mr-10 2xl:mb-20">
                <h1 className="font-montserrat flex flex-col items-end text-right text-[24px] font-bold text-[#2A264D] md:flex-col md:text-[33px] 2xl:text-[42px]">
                  <div className="relative right-40 flex w-[100%] justify-start 2xl:bottom-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden md:block"
                      width="32"
                      height="32"
                      fill="none"
                    >
                      <g opacity=".15">
                        <mask id="a" fill="#fff">
                          <path d="M6.464 9.235C2.528 10.126.56 10.571.092 12.077c-.468 1.504.873 3.073 3.556 6.211l.695.811c.761.892 1.144 1.338 1.315 1.888.171.552.113 1.148-.002 2.336l-.105 1.084c-.405 4.187-.608 6.28.617 7.21 1.226.93 3.069.08 6.752-1.615l.955-.439c1.047-.483 1.57-.723 2.125-.723.555 0 1.078.24 2.126.723l.952.439c3.685 1.696 5.528 2.544 6.752 1.616 1.227-.931 1.024-3.024.62-7.211m1.902-6.119c2.683-3.136 4.024-4.706 3.556-6.211-.468-1.506-2.436-1.952-6.372-2.842l-1.018-.23c-1.118-.253-1.677-.38-2.126-.72-.448-.341-.736-.858-1.312-1.891l-.525-.941C18.528 1.818 17.515 0 16 0c-1.515 0-2.528 1.818-4.555 5.453" />
                        </mask>
                        <path
                          d="M7.348 13.136A4 4 0 0 0 5.58 5.335l1.767 7.803zm-7.256-1.06-3.82-1.188v.002l3.82 1.187zm3.556 6.212-3.04 2.6.002.001 3.038-2.6zm.695.811 3.04-2.598-.002-.003L4.343 19.1zm1.315 1.888 3.82-1.185V19.8l-3.82 1.188zm-.002 2.336 3.981.388v-.002l-3.98-.386zm-.105 1.084-3.981-.389v.004l3.98.385zm.617 7.21 2.42-3.186-.002-.002-2.418 3.187zm6.752-1.615-1.668-3.636-.005.002 1.673 3.634zm.955-.439 1.669 3.636.008-.004-1.677-3.632zm4.251 0-1.675 3.633h.002l1.673-3.633zm.952.439-1.673 3.633 1.673-3.633zm6.752 1.616 2.417 3.187h.001l-2.418-3.187zm4.6-7.596a4 4 0 0 0-7.962.77l7.963-.77zm-5.118-8.334a4 4 0 0 0 6.08 5.2l-6.08-5.2zm6.596-3.611 3.82-1.186v-.003l-3.82 1.189zm-6.372-2.842-.884 3.902h.002l.882-3.902zm-1.018-.23.883-3.901-.883 3.9zm-2.126-.72-2.422 3.183.006.005 2.416-3.188zM21.08 6.394l3.494-1.947v-.002L21.08 6.394zm-.525-.941L17.062 7.4l3.493-1.948zM7.951 3.505A4 4 0 0 0 14.938 7.4L7.951 3.505zm-2.37 1.829c-1.832.415-3.672.82-5.07 1.37-1.472.58-3.468 1.71-4.239 4.184l7.639 2.378a1.99 1.99 0 0 1-.576.894c-.155.132-.19.105.11-.013.29-.115.733-.252 1.42-.428.68-.174 1.482-.356 2.483-.582L5.58 5.333zm-9.31 5.556c-.754 2.43.2 4.488 1.032 5.81.806 1.28 2.05 2.719 3.305 4.188l6.08-5.2c-1.427-1.668-2.196-2.584-2.614-3.249-.392-.623.125-.101-.162.824l-7.64-2.373zm4.339 10 .694.81 6.077-5.202-.694-.811L.61 20.889zm.692.808c.196.23.341.4.463.547.121.146.186.23.222.279.057.078-.061-.068-.149-.349l7.64-2.376c-.473-1.518-1.552-2.664-2.094-3.298l-6.082 5.197zm.535.474c-.084-.273-.07-.45-.072-.336a6.484 6.484 0 0 1-.023.373c-.016.195-.037.423-.067.729l7.963.771c.083-.857.306-2.406-.16-3.907l-7.64 2.37zm-.162.763-.105 1.083 7.962.777.105-1.084-7.962-.776zm-.106 1.087c-.19 1.964-.384 3.875-.317 5.389.068 1.52.432 3.825 2.499 5.392l4.835-6.374c.84.638.694 1.43.658.626-.036-.811.073-2.041.288-4.264l-7.963-.77zM3.75 34.8c2.13 1.62 4.484 1.266 5.976.838 1.44-.413 3.155-1.215 4.868-2.004l-3.346-7.267c-.936.431-1.687.777-2.336 1.055-.656.28-1.092.44-1.39.526-.312.09-.282.04-.053.054.318.02.745.143 1.12.428l-4.84 6.37zm10.84-1.164.955-.438-3.337-7.271-.956.438 3.338 7.271zm.963-.442c.27-.124.466-.215.634-.29a5.28 5.28 0 0 1 .303-.126c.043-.015.004.002-.088.021-.103.022-.241.04-.401.04v-8c-1.638 0-3.083.76-3.802 1.092l3.354 7.263zM16 32.84c-.16 0-.298-.018-.4-.04-.093-.02-.131-.036-.088-.02.046.017.136.052.304.126.169.075.366.165.635.29l3.35-7.265c-.718-.332-2.164-1.09-3.801-1.09v8zm.453.356.952.439 3.346-7.267-.952-.438-3.346 7.267zm.953.44c1.715.789 3.429 1.59 4.869 2.003 1.488.427 3.841.782 5.972-.834l-4.834-6.375a2.134 2.134 0 0 1 1.121-.427c.228-.014.258.035-.055-.054-.3-.086-.735-.247-1.391-.527a99.4 99.4 0 0 1-2.337-1.054l-3.345 7.267zm10.842 1.168c2.066-1.567 2.432-3.87 2.5-5.392.067-1.515-.127-3.426-.317-5.39l-7.963.77c.215 2.222.324 3.451.288 4.262-.036.804-.182.013.656-.623l4.836 6.373zm3.143-13.916c1.256-1.468 2.5-2.906 3.306-4.186.833-1.324 1.785-3.381 1.032-5.81l-7.64 2.37c-.287-.923.229-1.443-.163-.822-.418.665-1.187 1.58-2.614 3.248l6.08 5.2zm4.337-10c-.77-2.473-2.765-3.603-4.239-4.184-1.398-.551-3.239-.956-5.071-1.37l-1.764 7.803c1 .226 1.802.407 2.482.581.686.176 1.128.314 1.42.428.299.118.263.145.109.013a1.988 1.988 0 0 1-.576-.893l7.639-2.378zm-9.309-5.554-1.018-.23-1.766 7.802 1.017.23 1.767-7.802zm-1.019-.23a45.257 45.257 0 0 1-.677-.157 5.32 5.32 0 0 1-.316-.084c-.043-.014-.004-.004.077.035.091.044.206.11.324.2l-4.832 6.375c1.298.984 2.883 1.258 3.66 1.433L25.4 5.103zm-.586-.003c.255.195.36.371.302.284a6.217 6.217 0 0 1-.187-.308 51.234 51.234 0 0 1-.355-.63L17.586 8.34c.402.721 1.114 2.16 2.384 3.127l4.844-6.367zm-.24-.656-.526-.94L17.062 7.4l.525.941 6.986-3.897zm-.525-.94C23.1 1.805 22.177.127 21.26-1.07 20.343-2.268 18.676-4 16-4v8c-.502 0-.917-.173-1.158-.334-.17-.114-.146-.15.068.13.204.266.474.676.85 1.31.371.627.787 1.372 1.302 2.295l6.987-3.896zM16-4c-2.676 0-4.343 1.732-5.261 2.931C9.823.127 8.899 1.804 7.95 3.505L14.938 7.4c.515-.923.93-1.668 1.302-2.295.376-.634.646-1.044.85-1.31.214-.28.237-.244.068-.13C16.918 3.826 16.5 4 16 4v-8z"
                          fill="#FF7848"
                          mask="url(#a)"
                        />
                      </g>
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative left-8 top-6 hidden md:block"
                    width="38"
                    height="41"
                    fill="none"
                  >
                    <g
                      opacity=".5"
                      stroke="#FF7848"
                      strokeWidth="3"
                      stroke-linecap="round"
                    >
                      <path
                        opacity=".5"
                        d="M14.272 34.907 36.12 30.34M10.42 26.777l16.357-10.7M4.917 20.055l7.207-11.776"
                      />
                    </g>
                  </svg>

                  <p>שיעורים פרטיים בכל המקצועות </p>
                  <p> בפריסה ארצית </p>

                  {/* <p className="flex flex-row justify-end ">
                    התחל/י את מסע ההצלחה
                  </p>

                  <p className="flex items-center justify-end ">
                    <svg
                      role="presentation"
                      xmlns=""
                      className="w-[75px] p-1 md:w-[105px] 2xl:w-[130px]"
                      viewBox="0 0 84 38"
                      fill="none"
                    >
                      <path
                        d="M6.50391 10.8213V20.4746H2.54883V10.8213H6.50391ZM41.1182 17.9844V29H31.6406V25.4551H37.1631V18.7461C37.1631 17.4277 37.0752 16.4854 36.8994 15.9189C36.7236 15.3623 36.4307 14.9668 36.0205 14.7324C35.6104 14.4883 35.0098 14.3662 34.2188 14.3662H32.4756V10.8213H34.9658C36.6455 10.8213 37.9004 11.0459 38.7305 11.4951C39.5605 11.9443 40.166 12.6816 40.5469 13.707C40.9277 14.7324 41.1182 16.1582 41.1182 17.9844ZM80.6396 18.4678V29H76.6699V18.4385C76.6699 16.9443 76.3525 15.8945 75.7178 15.2891C75.083 14.6738 73.9795 14.3662 72.4072 14.3662H64.9805V10.8213H72.6562C74.5801 10.8213 76.123 11.0801 77.2852 11.5977C78.457 12.1152 79.3066 12.9355 79.834 14.0586C80.3711 15.1719 80.6396 16.6416 80.6396 18.4678ZM69.2285 17.9551V29H65.2734V17.9551H69.2285Z"
                        fill="#555FD9"
                      />
                      <path
                        d="M16.2744 26.0996C15.8838 27.1055 15.2832 27.8428 14.4727 28.3115C13.6621 28.7705 12.4854 29 10.9424 29H9.94629V25.4551H10.1953C10.8691 25.4551 11.4062 25.3281 11.8066 25.0742C12.1973 24.8203 12.4756 24.4346 12.6416 23.917C12.8076 23.3896 12.8906 22.5938 12.8906 21.5293V14.3662H10.1074V10.8213H20.3027C23.1152 10.8213 25.1318 11.417 26.3525 12.6084C27.583 13.79 28.1982 15.7529 28.1982 18.4971V29H24.2285V18.5557C24.2285 16.9932 23.9111 15.9043 23.2764 15.2891C22.6416 14.6738 21.5723 14.3662 20.0684 14.3662H16.8457V22.042C16.8457 23.7314 16.6553 25.084 16.2744 26.0996ZM61.6846 25.4551V29H44.7363V25.4551H55.7812V18.9805C55.7812 17.2715 55.459 16.0752 54.8145 15.3916C54.1797 14.708 53.0908 14.3662 51.5479 14.3662H45.4248V10.8213H51.6064C54.458 10.8213 56.5234 11.417 57.8027 12.6084C59.0918 13.7998 59.7363 15.7529 59.7363 18.4678V25.4551H61.6846Z"
                        fill="#FF7848"
                      />
                      <circle cx="68.5" cy="32.5" r="1.5" fill="#FF7848" />
                      <circle cx="36.5" cy="32.5" r="1.5" fill="#FF7848" />
                      <circle cx="20.5" cy="19.5" r="1.5" fill="#555FD9" />
                      <circle cx="20.5" cy="32.5" r="1.5" fill="#555FD9" />
                      <circle cx="36.5" cy="36.5" r="1.5" fill="#FF7848" />
                      <circle cx="70.5" cy="36.5" r="1.5" fill="#555FD9" />
                      <circle cx="75.5" cy="36.5" r="1.5" fill="#555FD9" />
                      <circle cx="72.5" cy="32.5" r="1.5" fill="#FF7848" />
                      <circle cx="76.5" cy="32.5" r="1.5" fill="#FF7848" />
                      <rect x="48" y="31" width="8" height="2" fill="#555FD9" />
                    </svg>
                    <p className=""> שלך עם</p>
                  </p> */}
                </h1>
                <div class="ml-1 mr-1 h-[2px] bg-[#555FD9] opacity-50 "></div>
                <h3 className="mb-6 max-w-2xl  text-right text-[22px]  text-indigo-950 md:text-end ">
                  פיקוח וליווי מנהל אישי
                </h3>

                <div className="flex  flex-col items-center justify-end md:flex-row ">
                  {/* <button onClick={() => navigate("/lottery")} className=" m-1 flex h-[36px] w-[157px] items-center justify-center rounded-xl bg-[#FF7848] font-semibold text-indigo-600  2xl:h-[46px] 2xl:w-[210px] 2xl:text-xl">
                  
                      הגרלה
                    
                  </button> */}
                  <button className=" m-1 flex h-[36px] w-[157px] items-center justify-center rounded-xl bg-[#555FD9] font-semibold text-white  2xl:h-[46px] 2xl:w-[210px] 2xl:text-xl">
                    <a href="#contact" className=" " aria-current="page">
                      התחל
                    </a>
                  </button>
                </div>

                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[100px] hidden md:block 2xl:top-[300px]"
                    fill="none"
                  >
                    <g opacity=".2" stroke="#555FD9" strokeWidth="2">
                      <path d="M20.466 40.924h9.673" stroke-linecap="round" />
                      <path d="M20.362 34.062v3.36h9.64v-3.36" />
                      <path
                        d="M20.466 43.727h9.673M22.4 47h6.007"
                        stroke-linecap="round"
                      />
                      <path d="M24.944 0v3.208M6.341 5.44l2.75 1.796M43.658 5.651l-2.75 1.796M1 20.063l3.319.046M49 20.273l-3.319.046M38.96 21.537c0 7.176-6.03 13.052-13.541 13.052s-13.541-5.876-13.541-13.052c0-7.177 6.03-13.053 13.54-13.053 7.511 0 13.541 5.876 13.541 13.053z" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubjectSection
        setSubjects={setSubjects}
        subjects={subjects}
      ></SubjectSection>
      <AboutSection></AboutSection>
      <LessonsSection
        setSubjects={setSubjects}
        subjects={subjects}
      ></LessonsSection>
      <TeachersSection></TeachersSection>

      <ContantSection
        toggelModal={toggelModal}
        subjects={subjects}
      ></ContantSection>
      <QuestionsSection></QuestionsSection>
      <Footer></Footer>
    </div>
  );
}

export default Home;
