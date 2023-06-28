import React, { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ContactForm = ({ toggelModal }) => {
  const userInputRef = collection(db, "userInput");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userInputRef);
      console.log(data);
    };
    getData();
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const textRef = useRef();
  const [checkboxes, setCheckboxes] = useState({
    150: false,
    200: false,
    250: false,
    vip: false,
    chemistry: false,
    math: false,
    physics: false,
    computerScience: false,
    biology: false,
    psychometric: false,
    specialNeeds: false,
    autism: false,
    hdd: false,
    hdad: false,
    elementarySchool: false,
    juniorHigh: false,
    highSchool: false,
    university: false,
  });

  function getCheckedItems() {
    const checkedItems = [];

    for (const key in checkboxes) {
      if (checkboxes[key]) {
        checkedItems.push(key);
      }
    }

    return checkedItems;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const checkedItems = getCheckedItems();
    const formData = {
      items: checkedItems,
      email: emailRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      usersText: textRef.current.value,
    };
    const response = await addDoc(userInputRef, formData);
    console.log("response", response);
    toggelModal();
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="section-2  flex w-[90%] flex-col items-center  justify-between rounded-xl p-5 md:flex-row">
      <div className="order-3 flex flex-col  md:order-1 ">
        <div className="flex flex-col items-center">
          <div className="flex w-[100%] justify-end">
            <h1 className=" text-[20px] font-bold text-[#2A264D]">
              תאר\י את הקשיים והמטרות
            </h1>
          </div>

          <textarea
            className="bg:w-[212px] left-5 top-3  h-[136px] w-[300px] rounded-lg border-2 border-[#555FD9] p-1 pr-1 text-right  focus:outline-none"
            placeholder="...הקלד כאן"
            ref={textRef}
          ></textarea>
        </div>
        <div className="flex  w-[100%] flex-col items-center md:items-start">
          <Btn
            style={"bg-[#FF7848] w-[200px] h-[40px] mt-2  "}
            text="שלח"
            onClick={handleFormSubmit}
          ></Btn>
        </div>
      </div>
      <div className="order-2 flex flex-col  items-end md:flex-row  md:items-start ">
        <div className="flex flex-col  items-end md:flex-row  md:items-start ">
          <div className="flex-end   order-3 flex  flex-col text-end md:order-1 ">
            <div className="mr-4 font-bold">רמה</div>
            <div className="overflow-wrap flex ">
              <div>
                <div className="">
                  <label for="myCheckbox">צרכים מיוחדים</label>
                  <input
                    className="m-2"
                    type="checkbox"
                    id="specialNeeds"
                    name="specialNeeds"
                    checked={checkboxes.specialNeeds}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  <label for="myCheckbox">אוטיזים\קשיים סנסוריים</label>
                  <input
                    className="m-2"
                    type="checkbox"
                    id="autism"
                    name="autism"
                    checked={checkboxes.autism}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  HDD
                  <input
                    className="m-2"
                    type="checkbox"
                    id="hdd"
                    name="hdd"
                    checked={checkboxes.hdd}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  HDAD
                  <input
                    className="m-2"
                    type="checkbox"
                    id="hdad"
                    name="hdad"
                    checked={checkboxes.hdad}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <label for="myCheckbox">בית ספר יסודי</label>
                  <input
                    className="m-2"
                    type="checkbox"
                    id="elementarySchool"
                    name="elementarySchool"
                    checked={checkboxes.elementarySchool}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  <label for="myCheckbox">חטיבת ביניים</label>
                  <input
                    className="m-2"
                    type="checkbox"
                    id="juniorHigh"
                    name="juniorHigh"
                    checked={checkboxes.juniorHigh}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  תיכון
                  <input
                    className="m-2"
                    type="checkbox"
                    id="highSchool"
                    name="highSchool"
                    checked={checkboxes.highSchool}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="">
                  אוניברסטיה\מכינה
                  <input
                    className="m-2"
                    type="checkbox"
                    id="University"
                    name="University"
                    checked={checkboxes.University}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 flex md:flex-row">
            <div className="flex-end  order-2  flex flex-col text-end md:order-3">
              <div className="mr-4 font-bold">קטגוריות</div>
              <div className="overflow-wrap flex ">
                <div>
                  <div className="">
                    <label for="myCheckbox">כימיה</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="chemistry"
                      name="chemistry"
                      checked={checkboxes.checkbox4}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    <label for="myCheckbox">אנגלית</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="English"
                      name="English"
                      checked={checkboxes.checkbox5}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    מתמטיקה
                    <input
                      className="m-2"
                      type="checkbox"
                      id="math"
                      name="math"
                      checked={checkboxes.checkbox6}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    פיסיקה
                    <input
                      className="m-2"
                      type="checkbox"
                      id="physics"
                      name="physics"
                      checked={checkboxes.checkbox6}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>

                <div>
                  {" "}
                  <div className="">
                    <label for="myCheckbox">מדעי המחשב</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="computerScience"
                      name="computerScience"
                      checked={checkboxes.checkbox7}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    <label for="myCheckbox">ביולוגיה</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="Biology"
                      name="Biology"
                      checked={checkboxes.Biology}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    פסיכומטרי
                    <input
                      className="m-2"
                      type="checkbox"
                      id="psychometric"
                      name="psychometric"
                      checked={checkboxes.psychometric}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    לשון
                    <input
                      className="m-2"
                      type="checkbox"
                      id="Tongue"
                      name="Tongue"
                      checked={checkboxes.Tongue}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-end order-1 flex flex-col text-end">
              <div className="mr-4 font-bold">תקציב</div>
              <div className="overflow-wrap flex ">
                <div>
                  <div className="">
                    <label for="myCheckbox">150</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="150"
                      name="150"
                      checked={checkboxes.checkbox1}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    <label for="myCheckbox">200</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="200"
                      name="200"
                      checked={checkboxes.checkbox2}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="">
                    250
                    <input
                      className="m-2"
                      type="checkbox"
                      id="250"
                      name="250"
                      checked={checkboxes.checkbox3}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="p-2">
                    vip
                    <input
                      className="m-2"
                      type="checkbox"
                      id="vip"
                      name="vip"
                      checked={checkboxes.checkbox3}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="order-2 flex w-[100%] flex-col text-end md:order-3 md:w-[200px] ">
        <div className="font-bold">שם </div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={nameRef}
        />
        <div className="font-bold"> טלפון</div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={emailRef}
        />
        <div className="font-bold"> דואר אלקטרוני</div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={phoneRef}
        />
      </div>
    </div>
  );
};

export default ContactForm;
