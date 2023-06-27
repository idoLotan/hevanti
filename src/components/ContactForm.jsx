import React, { useEffect, useRef, useState } from "react";
import Btn from "./Btn";

const ContactForm = () => {
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

  useEffect(() => {
    console.log(checkboxes);
  }, [checkboxes]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const checkedItems = getCheckedItems();
    const formData = {
      items: checkedItems,
      email: emailRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      usersText: textRef.current.value,
    };

    console.log("Form data:", formData);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="section-2 absolute left-[7%] top-[15%] flex h-[80%]  w-[85%] min-w-[800px] justify-between rounded-xl p-10">
      <textarea
        className="mb-5 mt-2  rounded-lg border-2 border-[#555FD9] pr-1 text-right  focus:outline-none"
        placeholder="...תאר את המטרות שלך"
        ref={textRef}
      ></textarea>
      <Btn
        style={"bg-[#FF7848] w-[200px] h-[40px] absolute bottom-4 left-4"}
        text="שלח"
        onClick={handleFormSubmit}
      ></Btn>
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">רמה</div>
        <div className="overflow-wrap flex ">
          <div>
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-2">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-2">
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
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">תקציב</div>
        <div className="overflow-wrap flex ">
          <div>
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-1">
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
      <div className="flex-end  flex flex-col text-end">
        <div className="mr-4 font-bold">קטגוריות</div>

        <div className="overflow-wrap flex ">
          <div>
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-2">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-1">
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
            <div className="p-2">
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

      <div className="flex w-[200px] flex-col text-end ">
        <div>שם </div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={nameRef}
        />
        <div> טלפון</div>
        <input
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={emailRef}
        />
        <div> דואר אלקטרוני</div>
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