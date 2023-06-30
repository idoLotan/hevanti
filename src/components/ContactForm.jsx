import React, { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import emailjs from '@emailjs/browser'

const ContactForm = ({ toggelModal }) => {
  const userInputRef = collection(db, "userInput");
  
//   const sendEmail =(e) =>{
//     e.preventDefault()
// emailjs.sendForm("service_ouhaspm", "template_ino3nuf", e.target, "Q0KuceYtG9tHt_72N")
// console.log(e.target)
//  }
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
    ils150: false,
    ils200: false,
    ils250: false,
    vip: false,
    chemistry: false,
    math: false,
    physics: false,
    english:false, 
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

  const handleFormSubmit = async () => {
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

  const sendEmail = (e) => {
    e.preventDefault();
    const checkedItems = getCheckedItems();
    const form = e.target;
    const emailInput = form.querySelector('#email');
    const nameInput = form.querySelector('#name');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
  
    // Access the values of the form elements
    const email = emailInput.value;
    const name = nameInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;
  
    // Add the checked items to the form data
    checkedItems.forEach((item) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'checkedItems';
      input.value = item;
      form.appendChild(input);
    });
  
    // Use the values as needed (e.g., send email)
    console.log(email);
    console.log(name);
    console.log(phone);
    console.log(message);
  
    console.log(form);
  
    emailjs.sendForm("service_ouhaspm", "template_ino3nuf", form, "Q0KuceYtG9tHt_72N");
  
    handleFormSubmit();
  }
  
  return (
   
   <form onSubmit={sendEmail} className="section-2  flex w-[1200px] flex-col items-center  justify-between rounded-xl p-5 md:flex-row">
  
      <div className="order-3 flex flex-col  md:order-1 ">
        <div className="flex flex-col items-center">
          <div className="flex w-[100%] justify-end">
            <h1 className=" text-[20px] font-bold text-[#2A264D]">
              תאר\י את הקשיים והמטרות
            </h1>
          </div>

          <textarea
            name="message" 
            id="message"
            className="bg:w-[212px] left-5 top-3  h-[136px] w-[300px] rounded-lg border-2 border-[#555FD9] p-1 pr-1 text-right  focus:outline-none"
            placeholder="...הקלד כאן"
            ref={textRef}
          ></textarea>
        </div>
        <div className="flex  w-[100%] flex-col items-center md:items-start">
        
           <button type="submit" className="bg-[#FF7848] w-[200px] h-[40px] mt-2 rounded-lg font-bold text-white  ">שלח</button>
        </div>
      </div>
      <div className="order-2 flex flex-col  items-end md:flex-row  md:items-start ">
        <div className="flex flex-col  items-end md:flex-row  md:items-start ">
          <div className="flex">
         
          <div className="flex-end   order-3 flex  flex-col text-end md:order-1 ">
            <div className="mr-4 font-bold">צרכים מיוחדים</div>
            <div className="overflow-wrap flex ">
              <div>
             
           
                <div className="flex justify-end">
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
                <div className="flex justify-end">
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
                <div className="flex justify-end">
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
             
            </div>
            
          </div>
          <div className="flex-end   order-3 flex  flex-col text-end md:order-1 ">
            <div className="mr-4 font-bold">רמה</div>
            <div className="overflow-wrap flex ">
           
              <div>
                <div className="flex justify-end ">
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
                <div className="flex justify-end">
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
                <div className="flex justify-end">
                   <label for="myCheckbox">תיכון</label>
                  <input
                    className="m-2"
                    type="checkbox"
                    id="highSchool"
                    name="highSchool"
                    checked={checkboxes.highSchool}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="flex justify-end">
                  אוניברסטיה\מכינה
                  <input
                    className="m-2"
                    type="checkbox"
                    id="university"
                    name="university"
                    checked={checkboxes.university}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
            
          </div>
          </div>
   
          <div className="order-1 flex md:flex-row">
            <div className="flex-end  order-2  flex flex-col text-end md:order-3">
              <div className="mr-4 font-bold">קטגוריות</div>
              <div className="overflow-wrap flex ">
                <div>
                  <div className="flex justify-end ">
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
                  <div className="flex justify-end">
                    <label for="myCheckbox">אנגלית</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="english"
                      name="english"
                      checked={checkboxes.english}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                    מתמטיקה
                    <input
                      className="m-2"
                      type="checkbox"
                      id="math"
                      name="math"
                      checked={checkboxes.math}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                    פיסיקה
                    <input
                      className="m-2"
                      type="checkbox"
                      id="physics"
                      name="physics"
                      checked={checkboxes.physics}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>

                <div>
                  {" "}
                  <div className="flex justify-end">
                    <label for="myCheckbox">מדעי המחשב</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="computerScience"
                      name="computerScience"
                      checked={checkboxes.computerScience}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                    <label for="myCheckbox">ביולוגיה</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="biology"
                      name="biology"
                      checked={checkboxes.biology}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
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
                  <div className="flex justify-end">
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
                  <div className="flex justify-end">
                    <label for="myCheckbox">150</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="ils150"
                      name="ils150"
                      checked={checkboxes.ils150}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                    <label for="myCheckbox">200</label>
                    <input
                      className="m-2"
                      type="checkbox"
                      id="ils200"
                      name="ils200"
                      checked={checkboxes.ils200}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                  <label for="myCheckbox">250</label>  
                    <input
                      className="m-2"
                      type="checkbox"
                      id="ils250"
                      name="ils250"
                      checked={checkboxes.ils250}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="flex justify-end">
                  <label for="myCheckbox">vip</label>  
                    <input
                      className="m-2"
                      type="checkbox"
                      id="vip"
                      name="vip"
                      checked={checkboxes.vip}
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
        id="name"
        name="name"
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={nameRef}
        />
        <div className="font-bold"> טלפון</div>
        <input
          id="phone"
          name="phone"
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={emailRef}
        />
        <div className="font-bold"> דואר אלקטרוני</div>
        <input
          id="email"
          name="email"
          type="text "
          className="mt-2 rounded-lg border-2 border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={phoneRef}
        />
      </div>
    </form>
  );
};

export default ContactForm;
