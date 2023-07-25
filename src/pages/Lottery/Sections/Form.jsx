import { useEffect, useRef, useState } from "react";

import { db } from "../../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import CheckBox from "../../../components/ui/CheckBox";
import { Dropdown } from "flowbite-react";
import CustomSelect from "../components/DropDown";
import ArrowBtnLeft from "../components/ArrowBtnLeft";
import ArrowBtnRight from "../components/ArrowBtnRight";
import { buget, subjects } from "../../../data/data";

// import CheckBox from "../ui/CheckBox";

const Form = ({ handleNextPage, handlePrevPage, userCode }) => {
  const userInputRef = collection(db, "userInput");
  const [level, setLevel] = useState();
  const [errors, setErrors] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const friendNameRef = useRef();
  const friendPhoneRef = useRef();

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
    const isValid = validateForm();
    if (isValid) {
      const checkedItems = getCheckedItems();
      const formData = {
        items: checkedItems,
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        friendName: friendNameRef.current.value,
        friendPhone: friendPhoneRef.current.value,
        level: level?.label || "",
        userCode: userCode,
      };
      console.log("formData", formData);
      const response = await addDoc(userInputRef, formData);
      console.log("response", response);
      //
      handleNextPage();
    }
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

    // emailjs.sendForm(
    //   "service_ouhaspm",
    //   "template_ino3nuf",
    //   form,
    //   "Q0KuceYtG9tHt_72N"
    // );

    console.log(form);

    handleFormSubmit();
  };

  const validateForm = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

   

    // Perform validation checks
    if (name.trim() === "") {
      newErrors.name = "לא נקלט שם";
      isValid = false;
      alert("לא נקלט שם")
      setErrors(newErrors);
      return
    }

    if (phone.trim() === "") {
      newErrors.phone = "לא נקלט מספר טלפון";
      isValid = false;
      alert("לא נקלט מספר טלפון")
      setErrors(newErrors);
      return
    }

    if (email.trim() === "") {
      newErrors.email = "לא נקלט אימייל";
      isValid = false;
      alert("לא נקלט אימייל")
      setErrors(newErrors);
      return
    }

    
   
    return isValid;
  };

  const splitSubjectsIntoColumns = (subjects) => {
    const middleIndex = Math.ceil(subjects.length / 2);
    const firstColumn = subjects.slice(0, middleIndex);
    const secondColumn = subjects.slice(middleIndex);
    return [firstColumn, secondColumn];
  };

  const [firstColumnSubjects, secondColumnSubjects] =
    splitSubjectsIntoColumns(subjects);

  return (
    <form onSubmit={handleFormSubmit} className="relative md:top-[48px]  top-[175px]">
        <header dir="rtl" className=" absolute -top-[20rem] md:-top-20 bottom-10 mx-auto w-[100%] text-center text-[2.5rem] font-semibold leading-[4rem] text-orange-400">
         צריך שיעורים פרטיים ב:
        </header>
      <div className="z-1 relative flex h-[600px] w-[1088px]  rotate-90 rounded-2xl border border-indigo-600 bg-indigo-600 p-20 md:rotate-0 md:justify-between">
        <div className="order-2 md:order-1  flex flex-row justify-start md:w-full md:justify-evenly ">
          <div className=" scale-150 md:scale-100 relative left-40  top-40 md:left-0 md:top-0 flex flex-col items-end  md:mb-0 md:flex-row  md:items-start ">
            <div className="flex flex-col  items-end md:flex-row  md:items-start ">
              <div className="flex -rotate-90 flex-col md:rotate-0">
                <div
                  className=" text-xl font-medium text-neutral-100"
                  dir="rtl"
                >
                  במה אתה מתעניין?
                </div>
                <div className=" flex md:flex-row">
                  <div className="flex-end  flex flex-col text-end">
                    <div className="flex justify-between">
                      <div className="mr-4 font-bold text-neutral-100">
                        תקציב
                      </div>
                      <div className=" font-bold text-neutral-100">
                        קטגוריות
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-end justify-center ">
                        {buget.map((item) => (
                          <CheckBox
                          className={"text-white"}
                            key={item.id}
                            checked={checkboxes[item.id]}
                            name={item.name}
                            id={item.id}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          ></CheckBox>
                        ))}
                      </div>
                      <div className="flex flex-col items-end justify-center ml-5">
                        {firstColumnSubjects.map((item) => (
                          <CheckBox
                          className={"text-white"}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            checked={checkboxes[item.id]}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          />
                        ))}
                      </div>

                      <div className="flex flex-col items-end justify-center ml-5">
                        {secondColumnSubjects.map((item) => (
                          <CheckBox
                          className={"text-white"}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            checked={checkboxes[item.id]}
                            onChange={handleCheckboxChange}
                            label={item.label}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-end   flex flex-col text-end "></div>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        <div className="  scale-150  md:scale-100 order-1  mb-5 flex  relative bottom-[7rem] md:bottom-[0rem]  -rotate-90 flex-col text-end justify-center   md:justify-start md:order-3 md:mb-0 md:w-[200px] md:rotate-0 ">
        <div className=" absolute top-36 right-60  md:top-2  md:right-80  md:rotate-0 ">
            <CustomSelect setLevel={setLevel}></CustomSelect>
          </div>
          <div className="font-bold text-white">שם </div>
          <input
            aria-label="name"
            id="name"
            name="name"
            type="text "
            className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
            ref={nameRef}
          />
          {errors?.name && <p className="text-red">{errors?.name}</p>}
          <div className="font-bold text-white"> טלפון</div>
          <input
            aria-label="phone"
            id="phone"
            name="phone"
            type="text "
            className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
            ref={phoneRef}
          />
          {errors?.phone && <p className="">{errors?.phone}</p>}
          <div className="font-bold text-white"> דואר אלקטרוני</div>
          <input
            aria-label="phone"
            id="email"
            name="email"
            type="text "
            className="mt-2 rounded-lg border border-[#555FD9] pr-1 text-end focus:outline-none"
            ref={emailRef}
          />
          {errors?.email && <p className="text-red">{errors?.email}</p>}
         
        </div>


        <div className=" scale-150 md:scale-100  left-80 bottom-20  order-3 md:order-2 -rotate-90 md:rotate-0 flex flex-col items-end justify-start relative md:top-48 md:left-[11.7rem]">
        <h3 className="pb-2 mt-20 text-right text-xl font-semibold text-orange-400">
            הגדל/י את הסיכוי שלך לזכות
          </h3>
          <label className="font-bold text-orange-400 ">שם חבר</label>
          <input
            aria-label="phone"
            id="phone"
            name="phone"
            type="text "
            className="mt-2 rounded-lg border border-[#555FD9] pl-2  text-end focus:outline-none"
            ref={friendNameRef}
          />
          <label className="font-bold text-orange-400 ">מספר טלפון</label>
          <input
            aria-label="phone"
            id="email"
            name="email"
            type="text "
            className="mt-2 rounded-lg border border-[#555FD9] pl-2 text-end focus:outline-none"
            ref={friendPhoneRef}
          />
        </div>
      </div>
      <div className=" relative z-2 md:mt-4  mt-72 flex w-full justify-center ">
        <ArrowBtnLeft onClick={handleFormSubmit} />
        <div className="p-3"></div>
        <ArrowBtnRight onClick={handlePrevPage} disabled={true} />
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
