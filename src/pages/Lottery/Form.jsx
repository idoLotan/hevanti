import { useEffect, useRef, useState } from "react";

import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import CheckBox from "../../components/ui/CheckBox";
import { Dropdown } from "flowbite-react";
import CustomSelect from "./DropDown";

// import CheckBox from "../ui/CheckBox";

const Form = () => {
  const userInputRef = collection(db, "userInput");

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
    english: false,
    computerScience: false,
    biology: false,
    psychometric: false,
    tongue: false,
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
    {
      id: "ils150",
      name: "ils150",
      checked: false,
      onChange: undefined,
      label: "150",
    },
    {
      id: "ils200",
      name: "ils200",
      checked: false,
      onChange: undefined,
      label: "200",
    },
    {
      id: "ils250",
      name: "ils250",
      checked: false,
      onChange: undefined,
      label: "250",
    },
    {
      id: "vip",
      name: "vip",
      checked: false,
      onChange: undefined,
      label: "vip",
    },
  ];

  const subjects = [
    {
      id: "chemistry",
      name: "chemistry",
      checked: false,
      onChange: undefined,
      label: "כימיה",
    },
    {
      id: "english",
      name: "english",
      checked: false,
      onChange: undefined,
      label: "אנגלית",
    },
    {
      id: "math",
      name: "math",
      checked: false,
      onChange: undefined,
      label: "מתמטיקה",
    },
    {
      id: "physics",
      name: "physics",
      checked: false,
      onChange: undefined,
      label: "פיסיקה",
    },
    {
      id: "computerScience",
      name: "computerScience",
      checked: false,
      onChange: undefined,
      label: "מדעי המחשב",
    },
    {
      id: "biology",
      name: "biology",
      checked: false,
      onChange: undefined,
      label: "ביולוגיה",
    },
    {
      id: "psychometric",
      name: "psychometric",
      checked: false,
      onChange: undefined,
      label: "פסיכומטרי",
    },
    {
      id: "Tongue",
      name: "Tongue",
      checked: false,
      onChange: undefined,
      label: "לשון",
    },
  ];

  const level = [
    {
      id: "elementarySchool",
      name: "elementarySchool",
      checked: false,
      onChange: undefined,
      label: "בית ספר יסודי",
    },
    {
      id: "juniorHigh",
      name: "juniorHigh",
      checked: false,
      onChange: undefined,
      label: "חטיבת ביניים",
    },
    {
      id: "highSchool",
      name: "highSchool",
      checked: false,
      onChange: undefined,
      label: "תיכון",
    },
    {
      id: "university",
      name: "university",
      checked: false,
      onChange: undefined,
      label: "אוניברסיטה/מכינה",
    },
  ];

  const specialNeeds = [
    {
      id: "autism",
      name: "autism",
      checked: false,
      onChange: undefined,
      label: "אוטיזים/קשיים סנסוריים",
    },
    {
      id: "hdd",
      name: "hdd",
      checked: false,
      onChange: undefined,
      label: "HDD",
    },
    {
      id: "hdad",
      name: "hdad",
      checked: false,
      onChange: undefined,
      label: "HDAD",
    },
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
    const emailInput = form.querySelector("#email");
    const nameInput = form.querySelector("#name");
    const phoneInput = form.querySelector("#phone");
    const messageInput = form.querySelector("#message");

    // Access the values of the form elements
    const email = emailInput.value;
    const name = nameInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;

    // Add the checked items to the form data
    checkedItems.forEach((item) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "checkedItems";
      input.value = item;
      form.appendChild(input);
    });

    emailjs.sendForm(
      "service_ouhaspm",
      "template_ino3nuf",
      form,
      "Q0KuceYtG9tHt_72N"
    );

    handleFormSubmit();
  };
  return (
    <form
      onSubmit={sendEmail}
      className=" flex h-[600px]  w-[484px] justify-between rounded-2xl border border-indigo-600 bg-indigo-600 p-10 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]"
    >
      <div className=" mb-5 flex flex-col items-end  md:mb-0 md:flex-row  md:items-start ">
        <div className="flex flex-col  items-end md:flex-row  md:items-start ">
          <div className="flex flex-col">
            <div className=" text-xl font-medium text-neutral-100" dir="rtl">
              במה אתה  מתעניין?
            </div>
            <div className=" flex md:flex-row">
              
              <div className="flex-end  flex flex-col text-end">
                <div className="mr-4 font-bold text-neutral-100">תקציב</div>
                <div className="overflow-wrap flex ">
                  <div>
                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.ils150}
                        name={"ils150"}
                        id={"ils150"}
                        onChange={handleCheckboxChange}
                        label={"150"}
                      ></CheckBox>
                    </div>
                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.ils200}
                        name={"ils200"}
                        id={"ils200"}
                        onChange={handleCheckboxChange}
                        label={"200"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.ils250}
                        name={"ils250"}
                        id={"ils250"}
                        onChange={handleCheckboxChange}
                        label={"250"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.vip}
                        name={"vip"}
                        id={"vip"}
                        onChange={handleCheckboxChange}
                        label={"vip"}
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-end   flex flex-col text-end ">
                <div className="mr-4 font-bold text-neutral-100">קטגוריות</div>
                <div className="overflow-wrap flex ">
                  <div>
                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.chemistry}
                        name={"chemistry"}
                        id={"chemistry"}
                        onChange={handleCheckboxChange}
                        label={"כימיה"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.english}
                        name={"english"}
                        id={"english"}
                        onChange={handleCheckboxChange}
                        label={"אנגלית"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.math}
                        name={"math"}
                        id={"math"}
                        onChange={handleCheckboxChange}
                        label={"מתמטיקה"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.physics}
                        name={"physics"}
                        id={"physics"}
                        onChange={handleCheckboxChange}
                        label={"פיסיקה"}
                      ></CheckBox>
                    </div>
                  </div>

                  <div>
                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.computerScience}
                        name={"computerScience"}
                        id={"computerScience"}
                        onChange={handleCheckboxChange}
                        label={"מדעי המחשב"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.biology}
                        name={"biology"}
                        id={"biology"}
                        onChange={handleCheckboxChange}
                        label={"ביולוגיה"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.psychometric}
                        name={"psychometric"}
                        id={"psychometric"}
                        onChange={handleCheckboxChange}
                        label={"פסיכומטרי"}
                      ></CheckBox>
                    </div>

                    <div className="mr-2 flex justify-end">
                      <CheckBox
                        checked={checkboxes.tongue}
                        name={"tongue"}
                        id={"tongue"}
                        onChange={handleCheckboxChange}
                        label={"לשון"}
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomSelect></CustomSelect>

      <div className="order-1 mb-5 flex w-[100%] flex-col  text-end md:order-3 md:mb-0 md:w-[200px] ">
        <div className="font-bold">שם </div>
        <input
          aria-label="name"
          id="name"
          name="name"
          type="text "
          className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={nameRef}
        />
        <div className="font-bold"> טלפון</div>
        <input
          aria-label="phone"
          id="phone"
          name="phone"
          type="text "
          className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={emailRef}
        />
        <div className="font-bold"> דואר אלקטרוני</div>
        <input
          aria-label="phone"
          id="email"
          name="email"
          type="text "
          className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={phoneRef}
        />

        <h3 className=" mt-20 text-orange-400 text-xl font-semibold text-right">הגדל/י את הסיכוי שלך לזכות</h3>
        <label className="font-bold text-orange-400 ">שם חבר</label>
        <input
          aria-label="phone"
          id="phone"
          name="phone"
          type="text "
          className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={emailRef}
        />
        <label className="font-bold text-orange-400 ">מספר טלפון</label>
        <input
          aria-label="phone"
          id="email"
          name="email"
          type="text "
          className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
          ref={phoneRef}
        />
      </div>
    </form>
  );
};

export default Form;

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
