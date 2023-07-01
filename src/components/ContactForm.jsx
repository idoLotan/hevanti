import React, { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import emailjs from '@emailjs/browser'

import CheckBox from "./CheckBox";

const ContactForm = ({ toggelModal, subjectsClicked }) => {
  const userInputRef = collection(db, "userInput");
  
//   const sendEmail =(e) =>{
//     e.preventDefault()
// emailjs.sendForm("service_ouhaspm", "template_ino3nuf", e.target, "Q0KuceYtG9tHt_72N")
// console.log(e.target)
//  }
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getDocs(userInputRef);
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

  useEffect(()=>{
    const updatedCheckboxes = { ...checkboxes, ...subjectsClicked };
    setCheckboxes(updatedCheckboxes);
   

  }, [subjectsClicked])

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
    tongue:false, 
    specialNeeds: false,
    autism: false,
    hdd: false,
    hdad: false,
    elementarySchool: false,
    juniorHigh: false,
    highSchool: false,
    university: false,
  });




    const buget = [
   { id: 'ils150', name: 'ils150', checked: false, onChange: undefined, label:"150" },
   { id: 'ils200', name: 'ils200', checked: false, onChange: undefined, label:"200" },
   { id: 'ils250', name: 'ils250', checked: false, onChange: undefined, label:"250" },
   { id: 'vip', name: 'vip', checked: false, onChange: undefined, label: "vip"},
   
    ]

    const subjects = [
      { id: 'chemistry', name: 'chemistry', checked: false, onChange: undefined, label: "כימיה" },
      { id: 'english', name: 'english', checked: false, onChange: undefined, label: "אנגלית" },
      { id: 'math', name: 'math', checked: false, onChange: undefined, label: "מתמטיקה" },
      { id: 'physics', name: 'physics', checked: false, onChange: undefined, label: "פיסיקה" },
      { id: 'computerScience', name: 'computerScience', checked: false, onChange: undefined, label: "מדעי המחשב" },
      { id: 'biology', name: 'biology', checked: false, onChange: undefined, label: "ביולוגיה" },
      { id: 'psychometric', name: 'psychometric', checked: false, onChange: undefined, label: "פסיכומטרי" },
      { id: 'Tongue', name: 'Tongue', checked: false, onChange: undefined, label: "לשון" },
    ];

    const level = [
      { id: 'elementarySchool', name: 'elementarySchool', checked: false, onChange: undefined, label: "בית ספר יסודי" },
      { id: 'juniorHigh', name: 'juniorHigh', checked: false, onChange: undefined, label: "חטיבת ביניים" },
      { id: 'highSchool', name: 'highSchool', checked: false, onChange: undefined, label: "תיכון" },
      { id: 'university', name: 'university', checked: false, onChange: undefined, label: "אוניברסיטה/מכינה" }
    ];
    

    const specialNeeds = [
      { id: 'autism', name: 'autism', checked: false, onChange: undefined, label: "אוטיזים/קשיים סנסוריים" },
      { id: 'hdd', name: 'hdd', checked: false, onChange: undefined, label: "HDD" },
      { id: 'hdad', name: 'hdad', checked: false, onChange: undefined, label: "HDAD" }
    ];
    




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
 
    emailjs.sendForm("service_ouhaspm", "template_ino3nuf", form, "Q0KuceYtG9tHt_72N");
  
    handleFormSubmit();
  }


//   const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
// const checkboxData = {};

// checkboxElements.forEach((checkbox) => {
//   checkboxData[checkbox.id] = {
//     id: checkbox.id,
//     name: checkbox.name,
//     checked:checkbox.checked,
//     onChange:checkbox.onChange

//   };
// });


  
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
             
           
             

                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.autism}  name={"autism"} id={"autism"} onChange={handleCheckboxChange} label={"אוטיזים/קשיים סנסוריים"}></CheckBox>
                </div>
                
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.hdd}  name={"hdd"} id={"hdd"} onChange={handleCheckboxChange} label={"HDD"}></CheckBox>
                </div>
             
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.hdad}  name={"hdad"} id={"hdad"} onChange={handleCheckboxChange} label={"HDAD"}></CheckBox>
                </div>
              </div>
             
            </div>
            
          </div>
          <div className="flex-end   order-3 flex  flex-col text-end md:order-1 ">
            <div className="mr-4 font-bold">רמה</div>
            <div className="overflow-wrap flex ">
           
              <div>
       
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.elementarySchool}  name={"elementarySchool"} id={"elementarySchool"} onChange={handleCheckboxChange} label={"בית ספר יסודי"}></CheckBox>
                </div>
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.juniorHigh}  name={"juniorHigh"} id={"juniorHigh"} onChange={handleCheckboxChange} label={"חטיבת ביניים"}></CheckBox>
                </div>
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.highSchool}  name={"highSchool"} id={"highSchool"} onChange={handleCheckboxChange} label={"תיכון"}></CheckBox>
                </div>
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.university}  name={"university"} id={"university"} onChange={handleCheckboxChange} label={"אוניברסיטה/מכינה"}></CheckBox>
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
              

              <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.chemistry}  name={"chemistry"} id={"chemistry"} onChange={handleCheckboxChange} label={"כימיה"}></CheckBox>
                </div>

                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.english}  name={"english"} id={"english"} onChange={handleCheckboxChange} label={"אנגלית"}></CheckBox>
                </div>

                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.math}  name={"math"} id={"math"} onChange={handleCheckboxChange} label={"מתמטיקה"}></CheckBox>
                </div>
                  
        
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.physics}  name={"physics"} id={"physics"} onChange={handleCheckboxChange} label={"פיסיקה"}></CheckBox>
                </div>
                  
                 
                </div>

                <div>
              


                  <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.computerScience}  name={"computerScience"} id={"computerScience"} onChange={handleCheckboxChange} label={"מדעי המחשב"}></CheckBox>
                </div>


                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.biology}  name={"biology"} id={"biology"} onChange={handleCheckboxChange} label={"ביולוגיה"}></CheckBox>
                </div>

                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.psychometric}  name={"psychometric"} id={"psychometric"} onChange={handleCheckboxChange} label={"פסיכומטרי"}></CheckBox>
                </div>
                  
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.tongue}  name={"tongue"} id={"tongue"} onChange={handleCheckboxChange} label={"לשון"}></CheckBox>
                </div>
                  
                  
                </div>
              </div>
            </div>
            <div className="flex-end order-1 flex flex-col text-end">
              <div className="mr-4 font-bold">תקציב</div>
              <div className="overflow-wrap flex ">
                <div>
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.ils150}  name={"ils150"} id={"ils150"} onChange={handleCheckboxChange} label={"150"}></CheckBox>
                </div>
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.ils200}  name={"ils200"} id={"ils200"} onChange={handleCheckboxChange} label={"200"}></CheckBox>
                </div>
                  
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.ils150}  name={"ils150"} id={"ils150"} onChange={handleCheckboxChange} label={"150"}></CheckBox>
                </div>
                  
                <div className="flex justify-end mr-2">
                <CheckBox checked={checkboxes.vip}  name={"vip"} id={"vip"} onChange={handleCheckboxChange} label={"vip"}></CheckBox>
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
      {/* <div className="flex flex-col items-end">
      {subjects.map((subject)=> (<CheckBox checked={checkboxes.highSchool} className={""} name={""} id={"label.index"} onChange={handleCheckboxChange} label={subject.label}></CheckBox>)
        
        )}
      </div> */}
   
      {/* <CheckBox checked={checkboxes.highSchool}  name={"highSchool"} id={"highSchool"} onChange={handleCheckboxChange} label={"תיכון"}></CheckBox> */}
    </form>
  );
};

export default ContactForm;


{/* <div className="flex justify-end">
<label for="myCheckbox">תיכון</label>
<input
 className="m-2"
 type="checkbox"
 id="highSchool"
 name="highSchool"
 checked={checkboxes.highSchool}
 onChange={handleCheckboxChange}
/>
</div> */}