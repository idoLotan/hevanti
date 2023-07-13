import React from "react";
import { handleKeyPress } from "../helper";

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
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              className="mt-2 "
              height=""
              viewBox="0 0 44 40"
              fill="none"
            >
              <path
                d="M22.0085 39C20.1522 39 18.1406 37.2859 16.5357 33.7307C14.9726 30.2682 13.9798 25.4145 13.9798 20C13.9798 14.5855 14.9726 9.73184 16.5357 6.26931C18.1406 2.71407 20.1522 1 22.0085 1C23.8647 1 25.8763 2.71407 27.4812 6.26931C29.0443 9.73184 30.0371 14.5855 30.0371 20C30.0371 25.4145 29.0443 30.2682 27.4812 33.7307C25.8763 37.2859 23.8647 39 22.0085 39Z"
                stroke="#555FD9"
                stroke-width="2"
              />
              <path
                d="M5.41328 30.9613C4.95473 30.1794 4.83573 29.1669 5.13808 27.9158C5.44208 26.6577 6.16094 25.2195 7.28406 23.6913C9.52868 20.6373 13.2743 17.3791 18.0063 14.6894C22.7383 11.9997 27.4772 10.4352 31.2859 10.0484C33.1917 9.85483 34.8163 9.96105 36.0749 10.3309C37.3267 10.6987 38.1577 11.3063 38.6163 12.0883C39.0749 12.8702 39.1939 13.8826 38.8915 15.1338C38.5875 16.3918 37.8686 17.8301 36.7455 19.3582C34.5009 22.4122 30.7553 25.6704 26.0233 28.3602C21.2912 31.0499 16.5524 32.6144 12.7436 33.0012C10.8379 33.1947 9.21329 33.0885 7.95466 32.7187C6.70289 32.3509 5.87183 31.7432 5.41328 30.9613Z"
                stroke="#555FD9"
                stroke-width="2"
              />
              <path
                d="M38.5867 30.9543C39.0453 30.1724 39.1643 29.16 38.8619 27.9088C38.5579 26.6508 37.8391 25.2125 36.7159 23.6844C34.4713 20.6304 30.7257 17.3722 25.9937 14.6824C21.2617 11.9927 16.5228 10.4282 12.7141 10.0414C10.8083 9.84787 9.18371 9.95409 7.92508 10.3239C6.67331 10.6917 5.84225 11.2994 5.3837 12.0813C4.92514 12.8633 4.80615 13.8757 5.1085 15.1269C5.4125 16.3849 6.13135 17.8231 7.25448 19.3513C9.49909 22.4053 13.2447 25.6635 17.9767 28.3532C22.7088 31.043 27.4476 32.6075 31.2564 32.9942C33.1621 33.1878 34.7867 33.0816 36.0453 32.7117C37.2971 32.3439 38.1282 31.7363 38.5867 30.9543Z"
                stroke="#555FD9"
                stroke-width="2"
              />
              <path
                d="M28.3425 4.445C28.3425 5.10536 27.7944 5.66722 27.0853 5.66722C26.3762 5.66722 25.8281 5.10536 25.8281 4.445C25.8281 3.78464 26.3762 3.22278 27.0853 3.22278C27.7944 3.22278 28.3425 3.78464 28.3425 4.445Z"
                fill="#555FD9"
                stroke="#555FD9"
                stroke-width="2"
              />
              <path
                d="M40.194 26.6677C40.194 27.3281 39.6459 27.8899 38.9369 27.8899C38.2278 27.8899 37.6797 27.3281 37.6797 26.6677C37.6797 26.0074 38.2278 25.4455 38.9369 25.4455C39.6459 25.4455 40.194 26.0074 40.194 26.6677Z"
                fill="#555FD9"
                stroke="#555FD9"
                stroke-width="2"
              />
              <path
                d="M10.8499 33.3332C10.8499 34.3004 10.0492 35.111 9.02849 35.111C8.00776 35.111 7.20703 34.3004 7.20703 33.3332C7.20703 32.366 8.00776 31.5554 9.02849 31.5554C10.0492 31.5554 10.8499 32.366 10.8499 33.3332Z"
                fill="#555FD9"
                stroke="#555FD9"
                stroke-width="2"
              />
            </svg>
            <h2 className="p-3 text-[#FF7848] ">פיסיקה</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("math")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
            <svg
              role="presentation"
              xmlns=""
              width="50"
              className="mt-2 "
              height="72"
              viewBox="0 0 64 72"
              fill="none"
            >
              <path
                d="M8 1.5H56C59.7424 1.5 62.5 4.19673 62.5 7.2V64.8C62.5 67.8033 59.7424 70.5 56 70.5H8C4.25758 70.5 1.5 67.8033 1.5 64.8V7.2C1.5 4.19673 4.25758 1.5 8 1.5Z"
                stroke="#FF7848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.7461 15.4258H47.2382M47.2382 44.2483V58.6596M47.2382 29.837H47.2775M31.4921 29.837H31.5315M15.7461 29.837H15.7855M31.4921 44.2483H31.5315M15.7461 44.2483H15.7855M31.4921 58.6596H31.5315M15.7461 58.6596H15.7855"
                stroke="#FF7848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="78"
              viewBox="0 0 64 78"
              fill="none"
            >
              <path
                d="M5.88 31L13.44 14.2H16.512L24.096 31H20.832L14.328 15.856H15.576L9.096 31H5.88ZM9.36 27.112L10.2 24.664H19.272L20.112 27.112H9.36ZM53.907 31.24C52.627 31.24 51.435 31.032 50.331 30.616C49.243 30.184 48.291 29.584 47.475 28.816C46.675 28.032 46.051 27.112 45.603 26.056C45.155 25 44.931 23.848 44.931 22.6C44.931 21.352 45.155 20.2 45.603 19.144C46.051 18.088 46.683 17.176 47.499 16.408C48.315 15.624 49.267 15.024 50.355 14.608C51.443 14.176 52.635 13.96 53.931 13.96C55.307 13.96 56.563 14.2 57.699 14.68C58.835 15.144 59.795 15.84 60.579 16.768L58.563 18.664C57.955 18.008 57.275 17.52 56.523 17.2C55.771 16.864 54.955 16.696 54.075 16.696C53.195 16.696 52.387 16.84 51.651 17.128C50.931 17.416 50.299 17.824 49.755 18.352C49.227 18.88 48.811 19.504 48.507 20.224C48.219 20.944 48.075 21.736 48.075 22.6C48.075 23.464 48.219 24.256 48.507 24.976C48.811 25.696 49.227 26.32 49.755 26.848C50.299 27.376 50.931 27.784 51.651 28.072C52.387 28.36 53.195 28.504 54.075 28.504C54.955 28.504 55.771 28.344 56.523 28.024C57.275 27.688 57.955 27.184 58.563 26.512L60.579 28.432C59.795 29.344 58.835 30.04 57.699 30.52C56.563 31 55.299 31.24 53.907 31.24Z"
                fill="#555FD9"
              />
              <path
                d="M26.256 23V6.2H34.128C36.144 6.2 37.68 6.6 38.736 7.4C39.792 8.184 40.32 9.24 40.32 10.568C40.32 11.464 40.112 12.232 39.696 12.872C39.28 13.496 38.72 13.984 38.016 14.336C37.328 14.672 36.576 14.84 35.76 14.84L36.192 13.976C37.136 13.976 37.984 14.152 38.736 14.504C39.488 14.84 40.08 15.336 40.512 15.992C40.96 16.648 41.184 17.464 41.184 18.44C41.184 19.88 40.632 21 39.528 21.8C38.424 22.6 36.784 23 34.608 23H26.256ZM29.376 20.552H34.416C35.584 20.552 36.48 20.36 37.104 19.976C37.728 19.592 38.04 18.976 38.04 18.128C38.04 17.296 37.728 16.688 37.104 16.304C36.48 15.904 35.584 15.704 34.416 15.704H29.136V13.28H33.792C34.88 13.28 35.712 13.088 36.288 12.704C36.88 12.32 37.176 11.744 37.176 10.976C37.176 10.192 36.88 9.608 36.288 9.224C35.712 8.84 34.88 8.648 33.792 8.648H29.376V20.552Z"
                fill="#555FD9"
              />
              <path
                d="M30.5 75.2584V47.8136C23.8903 43.4608 15.1116 40.5255 5.46941 39.5236C4.91269 39.4753 4.34697 39.5015 3.81446 39.5984C3.27724 39.6962 2.80703 39.8597 2.43034 40.0609L30.5 75.2584ZM30.5 75.2584C23.3367 70.9845 14.2407 68.2534 4.50832 67.4284L4.48511 67.4266C3.48644 67.3575 2.64746 67.0619 2.1076 66.6828C1.56788 66.3038 1.49883 65.983 1.50002 65.8606L1.50009 65.846V41.0766V41.0764C1.50008 40.9927 1.52613 40.8595 1.65908 40.6791C1.7979 40.4907 2.0439 40.2676 2.43002 40.0611L30.5 75.2584ZM59.4917 67.4284C49.7593 68.2534 40.6633 70.9845 33.5 75.2584V47.8136C40.1097 43.4608 48.8884 40.5255 58.5306 39.5236C59.0873 39.4753 59.653 39.5015 60.1855 39.5984C60.7228 39.6962 61.193 39.8597 61.5697 40.0609C61.956 40.2675 62.2021 40.4906 62.3409 40.6791C62.4739 40.8595 62.4999 40.9927 62.4999 41.0764V41.0766V65.846L62.5 65.8606C62.5012 65.983 62.4321 66.3038 61.8924 66.6828C61.3525 67.0619 60.5136 67.3575 59.5149 67.4266L59.4917 67.4284Z"
                stroke="#555FD9"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="p-3 text-[#FF7848] ">אנגלית</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("chemistry")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
            <svg
              role="presentation"
              xmlns=""
              width="34"
              viewBox="0 0 44 73"
              fill="none"
            >
              <rect
                x="10.699"
                y="1.69727"
                width="21.8472"
                height="15.9649"
                stroke="#FF7848"
                stroke-width="3"
              />
              <path
                d="M14.7895 19.9718V31.8055L3.6083 55.1955C1.12368 60.2528 0.219841 70.3674 10.7799 70.9996H30.6577C40.5966 70.9996 44.6061 64.0458 40.2581 55.1955L29.0768 31.8055V20.4265"
                stroke="#FF7848"
                stroke-width="3"
              />
              <circle cx="12" cy="58" r="1.5" fill="#FF7848" stroke="#FF7848" />
              <circle cx="30" cy="62" r="3.5" fill="#FF7848" stroke="#FF7848" />
            </svg>
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
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="72"
              viewBox="0 0 64 72"
              fill="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="61"
                height="53"
                rx="6.5"
                stroke="#FF7848"
                stroke-width="3"
              />
              <rect
                x="1.5"
                y="65.5"
                width="61"
                height="5"
                rx="2.5"
                stroke="#FF7848"
                stroke-width="3"
              />
            </svg>
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
            <svg
              role="presentation"
              xmlns=""
              width="40"
              height="73"
              viewBox="0 0 65 73"
              fill="none"
            >
              <path
                d="M50 67.5394H4V11.2894H32.1L36.144 6.90645L36.04 6.78945H4C1.791 6.78945 0 8.80432 0 11.2894V67.5394C0 70.0246 1.791 72.0394 4 72.0394H50C52.209 72.0394 54 70.0246 54 67.5394V34.5871L50 38.8823V67.5394ZM60.93 2.93295C59.125 0.986695 57.1331 0 55.0081 0C51.6821 0 49.2561 2.4165 48.5961 3.15682C47.6601 4.19632 21.1481 33.9785 21.1481 33.9785C20.9401 34.2169 20.7881 34.5083 20.7101 34.8323C19.9921 37.8169 16.3931 51.0739 16.3571 51.2056C16.1711 51.8851 16.3371 52.6254 16.7821 53.1193C16.937 53.2943 17.1213 53.4331 17.3241 53.5277C17.527 53.6223 17.7445 53.6709 17.9641 53.6705C18.1361 53.6705 18.3091 53.6424 18.4791 53.5828C18.6011 53.5366 30.7601 49.1131 32.7611 48.4415C33.0251 48.3538 33.2641 48.1929 33.4621 47.9758C34.7251 46.574 59.0941 19.5841 61.0661 17.2925C63.1051 14.9255 64.119 12.4651 64.08 9.97319C64.0431 7.51169 62.979 5.14245 60.93 2.93295ZM58.1931 14.1604C57.0801 15.4519 48.365 25.1404 32.29 42.9559L31.06 44.3205C29.217 44.9618 24.8039 46.557 21.4679 47.7675C22.5419 43.7771 23.8309 38.9565 24.4059 36.6762C27.841 32.8174 50.5549 7.30357 51.4179 6.34507C51.5859 6.156 53.1189 4.49887 55.0079 4.49887C56.0799 4.49887 57.1129 5.049 58.1619 6.18075C59.416 7.53412 60.0619 8.83462 60.08 10.0496C60.1 11.3006 59.465 12.6832 58.1931 14.1604Z"
                fill="#555FD9"
              />
            </svg>
            <h2 className="p-3 text-[#FF7848] ">לשון</h2>
          </div>
          <div
            role="button"
            onClick={() => handleSubjectChange("psychometric")}
            tabindex="0"
            onKeyUp={handleKeyPress}
            className="group m-3 flex h-[119px] w-[181px] cursor-pointer flex-col items-center justify-center border-2 border-[#FF7848] pt-3 hover:border-[#555FD9]"
          >
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="72"
              viewBox="0 0 64 72"
              fill="none"
            >
              <path
                d="M2.57564 33.4728C8.98646 38.6229 18.444 47.3618 24.4549 53.6655L25.9454 55.2285L26.8896 53.2861C36.0248 34.4918 46.5131 18.6155 59.9594 1.90696L61.8334 2.90628C46.4732 26.0658 36.8076 47.5722 27.5942 68.8564C20.8843 58.812 13.971 50.2271 6.93527 41.4902C5.22144 39.362 3.50034 37.2248 1.77316 35.0552L2.57564 33.4728Z"
                stroke="#FF7848"
                stroke-width="3"
              />
            </svg>
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
                stroke-width="3"
                stroke-linecap="square"
              />
              <path
                d="M21.5 2.50004C23.5 6.50004 25.0231 18.1782 19.3971 25.3492C13.7711 32.5203 12.0154 38.1664 15.323 43.7352C17.7272 47.7831 21.3522 51.5956 30.6097 52.175C39.8672 52.7543 43.0002 55.0002 48.0005 65.5001"
                stroke="#555FD9"
                stroke-width="3"
                stroke-linecap="square"
              />
              <path
                d="M7.62104 19.1492L22.9995 12.0005M14.2846 38.6081L32.8263 30.858M17.5824 46.498L36.1242 38.7479M43.0152 58.1117L26.4995 65.5006"
                stroke="#555FD9"
                stroke-width="3"
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
