import React from "react";
import ReactDOM from "react-dom";
import whatapp from "assets/images/whatsapp2.png";
import phone from "assets/images/phone2.png";
import esc from "assets/images/esc.png";

import facebook from "assets/images/facebook.png";
import { openWhatsApp } from "helper";

// md:left-[calc(50%-385px)] top-[calc(50%-350px)]  md:top-[calc(50%-180px)] 2xl:top-[calc(50%-255px)]

const MyModal = ({ isShowing, onClose, children, style }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="fixed inset-0 z-30 flex items-center  justify-center bg-gray-900 bg-opacity-50 "
            onClick={onClose}
          >
            <div className="relative z-100 flex h-[100vh]  w-[100vw] animate-fade-up flex-col items-center  justify-center  rounded-lg bg-neutral-100 shadow  dark:bg-gray-800 md:h-96  md:w-[50rem] md:p-2 ">
              <div className="flex">
                <svg
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-2"
                  width="100"
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

                <h3 className=" text-3xl font-semibold text-indigo-600">
                  תודה שפנית ל
                </h3>
              </div>
              <img
                src={esc}
                className={` absolute right-3 top-7 h-5 cursor-pointer md:hidden`}
                alt=""
              />
              <div
                dir="rtl"
                className="w-96 p-5 text-center text-xl font-medium leading-10 text-indigo-600"
              >
                אנו מעריכים את התעניינותך בשירותים שלנו.
                <br /> נציגנו ייצור איתך קשר בהקדם כדי לדון בפרטים ולענות על כל
                השאלות שלך.
              </div>

              <div className=" h-5 w-full text-center text-xl font-semibold text-indigo-600">
                צור קשר
              </div>

              <div className=" mt-10   flex flex-row justify-evenly">
                <div className="relative">
                  <svg
                    className="m-1 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g id="Group 1332">
                      <rect
                        id="Rectangle 91"
                        width="40"
                        height="40"
                        rx="12"
                        fill="rgb(249, 115, 22)"
                      />
                      <path
                        id="Vector"
                        d="M14.96 8H25.04C28.88 8 32 11.12 32 14.96V25.04C32 26.8859 31.2667 28.6562 29.9615 29.9615C28.6562 31.2667 26.8859 32 25.04 32H14.96C11.12 32 8 28.88 8 25.04V14.96C8 13.1141 8.73328 11.3438 10.0385 10.0385C11.3438 8.73328 13.1141 8 14.96 8ZM14.72 10.4C13.5743 10.4 12.4755 10.8551 11.6653 11.6653C10.8551 12.4755 10.4 13.5743 10.4 14.72V25.28C10.4 27.668 12.332 29.6 14.72 29.6H25.28C26.4257 29.6 27.5245 29.1449 28.3347 28.3347C29.1449 27.5245 29.6 26.4257 29.6 25.28V14.72C29.6 12.332 27.668 10.4 25.28 10.4H14.72ZM26.3 12.2C26.6978 12.2 27.0794 12.358 27.3607 12.6393C27.642 12.9206 27.8 13.3022 27.8 13.7C27.8 14.0978 27.642 14.4794 27.3607 14.7607C27.0794 15.042 26.6978 15.2 26.3 15.2C25.9022 15.2 25.5206 15.042 25.2393 14.7607C24.958 14.4794 24.8 14.0978 24.8 13.7C24.8 13.3022 24.958 12.9206 25.2393 12.6393C25.5206 12.358 25.9022 12.2 26.3 12.2ZM20 14C21.5913 14 23.1174 14.6321 24.2426 15.7574C25.3679 16.8826 26 18.4087 26 20C26 21.5913 25.3679 23.1174 24.2426 24.2426C23.1174 25.3679 21.5913 26 20 26C18.4087 26 16.8826 25.3679 15.7574 24.2426C14.6321 23.1174 14 21.5913 14 20C14 18.4087 14.6321 16.8826 15.7574 15.7574C16.8826 14.6321 18.4087 14 20 14ZM20 16.4C19.0452 16.4 18.1295 16.7793 17.4544 17.4544C16.7793 18.1295 16.4 19.0452 16.4 20C16.4 20.9548 16.7793 21.8705 17.4544 22.5456C18.1295 23.2207 19.0452 23.6 20 23.6C20.9548 23.6 21.8705 23.2207 22.5456 22.5456C23.2207 21.8705 23.6 20.9548 23.6 20C23.6 19.0452 23.2207 18.1295 22.5456 17.4544C21.8705 16.7793 20.9548 16.4 20 16.4Z"
                        fill="#F6F6F6"
                      />
                    </g>
                  </svg>
                  <a
                    href="https://www.instagram.com/meveenorg/?igshid=MzRlODBiNWFlZA=="
                    className="absolute left-1 top-1 z-10 h-10 w-10  "
                  ></a>
                </div>

                <button className="relative m-1">
                  <img
                    src={facebook}
                    className="z-0 w-10 cursor-pointer rounded-xl border-8 border-orange-500 bg-orange-500"
                    alt=""
                  />
                  <a
                    href="https://www.facebook.com/OferAvital100?mibextid=LQQJ4d"
                    className="absolute left-0 top-0 z-10 h-10 w-10 "
                  ></a>
                </button>

                <button className="m-1 hidden h-10 w-52 items-center justify-center rounded-xl bg-orange-500 text-center text-base font-bold text-neutral-100 md:flex">
                  <img
                    src={phone}
                    className="w-10 cursor-pointer  rounded-xl border-8 border-orange-500 bg-orange-500"
                    alt=""
                  />
                  <a href="tel:+972522113937" className="">
                    {`+972 52 211 39 37`}
                  </a>
                </button>

                <button
                  onClick={openWhatsApp}
                  className=" m-1  flex h-10 w-52 items-center justify-center rounded-xl bg-orange-500 text-center text-base font-bold text-neutral-100"
                >
                  <img
                    src={whatapp}
                    className="w-10 cursor-pointer  rounded-xl border-8 border-orange-500 bg-orange-500"
                    alt=""
                  />
                  Whatapp
                </button>
              </div>

              {/* <p className="text-right">אנא קרא בעיון את התוכן באתר</p> */}

              <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
                {/* <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                    >
                      Learn more about privacy
                    </a> */}
                <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0"></div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default MyModal;
