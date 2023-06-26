import React from "react";
import Btn from "./Btn";

const ContactForm = () => {
  return (
    <div className="section-2 absolute left-[7%] top-[15%] flex h-[80%]  w-[85%] min-w-[800px] justify-between rounded-xl p-10">
      <Btn
        style={"bg-[#FF7848] w-[200px] h-[40px] absolute bottom-4 left-4"}
        text="שלח"
      ></Btn>
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">רמה</div>
        <div className="overflow-wrap flex ">
          <div>
            {" "}
            <div className="p-1">
              <label for="myCheckbox">צרכים מיוחדים</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              <label for="myCheckbox">אוטיזים\קשיים סנסוריים</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              HDD
              <input
                className="m-2  border-2 border-[#555FD9]"
                type="checkbox"
              />
            </div>
            <div className="p-2">
              HDAD
              <input className="m-2" type="checkbox" />
            </div>
          </div>
          <div>
            <div className="p-1">
              <label for="myCheckbox">בית ספר יסודי</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              <label for="myCheckbox">חטיבת ביניים</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              תיכון
              <input
                className="m-2  border-2 border-[#555FD9]"
                type="checkbox"
              />
            </div>
            <div className="p-2">
              אוניברסטיה\מכינה
              <input className="m-2" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">תקציב</div>
        <div className="overflow-wrap flex ">
          <div>
            <div className="p-1">
              <label for="myCheckbox">150</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              <label for="myCheckbox">200</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              250
              <input
                className="m-2  border-2 border-[#555FD9]"
                type="checkbox"
              />
            </div>
            <div className="p-2">
              vip
              <input className="m-2" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">קטגוריות</div>
        <div className="overflow-wrap flex ">
          <div>
            <div className="p-1">
              <label for="myCheckbox">כימיה</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              <label for="myCheckbox">אנגלית</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              מתמטיקה
              <input
                className="m-2  border-2 border-[#555FD9]"
                type="checkbox"
              />
            </div>
            <div className="p-2">
              פיסיקה
              <input className="m-2" type="checkbox" />
            </div>
          </div>

          <div>
            {" "}
            <div className="p-1">
              <label for="myCheckbox">מדעי המחשב</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              <label for="myCheckbox">ביולוגיה</label>
              <input className="m-2" type="checkbox" />
            </div>
            <div className="p-1">
              פסיכומטרי
              <input
                className="m-2  border-2 border-[#555FD9]"
                type="checkbox"
              />
            </div>
            <div className="p-2">
              לשון
              <input className="m-2" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[200px] flex-col text-end ">
        <div>שם </div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
        />
        <div> טלפון</div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
        />
        <div> דואר אלקטרוני</div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ContactForm;
